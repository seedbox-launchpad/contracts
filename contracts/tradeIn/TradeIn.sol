pragma solidity ^0.8.0;

import "../interfaces/ISwapRouter01.sol";
import "../interfaces/ISwapRouter02.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract TradeIn is Initializable, OwnableUpgradeable {

  address public asset;
  address public feeReceiver;
  uint256 public feePercent;
  uint public tolerance;

  mapping(address => Asset) public allowedAssets;
  mapping (address => Router) public allowedRouters;

  struct Asset {
    address router;
    bool isAllowed;
  }

  struct Router {
    uint256 routerType;
    bool isAllowed;
  }

  event Swap (
    address owner,
    address assetToSwap,
    address router,
    uint256 amountIn,
    uint256 fee,
    uint256 amountOut
  );

  function initialize (address asset_, address feeReceiver_, uint256 feePercent_) public initializer {
    __Ownable_init();
    asset = asset_;
    feeReceiver = feeReceiver_;
    feePercent = feePercent_;
    tolerance = 75;
  }

  function changeFeePercent (uint256 newFeePercent_) external onlyOwner {
    require (newFeePercent_ <= 10000, "TradeIn: Value cannot be more than 100% (10000)");
    feePercent = newFeePercent_;
  }

  function changeFeeReceiver (address newFeeReceiver_) external onlyOwner {
    require (newFeeReceiver_ != feeReceiver, "TradeIn: This address has been already fee receiver");
    require (newFeeReceiver_ != address(0), "TradeIn: Zero address is not allowed");
    feeReceiver = newFeeReceiver_;
  }

  function changeAllowedAsset (address assetAddress, address router, bool isAllowed) external onlyOwner {
    require (assetAddress != address(0), "TradeIn: Zero address is not allowed");
    require (allowedRouters[router].isAllowed, "TradeIn: Router is not allowed");
    allowedAssets[assetAddress].router = router;
    allowedAssets[assetAddress].isAllowed = isAllowed;
    IERC20(assetAddress).approve(router, 1e25);
  }

  function changeAllowedRouter (address router, uint256 routerType, bool isAllowed) external onlyOwner {
    require (router != address(0), "TradeIn: Zero address is not allowed");
    allowedRouters[router].routerType = routerType;
    allowedRouters[router].isAllowed = isAllowed;
  }

  function swap (address assetToSwap, uint256 amount) external {
    require(allowedAssets[assetToSwap].isAllowed, "TradeIn: Asset is not allowed");
    require(amount > 0, "TradeIn: Zero amount is not allowed");
    IERC20(assetToSwap).transferFrom(msg.sender, address(this), amount);
    uint256 prevBalance = IERC20(asset).balanceOf(address(this));
    address routerAddress = allowedAssets[assetToSwap].router;
    uint256 routerType = allowedRouters[routerAddress].routerType;
    if (routerType == 1) {
      uniswapSwap(assetToSwap, routerAddress, amount);
    }
    if (routerType == 2) {
      quickswapSwap(assetToSwap, routerAddress, amount);
    }
    uint256 currBalance = IERC20(asset).balanceOf(address(this));
    uint256 balance = currBalance - prevBalance;
    uint256 fee = balance * feePercent / 10000;
    IERC20(asset).transfer(msg.sender, balance - fee);
    IERC20(asset).transfer(feeReceiver, fee);
    emit Swap (msg.sender, assetToSwap, routerAddress, amount, fee, balance - fee);
  }

  function uniswapSwap (address assetToSwap, address routerAddress, uint256 amount) internal {
      ISwapRouter01 router = ISwapRouter01(routerAddress);
      address weth = router.WETH9();
      address[] memory path = new address[](3);
      path[0] = assetToSwap;
      path[1] = weth;
      path[2] = asset;
      router.swapExactTokensForTokens(amount, 0, path, address(this));
  }

  function quickswapSwap (address assetToSwap, address routerAddress, uint256 amount) internal {
      ISwapRouter02 router = ISwapRouter02(routerAddress);
      address weth = router.WETH();
      address[] memory path = new address[](3);
      path[0] = assetToSwap;
      path[1] = weth;
      path[2] = asset;
      uint256[] memory amountsOut = router.getAmountsOut(amount, path);
      router.swapExactTokensForTokens(amount, amountsOut[2]*tolerance/100, path, address(this), block.timestamp);
  }


}
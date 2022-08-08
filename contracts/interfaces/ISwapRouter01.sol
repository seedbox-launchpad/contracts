pragma solidity ^0.8.0;

interface ISwapRouter01 {
    function WETH9() external pure returns (address);
    function swapExactTokensForTokens(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] calldata path,
        address to
    ) external returns (uint256[] memory amounts);
}

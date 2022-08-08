pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC20, Ownable {
  constructor (string memory _name, string memory _symbol, uint8 _decimals) ERC20(_name, _symbol){
      minters[msg.sender] = true;
      decimalsValue = _decimals;
  }
  
  uint8 decimalsValue;
  mapping (address => bool) public minters;

  function decimals() public view override returns (uint8) {
		return decimalsValue;
	}

  function mint (address _addr, uint256 _amount) external {
    require(minters[msg.sender], "Token: Is not a minter");
    _mint(_addr, _amount);
  }

  function changeMinter (address _minter, bool access) external onlyOwner {
      minters[_minter] = access;
  }
}

pragma solidity ^0.8.0;

interface ILinearPool {
    function commonAmount() external returns (uint256);
    function commonBalanceOf(address _account) external view returns (uint256);
}

const hardhat = require('hardhat');
const { ethers, upgrades } = hardhat;

const main = async () => {
  // Pre-config
  // Get contract factory
  const pool = await ethers.getContractAt(
    'PreSalePool',
    '0x8A54b49b5fc8D7D7cCbE976437a6ed6971C7bd7a',
  );
  const factory = await pool.getAvailableTokensForSale();
  console.log('factory', factory);
};

main();
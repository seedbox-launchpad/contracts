const hardhat = require("hardhat");
const { ethers, upgrades } = hardhat;

async function main() {
  const [deployer] = await ethers.getSigners();

  const poolAddress = process.env.POOL_PROXY_ADDRESS;
  if (!poolAddress) {
    console.log("Pool address not found");
    return;
  }

  console.log("Upgrading contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  // Get contract factory
  const NewPoolFactory = await ethers.getContractFactory("FeesAndRulePool");

  // Attach with proxy
  const contract = await NewPoolFactory.attach(poolAddress);

  // Deploy proxy
  const lat = "0xC78e4813a9DE5Da0382398792b7D982c5f124839";
  const t = "0x89973f63871f3724FB35D94D0959B675E74Ab210";
  const tx = await upgrades.deployProxy(NewPoolFactory, [t, lat], {
    initializer: "__FeesAndRulePool_init",
  });
  const data = await tx.deployed();
  console.log(
    "Deployed StakingPool, at address: ",
    data.address
  );
  console.log(
    "Deployed StakingPool, transaction: ",
    tx.deployTransaction && tx.deployTransaction.hash
  );

  // // Upgrade contract proxy
  // const tx = await upgrades.upgradeProxy(poolAddress, NewPoolFactory);
  // console.log("Upgraded StakingPool, transaction: ", tx.deployTransaction && tx.deployTransaction.hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

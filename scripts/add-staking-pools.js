const hardhat = require("hardhat");
const { ethers, upgrades } = hardhat;

const pools = [
  ["100000000000000000000", "5", "604800"],
  ["100000000000000000000", "10", "1209600"],
  ["100000000000000000000", "15", "2592000"],
  ["100000000000000000000", "20", "5184000"],
  ["100000000000000000000", "25", "7776000"]
];

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
  let n = 0
  for (const i of pools) {
    n += 1;
    const tre = await contract.connect(deployer).linearAddPool(...i);
    console.log(`Pool #${n} deployed`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
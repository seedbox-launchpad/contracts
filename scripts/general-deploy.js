const { waitBlocks } = require("../utils/blockWaiter");
const { getImplementationAddress } = require("@openzeppelin/upgrades-core");
const hardhat = require("hardhat");
const { ethers, upgrades } = hardhat;

// Deploy configs
const dc = {
  constractsToDeploy: {
    usdt: false,
    usdc: false,
    busd: false,
    sbx: false,
    presaleFactory: false,
    staking: false,
  },
  lercController: "0x29C2541d25091B565c6999f20549EB2c75b7c269",
  isMintNeed: true,
  mintList: [
    "0xE00edC0564215fCDe68d3bAc7671D72ea3D15aF3",
    "0xc3f4929ECC1bBd794aD46089B8C1e9777c11Ea4D",
  ],
  stakingPools: [
    ["100000000000000000000", "5", "604800"],
    ["100000000000000000000", "10", "1209600"],
    ["100000000000000000000", "15", "2592000"],
    ["100000000000000000000", "20", "5184000"],
    ["100000000000000000000", "25", "7776000"],
  ],
  sbxAddress: "0xA5F0dBE12264C404CC5407C167F65AB513EA6205",
};

async function main() {
  const [deployer] = await ethers.getSigners();
  if (dc.constractsToDeploy.usdt) {
    await deployToken("USDT", "USDT", "6", deployer);
  }
  if (dc.constractsToDeploy.usdc) {
    await deployToken("USDC", "USDC", "6", deployer);
  }
  if (dc.constractsToDeploy.busd) {
    await deployToken("BUSD", "BUSD", "6", deployer);
  }
  if (dc.constractsToDeploy.sbx) {
    await deploySbx(deployer);
  }
  if (dc.constractsToDeploy.presaleFactory) {
    await deployFactory();
  }
  if (dc.constractsToDeploy.staking) {
    await deployStaking(deployer);
  }
}

const deployToken = async (name, symbol, dec, deployer) => {
  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy(name, symbol, dec);
  await token.deployed();
  await waitBlocks(5);
  try {
    await run("verify:verify", {
      address: token.address,
      contract: "contracts/mocks/Token.sol:Token",
      constructorArguments: [name, symbol, dec],
    });
  } catch (error) {}
  console.log(`${name} token deployed to: ${token.address}`);
  if (dc.isMintNeed) {
    for (i of dc.mintList) {
      await token.connect(deployer).mint(i, BigInt(100000 * Math.pow(10, dec)));
    }
  }
};

const deploySbx = async (deployer) => {
  const Token = await ethers.getContractFactory("SEEDBOX");
  const sbxParams = [
    BigInt(1e9 * 1e18),
    "SBX",
    "SBX",
    deployer.address,
    deployer.address,
    0,
    dc.lercController,
    deployer.address,
  ];
  const token = await Token.deploy(...sbxParams);
  await token.deployed();
  await waitBlocks(5);
  dc.sbxAddress = token.address;
  await run("verify:verify", {
    address: token.address,
    contract: "contracts/token/SEEDBOX.sol:SEEDBOX",
    constructorArguments: sbxParams,
  });
  console.log(`SBX token deployed to: ${token.address}`);
  if (dc.isMintNeed) {
    for (i of dc.mintList) {
      await token
        .connect(deployer)
        .transfer(i, BigInt(100000 * Math.pow(10, dec)));
    }
  }
};

const deployFactory = async () => {
  const Factory = await ethers.getContractFactory("PreSaleFactory");
  const factory = await upgrades.deployProxy(Factory, []);
  const factoryData = await factory.deployed();
  await waitBlocks(5);
  const currentImplAddress = await getImplementationAddress(
    ethers.provider,
    factoryData.address
  );
  await run("verify:verify", {
    address: currentImplAddress,
    contract: "contracts/presale-pool/PreSaleFactory.sol:PreSaleFactory",
  });
  console.log(
    `Presale factory deployed to: ${factoryData.address} => ${currentImplAddress}`
  );
};

const deployStaking = async (signer) => {
  const Staking = await ethers.getContractFactory("FeesAndRulePool");
  const staking = await upgrades.deployProxy(
    Staking,
    [signer.address, dc.sbxAddress],
    {
      initializer: "__FeesAndRulePool_init",
    }
  );
  const stakingData = await staking.deployed();
  await waitBlocks(5);
  const currentImplAddress = await getImplementationAddress(
    ethers.provider,
    stakingData.address
  );
  try {
    await run("verify:verify", {
      address: currentImplAddress,
      contract: "contracts/fee/feePool.sol:FeesAndRulePool"
    });
  } catch (error) {}
  await stakingData.connect(signer).linearSetRewardDistributor(signer.address);
  for (const pool of dc.stakingPools) {
    await stakingData.connect(signer).linearAddPool(...pool);
  }
  const Token = await ethers.getContractFactory("SEEDBOX");
  const token = await Token.attach(dc.sbxAddress);
  await token.connect(signer).approve(stakingData.address, BigInt(1e18 * 1e18));
  console.log(
    `Staking deployed to: ${stakingData.address} => ${currentImplAddress}`
  );
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

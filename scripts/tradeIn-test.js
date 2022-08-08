const { waitBlocks } = require("../utils/blockWaiter");
const { getImplementationAddress } = require("@openzeppelin/upgrades-core");
const hardhat = require("hardhat");
const { ethers, upgrades } = hardhat;

const proxy = "0x546bD7dcec5A1210F22861846dF8C79BD65174f8";
const impl = "0x5dd7e224792342aAD0013067D02B8663D246D192";
const dai = "0xcB1e72786A6eb3b44C2a2429e317c8a2462CFeb1";
const uni = "0xe03489d4e90b22c59c5e23d45dfd59fc0db8a025";
const router = "0x8954afa98594b838bda56fe4c12a09d7739d179b";

const u1 = "0xc3f4929ECC1bBd794aD46089B8C1e9777c11Ea4D";
const u2 = "0xDfBa01b26f08B363e929A944036f4a7f823FC498";

async function main() {
  const [deployer] = await ethers.getSigners();
  const Trade = await ethers.getContractFactory("TradeIn");
  const Token = await ethers.getContractFactory("ERC20");
  
  // const trade = await upgrades.deployProxy(Trade, [dai, u2, "2000"]);
  // const tradeData = await trade.deployed();
  // const currentImplAddress = await getImplementationAddress(
  //   ethers.provider,
  //   tradeData.address
  // );
  // console.log(`TradeIn deployed ${tradeData.address} => ${currentImplAddress}`);
  // await waitBlocks(5);
  // try {
  //   await run("verify:verify", {
  //     address: currentImplAddress,
  //     contract: "contracts/tradeIn/TradeIn.sol:TradeIn"
  //   });
  // } catch (error) {}
  // console.log("TradeIn verified");
  
  
  const token = await Token.attach(uni);
  const trade = await Trade.attach(proxy);
  
  // await trade.changeAllowedRouter(router, "2", true);
  // await trade.changeAllowedAsset(uni, router, true);
  // console.log("TradeIn setuped");
  
  
  

  // await token.approve(proxy, BigInt(1e10*1e18).toString());
  // console.log("Token approved");

  await trade.swap(uni, BigInt(1e15).toString());
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

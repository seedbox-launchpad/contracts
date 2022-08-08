const { waitBlocks } = require("../utils/blockWaiter");
const { getImplementationAddress } = require("@openzeppelin/upgrades-core");
const hardhat = require("hardhat");
const { ethers, upgrades } = hardhat;

const gov_add = "0x0b538b3Ae3E0eCee83b31991570B74257A5cBE94";
const staking = "0x807733C5deB8FB164Ef2b1bCb6B39Ad6df46c239";

async function main() {
  const coder = ethers.utils.defaultAbiCoder;
  const Gov = await ethers.getContractFactory("Governor");
  const gov = await Gov.attach(gov_add);
  // await gov.addProposal(
  //   "Sed do eiusmod tempor incididunt",
  //   "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  //   coder.encode(["string"], ["HashData"])
  // );
  // console.log("Added proposal");
  console.log(coder.encode(["string"], ["HashData"]))
  const count = await gov.proposalCount();
  console.log(count.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
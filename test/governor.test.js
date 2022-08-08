const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

const pools = [
  ["100000000000000000000", "5", "604800"],
  ["100000000000000000000", "10", "1209600"],
  ["100000000000000000000", "15", "2592000"],
  ["100000000000000000000", "20", "5184000"],
  ["100000000000000000000", "25", "7776000"],
];

describe("Governor", function () {
  const coder = ethers.utils.defaultAbiCoder;
  
  beforeEach(async function () {
    this.signers = await ethers.getSigners();
    this.admin = this.signers[0];
    this.users = this.signers;
    this.users.shift();

    

    const Sbx = await ethers.getContractFactory("Token");
    this.sbx = await Sbx.deploy("SBX", "SBX", 18);
    this.sbx.mint(this.admin.address, BigInt(1e18 * 1e18).toString());
    for (const i of this.users) {
      await this.sbx.mint(i.address, BigInt(100000 * 1e18).toString());
    }

    const Staking = await ethers.getContractFactory("FeesAndRulePool");
    this.staking = await upgrades.deployProxy(
      Staking,
      [this.signers[0].address, this.sbx.address],
      { initializer: "__FeesAndRulePool_init" }
    );
    for (const i of pools) {
      await this.staking.linearAddPool(...i);
    }
    this.sbx.approve(this.staking.address, BigInt(1e18 * 1e18).toString());
    for (const i of this.users) {
      await this.sbx
        .connect(i)
        .approve(this.staking.address, BigInt(1e18 * 1e18).toString());
      await this.staking
        .connect(i)
        .deposit(
          Math.ceil(Math.random() * 5) - 1,
          BigInt(Math.random() * 100000 * 1e18).toString()
        );
    }

    const Governor = await ethers.getContractFactory("Governor");
    this.gov = await await upgrades.deployProxy(Governor, [
      this.staking.address,
      3600,
      259200,
    ]);
  });

  it("Basic flow", async function () {
    await this.gov.addProposal(
      "Name",
      "Description",
      coder.encode(["string"], ["HashData"])
    );
    await ethers.provider.send("evm_increaseTime", [3700]);
    
    for (const i of this.users) {
      await this.gov.connect(i).vote(1, true);
    }
    await ethers.provider.send("evm_increaseTime", [259200]);
    
    let proposal = await this.gov.proposals(1);
    expect (proposal.againstVotes.toString()).to.equal("0");
    
    await this.gov.markAsExecuted(coder.encode(["uint256[]"], [[1]]));
    proposal = await this.gov.proposals(1);
    expect (proposal.executed).to.equal(true);
  });
});

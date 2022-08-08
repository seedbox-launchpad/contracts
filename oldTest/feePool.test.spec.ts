// import { ethers, waffle } from "hardhat";
// import web3 from "web3";
// import { Wallet, Signer, utils, BigNumber } from "ethers";
// import { expect } from "chai";
// import { deployContract } from "ethereum-waffle";

// import { FeesAndRulePool, ERC20Mock } from "../typechain";

// import {
//   abi as FEE_POOL_ABI,
//   bytecode as FEE_POOL_BYTECODE,
// } from "../artifacts/contracts/fee/feePool.sol/FeesAndRulePool.json";

// import * as PKF from "../artifacts/contracts/mocks/ERC20Mock.sol/ERC20Mock.json";

// import { increase } from "./utilities/time";

// const { toWei } = web3.utils;

// describe("Fee and rule pool testing !!!", () => {
//   let wallets: Wallet[];
//   let feePool: FeesAndRulePool;
//   let sbxToken: ERC20Mock;
//   let deployer: Wallet;
//   let tresury: Wallet;
//   let user: Wallet;
//   let user2: Wallet;
//   let rewardDistributor: Wallet;
//   const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
//   let contract: any;

//   before("load", async () => {
//     wallets = await (ethers as any).getSigners();
//     deployer = wallets[0];
//     user = wallets[1];
//     user2 = wallets[3];
//     tresury = wallets[4];
//     rewardDistributor = wallets[2];
//   });
//   beforeEach("load", async () => {
//     sbxToken = ((await deployContract(wallets[0] as any, PKF, [
//       "SBX Token",
//       "SBX",
//       0,
//     ])) as unknown) as ERC20Mock;

//     feePool = (await waffle.deployContract((deployer as unknown) as Signer, {
//       bytecode: FEE_POOL_BYTECODE,
//       abi: FEE_POOL_ABI,
//     })) as FeesAndRulePool;

//     await feePool
//       .connect(deployer)
//       .__FeesAndRulePool_init(tresury.address, sbxToken.address);
//     contract = new ethers.Contract(
//       feePool.address,
//       FEE_POOL_ABI,
//       ethers.provider
//     );

//     await sbxToken.mint(deployer.address, utils.parseEther("1000000000000"));

//     await sbxToken.mint(
//       rewardDistributor.address,
//       utils.parseEther("1000000000000000000000")
//     );
//     await sbxToken
//       .connect(rewardDistributor)
//       .approve(feePool.address, utils.parseEther("1000000000000"));

//     await sbxToken.mint(user.address, utils.parseEther("1000000000000"));
//     await sbxToken
//       .connect(user)
//       .approve(feePool.address, utils.parseEther("1000000000000"));
//   });
//   describe("create pool", () => {
//     beforeEach("load", async () => {
//       await feePool.linearSetRewardDistributor(rewardDistributor.address);
//     });
//     it("create a pool by user who is not owner", async () => {
//       await expect(feePool.connect(user).linearAddPool(0, 5, 0)).to.be.reverted;
//     });
//     it("create a pool with role owner", async () => {
//       const res = await feePool.connect(deployer).linearAddPool(0, 5, 0);
//       expect(res).to.emit(feePool, "LinearPoolCreated");
//       const poolRes = await feePool.linearPoolInfo(0);
//       expect(poolRes.APR.toString()).to.equal("5");
//     });
//     it("create one pool and check number of pools", async () => {
//       const res = await feePool.connect(deployer).linearAddPool(0, 5, 0);
//       const poolsLength = await feePool.linearPoolLength();
//       expect(poolsLength.toString()).to.equal("1");
//     });
//   });
//   describe("update pool", () => {
//     beforeEach("create pool", async () => {
//       await feePool.linearSetRewardDistributor(rewardDistributor.address);
//       await feePool.connect(deployer).linearAddPool(0, 5, 0);
//     });

//     it("set pool", async () => {
//       const res = await feePool.connect(deployer).linearSetPool(0, 5000, 50, true);
//       const eventFilter = contract.filters.LinearPoolUpdated();
//       const events = await contract.queryFilter(
//         eventFilter,
//         res.blockNumber,
//         res.blockNumber
//       );
//       expect(events[0].args?.unstakeFee).to.equal(5000);
//       expect(events[0].args?.minInvestment).to.equal(50);
//       expect(events[0].args?.extendedPeriod).to.equal(true);

//       await expect(feePool.connect(deployer).linearSetPool(0, 9001, 50, true)).to.be.revertedWith("LinearStakingPool: value exceeded limit");
//     });
//   });

//   describe("stake", () => {
//     beforeEach("create pool", async () => {
//       await feePool.linearSetRewardDistributor(rewardDistributor.address);
//       await feePool.connect(deployer).linearAddPool(0, 5, 0);
//       await feePool.connect(deployer).linearAddPool(toWei("100"), 5, 5000);
//     });
//     it("stake example", async () => {
//       await feePool.connect(user).deposit(0, toWei("100000"));
//       const res = await feePool.connect(user).deposit(0, toWei("500000"));
//       const eventFilter = contract.filters.LinearDeposit();
//       const events = await contract.queryFilter(
//         eventFilter,
//         res.blockNumber,
//         res.blockNumber
//       );
//       expect(events[0].args?.poolId).to.equal(0);
//       expect(events[0].args?.account).to.equal(user.address);
//       expect(events[0].args?.amount.toString()).to.equal(
//         toWei("500000").toString()
//       );
//     });
//     it("stake with amount < min investmemt", async () => {
//       await expect(
//         feePool.connect(user).deposit(1, toWei("1"))
//       ).to.be.revertedWith("LinearStakingPool: User must stake equal or higher than Minimum Stake SBX !");
//       await feePool.connect(deployer).linearSetPool(1, 2500, 1, false);
//       await feePool.connect(user).deposit(1, toWei("1"));
//       await feePool.connect(user).unstake(1, toWei("1"));
//       await feePool.connect(deployer).linearSetPool(1, 2500, toWei("200"), false);
//       await expect(
//         feePool.connect(user).deposit(1, toWei("199"))
//       ).to.be.revertedWith("LinearStakingPool: User must stake equal or higher than Minimum Stake SBX !");
//       await feePool.connect(deployer).updateFeeAndStatus(true, false, 500, tresury.address);
//       await expect(
//         feePool.connect(user).deposit(1, toWei("210"))
//       ).to.be.revertedWith("LinearStakingPool: User must stake equal or higher than Minimum Stake SBX !");
//     });
//     it("stake with amount < min investmemt 25%", async () => {
//       await expect(
//         feePool.connect(user).deposit(1, toWei("1"))
//       ).to.be.revertedWith("LinearStakingPool: User must stake equal or higher than Minimum Stake SBX !");
//       await feePool.connect(user).deposit(1, toWei("501000"));
//       await expect(
//         feePool.connect(user).deposit(1, toWei("125249"))
//       ).to.be.revertedWith(
//         "LinearStakingPool: User must stake equal or higher than Minimum Stake SBX !"
//       );
//       await feePool.connect(user).deposit(1, toWei("125250"));
//       await expect(
//         feePool.connect(user).deposit(1, toWei("15656"))
//       ).to.be.revertedWith(
//         "LinearStakingPool: User must stake equal or higher than Minimum Stake SBX !"
//       );
//       await feePool.connect(user).unstake(1, toWei("526250"));
//       await expect(
//         feePool.connect(user).deposit(1, toWei("24999"))
//       ).to.be.revertedWith(
//         "LinearStakingPool: User must stake equal or higher than Minimum Stake SBX !"
//       );
//       await feePool.connect(user).unstake(1, toWei("100000"));
//       await expect(
//         feePool.connect(user).deposit(1, toWei("5"))
//       ).to.be.revertedWith("LinearStakingPool: User must stake equal or higher than Minimum Stake SBX !");
//     });
//     it("stake and get total staked token in a pool", async () => {
//       await feePool.connect(user).deposit(0, toWei("100000"));
//       await feePool.connect(rewardDistributor).deposit(0, toWei("100000"));
//       expect(await feePool.linearTotalStaked(0)).to.equal(toWei("200000"));
//     });
//     it("stake and get total staked token in a pool by an user", async () => {
//       await feePool.connect(user).deposit(0, toWei("100000"));
//       expect(await feePool.linearBalanceOf(0, user.address)).to.equal(
//         toWei("100000")
//       );
//     });
//   });
//   describe("withdraw", () => {
//     beforeEach("create pool and stake", async () => {
//       await feePool.linearSetRewardDistributor(rewardDistributor.address);
//       await feePool.connect(deployer).linearAddPool(0, 5, 0);

//       await feePool.connect(deployer).linearAddPool(0, 5, 5000);

//       await feePool.connect(user).deposit(0, toWei("100000"));
//       await feePool.connect(user).deposit(1, toWei("100000"));
//     });
//     it("withdraw when pool still locked", async () => {
//       const res1 = await feePool.connect(user).unstake(0, toWei("100"));
//       const eventFilter = contract.filters.LinearWithdraw();

//       const events1 = await contract.queryFilter(
//         eventFilter,
//         res1.blockNumber,
//         res1.blockNumber
//       );
//       expect(events1[0].args?.amount).to.equal(toWei("100"));
//       expect(events1[0].args?.fee).to.equal(0);

//       const res2 = await feePool.connect(user).unstake(1, toWei("100"));
//       const events2 = await contract.queryFilter(
//         eventFilter,
//         res2.blockNumber,
//         res2.blockNumber
//       );
//       expect(events2[0].args?.amount).to.equal(toWei("100"));
//       expect(events2[0].args?.fee).to.equal(toWei("25"));
//     });
//     it("withdraw with amount greater than balance", async () => {
//       await expect(
//         feePool.connect(user).unstake(0, toWei("100000000"))
//       ).to.be.revertedWith("LinearStakingPool: invalid withdraw amount");
//     });
//     it("withdraw success all staked amount and can't claim reward before lock time", async () => {
//       await increase(BigNumber.from(4000));
//       const res = await feePool.connect(user).unstake(1, toWei("100000"));

//       expect(
//         (await feePool.linearPendingReward(1, user.address)).toString()
//       ).to.equal("0");
//       const eventFilter1 = contract.filters.LinearWithdraw();
//       const events1 = await contract.queryFilter(
//         eventFilter1,
//         res.blockNumber,
//         res.blockNumber
//       );

//       expect(events1[0].args?.amount).to.equal(toWei("100000"));
//       expect(events1[0].args?.fee).to.equal(toWei("25000"));
//     });
//     it("withdraw success with more than one time", async () => {
//       const res = await feePool.connect(user).unstake(0, toWei("50000"));

//       const eventFilter2 = contract.filters.LinearWithdraw();
//       const events2 = await contract.queryFilter(
//         eventFilter2,
//         res.blockNumber,
//         res.blockNumber
//       );

//       // Then withdraw 50000 will add 50000 pending into pending reward
//       const res2 = await feePool.connect(user).unstake(0, toWei("50000"));
//       const events3 = await contract.queryFilter(
//         eventFilter2,
//         res2.blockNumber,
//         res2.blockNumber
//       );
//       expect(events2[0].args?.amount).to.equal(toWei("50000"));
//       expect(events3[0].args?.amount).to.equal(toWei("50000"));
//     });
//   });
//   describe("test locked stake", () => {
//     beforeEach("create pool and stake", async () => {
//       await feePool.connect(deployer).linearAddPool(0, 60000, 604800);
//       await feePool.linearSetRewardDistributor(rewardDistributor.address);
//     });
//     it("extend time lock when stake more", async () => {
//       await feePool.connect(user).deposit(0, toWei("1000"));
//       await increase(BigNumber.from(604800));
//       const res1 = await feePool.connect(user).unstake(0, toWei("500"));
//       const eventFilter = contract.filters.LinearWithdraw();

//       const events1 = await contract.queryFilter(
//         eventFilter,
//         res1.blockNumber,
//         res1.blockNumber
//       );
//       expect(events1[0].args?.amount).to.equal(toWei("500"));
//       expect(events1[0].args?.fee).to.equal(toWei("0"));
//       await feePool.connect(user).deposit(0, toWei("1000"));
//       await increase(BigNumber.from(1000));
//       const res2 = await feePool.connect(user).unstake(0, toWei("1000"));
//       const events2 = await contract.queryFilter(
//         eventFilter,
//         res2.blockNumber,
//         res2.blockNumber
//       );
//       expect(events2[0].args?.amount).to.equal(toWei("1000"));
//       expect(events2[0].args?.fee).to.equal(toWei("250"));

//       expect(await feePool.linearBalanceOf(0, user.address)).to.equal(
//         toWei("500")
//       );
//     });
//     it("caculate rewards", async () => {
//       await feePool.connect(user).deposit(0, toWei("600"));
//       await increase(BigNumber.from(86000));
//       expect(await feePool.linearPendingReward(0, user.address)).to.equal(
//         toWei("0")
//       );
//       await increase(BigNumber.from(400));
//       expect(
//         (await feePool.linearPendingReward(0, user.address))
//           .toString()
//           .slice(0, -18)
//       ).to.equal("986");
//       await increase(BigNumber.from(512000));
//       expect(
//         (await feePool.linearPendingReward(0, user.address))
//           .toString()
//           .slice(0, -18)
//       ).to.equal("5917");
//       await increase(BigNumber.from(512000));
//       expect(
//         (await feePool.linearPendingReward(0, user.address))
//           .toString()
//           .slice(0, -18)
//       ).to.equal("6904");
//     });
//     it("stake/unstake and claim rewards", async () => {
//       await feePool.connect(user).deposit(0, toWei("600"));
//       await increase(BigNumber.from(86000));
//       expect(await feePool.linearPendingReward(0, user.address)).to.equal(
//         toWei("0")
//       );
//       await increase(BigNumber.from(400));
//       expect(
//         (await feePool.linearPendingReward(0, user.address))
//           .toString()
//           .slice(0, -18)
//       ).to.equal("986");
//       await increase(BigNumber.from(512000));
//       expect(
//         (await feePool.linearPendingReward(0, user.address))
//           .toString()
//           .slice(0, -18)
//       ).to.equal("5917");

//       const res = await feePool.connect(user).deposit(0, toWei("200"));

//       const eventRewardFilter = contract.filters.LinearRewardsHarvested();

//       const eventsRewards = await contract.queryFilter(
//         eventRewardFilter,
//         res.blockNumber,
//         res.blockNumber
//       );
//       expect(eventsRewards[0].args?.reward.toString().slice(0, -18)).to.equal(
//         "5917"
//       );

//       await increase(BigNumber.from(51200000));
//       expect(
//         (await feePool.linearPendingReward(0, user.address))
//           .toString()
//           .slice(0, -18)
//       ).to.equal("9205");

//       const res2 = await feePool.connect(user).unstake(0, toWei("800"));

//       const eventRewardFilter2 = contract.filters.LinearRewardsHarvested();

//       const eventsRewards2 = await contract.queryFilter(
//         eventRewardFilter2,
//         res2.blockNumber,
//         res2.blockNumber
//       );
//       expect(eventsRewards2[0].args?.reward.toString().slice(0, -18)).to.equal(
//         "9205"
//       );
//     });
//     it("extended rewards", async () => {
//       await feePool.connect(user).deposit(0, toWei("600"));
//       await increase(BigNumber.from(604800));
//       expect(
//         (await feePool.linearPendingReward(0, user.address))
//           .toString()
//           .slice(0, -18)
//       ).to.equal("6904");
//       await increase(BigNumber.from(433000));
//       expect(
//         (await feePool.linearPendingReward(0, user.address))
//           .toString()
//           .slice(0, -18)
//       ).to.equal("6904");
//       await feePool.connect(deployer).linearSetPool(0, 2500, 0, true);

//       expect(
//         (await feePool.linearPendingReward(0, user.address))
//           .toString()
//           .slice(0, -18)
//       ).to.equal("11835");

//       await feePool.connect(deployer).linearSetPool(0, 2500, 0, false);
//       expect(
//         (await feePool.linearPendingReward(0, user.address))
//           .toString()
//           .slice(0, -18)
//       ).to.equal("6904");

//       await feePool.connect(deployer).linearSetPool(0, 2500, 0, true);

//       const res2 = await feePool.connect(user).unstake(0, toWei("600"));

//       const eventRewardFilter2 = contract.filters.LinearRewardsHarvested();

//       const eventsRewards2 = await contract.queryFilter(
//         eventRewardFilter2,
//         res2.blockNumber,
//         res2.blockNumber
//       );
//       expect(eventsRewards2[0].args?.reward.toString().slice(0, -18)).to.equal(
//         "11835"
//       );
//     });
//   });
//   describe("check requires", () => {
//     beforeEach("create pool and stake", async () => {
//       await feePool.connect(deployer).linearAddPool(0, 0, 0);
//       await feePool.linearSetFlexLockDuration(0);
//     });
//     it("validate pool id", async () => {
//       await expect(
//         feePool.connect(user).deposit(4, toWei("100"))
//       ).to.revertedWith("LinearStakingPool: Pool are not exist");
//     });
//     it("set address 0 to rewardsDistributor and cold wallet", async () => {
//       await expect(
//         feePool.connect(deployer).linearSetRewardDistributor(ZERO_ADDRESS)
//       ).to.revertedWith("LinearStakingPool: invalid reward distributor");
//     });
//     it("do not set reward distributor address", async () => {
//       await feePool.connect(deployer).linearAddPool(0, 50, 0);

//       await feePool.connect(user).deposit(1, toWei("400"));
//       increase(BigNumber.from("5000000"));
//       await expect(
//         feePool.connect(user).unstake(1, toWei("100"))
//       ).to.be.revertedWith("LinearStakingPool: invalid reward distributor");
//       await expect(
//         feePool.connect(user).deposit(1, toWei("100"))
//       ).to.be.revertedWith("LinearStakingPool: invalid reward distributor");
//     });
//   });
//   describe("fee and rule", () => {
//     beforeEach("create pool", async () => {
//       await feePool.linearSetRewardDistributor(rewardDistributor.address);
//       await feePool.connect(deployer).linearAddPool(0, 5, 0);

//       await feePool.connect(deployer).linearAddPool(0, 5, 5000);
//     });
//     it("update fee with value exceeded limit", async () => {
//       await expect(
//         feePool.connect(deployer).updateFeeAndStatus(false, false, 99999, tresury.address)
//       ).to.be.revertedWith("Fee: value exceeded limit");
//     });
//     it("update tesury with zero address", async () => {
//       await expect(
//         feePool.connect(deployer).updateFeeAndStatus(true, true, 100, ZERO_ADDRESS)
//       ).to.be.revertedWith("Zero address not allowed");
//     });
//     it("update with who is not owner", async () => {
//       await expect(feePool.connect(user).updateFeeAndStatus(true, true, 101, tresury.address)).to.be.revertedWith(
//         "Ownable: caller is not the owner"
//       );
//       await expect(
//         feePool.connect(user).updateFeeAndStatus(true, true, 100, tresury.address)
//       ).to.be.revertedWith("Ownable: caller is not the owner");
//     });
//     it("stake with fee", async () => {
//       await feePool.connect(deployer).updateFeeAndStatus(true, false, 1000, tresury.address);

//       const res = await feePool.connect(user).deposit(0, toWei("500000"));

//       const eventDepositFilter = contract.filters.LinearDeposit();
//       const eventFeeFilter = contract.filters.FeeDeposit();

//       const eventsDeposit = await contract.queryFilter(
//         eventDepositFilter,
//         res.blockNumber,
//         res.blockNumber
//       );
//       const eventsFee = await contract.queryFilter(
//         eventFeeFilter,
//         res.blockNumber,
//         res.blockNumber
//       );
//       expect(eventsFee[0].args?.tresuryFee).to.equal(toWei("50000"));
//       expect(eventsFee[0].args?.amount).to.equal(toWei("450000"));

//       expect(eventsDeposit[0].args?.amount).to.equal(toWei("450000"));
//     });
//     it("unstake with fee", async () => {
//       await feePool.connect(deployer).updateFeeAndStatus(false, true, 1000, tresury.address);

//       await feePool.connect(user).deposit(0, toWei("500000"));
//       await feePool.connect(user).deposit(1, toWei("500000"));

//       const res = await feePool.connect(user).unstake(0, toWei("20000"));
//       const eventUnstakeFilter = contract.filters.LinearWithdraw();
//       const eventFeeFilter = contract.filters.FeeWithdraw();

//       const eventsUnstake = await contract.queryFilter(
//         eventUnstakeFilter,
//         res.blockNumber,
//         res.blockNumber
//       );
//       const eventsFee = await contract.queryFilter(
//         eventFeeFilter,
//         res.blockNumber,
//         res.blockNumber
//       );
//       expect(eventsFee[0].args?.tresuryFee).to.equal(toWei("2000"));
//       expect(eventsFee[0].args?.amount).to.equal(toWei("18000"));

//       expect(eventsUnstake[0].args?.amount).to.equal(toWei("20000"));
//       expect(eventsUnstake[0].args?.fee).to.equal(toWei("0"));
//       const res2 = await feePool.connect(user).unstake(1, toWei("20000"));
//       const eventsUnstake2 = await contract.queryFilter(
//         eventUnstakeFilter,
//         res2.blockNumber,
//         res2.blockNumber
//       );
//       const eventsFee2 = await contract.queryFilter(
//         eventFeeFilter,
//         res2.blockNumber,
//         res2.blockNumber
//       );
//       expect(eventsFee2[0].args?.tresuryFee).to.equal(toWei("2000"));
//       expect(eventsFee2[0].args?.amount).to.equal(toWei("13000"));

//       expect(eventsUnstake2[0].args?.amount).to.equal(toWei("20000"));
//       expect(eventsUnstake2[0].args?.fee).to.equal(toWei("5000"));

//     });
//     it("unstake with max fee", async () => {
//       await feePool.connect(deployer).updateFeeAndStatus(false, true, 1000, tresury.address);

//       await feePool.connect(user).deposit(1, toWei("500000"));
//       const eventUnstakeFilter = contract.filters.LinearWithdraw();
//       const eventFeeFilter = contract.filters.FeeWithdraw();
//       await feePool.connect(deployer).linearSetPool(1, 9000, 0, false);
      
//       const res2 = await feePool.connect(user).unstake(1, toWei("20000"));
//       const eventsUnstake2 = await contract.queryFilter(
//         eventUnstakeFilter,
//         res2.blockNumber,
//         res2.blockNumber
//       );
//       const eventsFee2 = await contract.queryFilter(
//         eventFeeFilter,
//         res2.blockNumber,
//         res2.blockNumber
//       );
//       expect(eventsFee2[0].args?.tresuryFee).to.equal(toWei("2000"));
//       expect(eventsFee2[0].args?.amount).to.equal(toWei("0"));

//       expect(eventsUnstake2[0].args?.amount).to.equal(toWei("20000"));
//       expect(eventsUnstake2[0].args?.fee).to.equal(toWei("18000"));
//     });
//   });
// });

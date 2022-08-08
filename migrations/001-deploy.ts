
import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
): Promise<void> {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  console.log("deployer: ", deployer);

  await deploy("SEEDBOX", {
    from: deployer,
    log: true,
    args: [
      "999700000000000000000000000000",
      "Sports Betting Marketplace",
      "SBX",
      "0xBA0cD74Fd953DA6eD6186CBe87DfAB0f9F6767f7",
      "0x89973f63871f3724FB35D94D0959B675E74Ab210",
      0,
      process.env.LOSSLESS,
      process.env.TRESURY,
    ],
  });
};

func.tags = ["SEEDBOX"];
export default func;

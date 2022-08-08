import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { network } from "hardhat";
import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";
const web3 = require('web3')

dotenvConfig({ path: resolve(__dirname, "./.env") });


const func: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment,
): Promise<void> {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  console.log("deployer: ", deployer);

  const sbxAddress = (await deployments.get('SEEDBOX')).address;

  await deploy("FeesAndRulePool", {
    from: deployer,
    log: true,
    args: [],
    proxy: {
      proxyContract: "OptimizedTransparentProxy",
      owner: deployer,
      execute: {
        methodName: "__FeesAndRulePool_init",
        args: [process.env.TRESURY, sbxAddress],
      },
    },
  });
};


func.tags = ["FeesAndRulePool"];
export default func;

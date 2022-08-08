import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-etherscan";
import { config as dotenvConfig } from "dotenv";
import { readdirSync } from "fs";
import "hardhat-contract-sizer";
import "hardhat-deploy";
// import "hardhat-gas-reporter";
import { HardhatUserConfig } from "hardhat/config";
import { NetworkUserConfig } from "hardhat/types";
import { join, resolve } from "path";
import "solidity-coverage";
require("hardhat-contract-sizer");
require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("hardhat-abi-exporter");
require("hardhat-tracer");

dotenvConfig({ path: resolve(__dirname, "./.env") });

// init typechain for the first time
try {
  readdirSync(join(__dirname, "typechain"));
  require("./tasks");
} catch {
  //
}

const chainIds = {
  goerli: 5,
  hardhat: 31337,
  kovan: 42,
  mainnet: 1,
  rinkeby: 4,
  ropsten: 3,
  mumbai: 80001,
  polygon: 137,
  bsctestnet: 97,
  bsc: 56,
  eth: 1,
};

// Ensure that we have all the environment variables we need.
const deployerPrivateKey: string | undefined = process.env.DEPLOYER_PRIVATE_KEY;
if (!deployerPrivateKey) {
  throw new Error("Please set your DEPLOYER_PRIVATE_KEY in a .env file");
}

const infuraApiKey: string | undefined = process.env.INFURA_API_KEY;
if (!infuraApiKey) {
  throw new Error("Please set your INFURA_API_KEY in a .env file");
}

function getChainConfig(network: keyof typeof chainIds): NetworkUserConfig {
  let url: string = "https://" + network + ".infura.io/v3/" + infuraApiKey;
  if (network === "polygon") {
    url = "https://polygon-rpc.com";
  }

  if (network === "mumbai") {
    // url = "https://matic-mumbai.chainstacklabs.com"
    url = "https://polygon-mumbai.g.alchemy.com/v2/X_rE2rXvvnQsiy0of3GMn11QS7r9sPla";
    // url = "https://rpc-mumbai.matic.today";
  }

  if (network === "ropsten") {
    url = "https://ropsten.infura.io/v3/a52089cc61bc43a9ab54d46e82e5933e";
  }

  if (network === "bsctestnet") {
    url = "https://data-seed-prebsc-1-s1.binance.org:8545/";
  }

  if (network === "bsc") {
    url = "https://bsc-dataseed.binance.org/";
  }

  if (network === "eth") {
    url = "https://mainnet.infura.io/v3/" + infuraApiKey;
  }

  return {
    accounts: [`0x${deployerPrivateKey}`],
    chainId: chainIds[network],
    url,
    gasPrice: 5e9,
  };
}

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  // gasReporter: {
  //   currency: "USD",
  //   enabled: process.env.REPORT_GAS ? true : false,
  //   excludeContracts: [],
  //   src: "./contracts",
  // },
  networks: {
    hardhat: {
      chainId: chainIds.hardhat,
      // accounts: [{
      //   privateKey: process.env.DEPLOYER_PRIVATE_KEY || "",
      //   balance: "1000000000000000000000000"
      // }]
    },
    goerli: getChainConfig("goerli"),
    kovan: getChainConfig("kovan"),
    rinkeby: getChainConfig("rinkeby"),
    ropsten: getChainConfig("ropsten"),
    polygon: getChainConfig("polygon"),
    bsctestnet: getChainConfig("bsctestnet"),
    bsc: getChainConfig("bsc"),
    eth: getChainConfig("eth"),
    mumbai: getChainConfig("mumbai"),
  },
  etherscan: {
    // Your API key for Etherscan
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
    deploy: "./deployments/migrations",
    deployments: "./deployments/artifacts",
  },
  solidity: {
    compilers: [
      {
        version: "0.8.2",
        settings: {
          metadata: {
            // Not including the metadata hash
            // https://github.com/paulrberg/solidity-template/issues/31
            bytecodeHash: "none",
          },
          // Disable the optimizer when debugging
          // https://hardhat.org/hardhat-network/#solidity-optimizer-support
          optimizer: {
            enabled: true,
            runs: 800,
          },
        },
      },
    ],
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
  namedAccounts: {
    deployer: 0,
  },
};

export default config;

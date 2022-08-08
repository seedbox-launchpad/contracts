/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LERC20, LERC20Interface } from "../LERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "totalSupply_",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "address",
        name: "recoveryAdmin_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timelockPeriod_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "lossless_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "turnOffDate",
        type: "uint256",
      },
    ],
    name: "LosslessTurnOffProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "LosslessTurnedOff",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "LosslessTurnedOn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "candidate",
        type: "address",
      },
    ],
    name: "RecoveryAdminChangeProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "RecoveryAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "key",
        type: "bytes",
      },
    ],
    name: "acceptRecoveryAdminOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "executeLosslessTurnOff",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "executeLosslessTurnOn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isLosslessOn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isLosslessTurnOffProposed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "losslessTurnOffTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proposeLosslessTurnOff",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "recoveryAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "setLosslessAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timelockPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "from",
        type: "address[]",
      },
    ],
    name: "transferOutBlacklistedFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "candidate",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "keyHash",
        type: "bytes32",
      },
    ],
    name: "transferRecoveryAdminOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600c805461ff0019166101001790553480156200002057600080fd5b506040516200203038038062002030833981016040819052620000439162000390565b6200004e33620000e2565b6200005a338862000132565b85516200006f9060049060208901906200021a565b508451620000859060059060208801906200021a565b50600980546001600160a01b039586166001600160a01b031991821617909155600680549486169490911693909317909255600a55600c805491909216620100000262010000600160b01b031990911617905550620004bb915050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0382166200018d5760405162461bcd60e51b815260206004820181905260248201527f4c45524332303a206d696e7420746f20746865207a65726f2061646472657373604482015260640160405180910390fd5b8060036000828254620001a1919062000443565b90915550506001600160a01b03821660009081526001602052604081208054839290620001d090849062000443565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620002289062000468565b90600052602060002090601f0160209004810192826200024c576000855562000297565b82601f106200026757805160ff191683800117855562000297565b8280016001018555821562000297579182015b82811115620002975782518255916020019190600101906200027a565b50620002a5929150620002a9565b5090565b5b80821115620002a55760008155600101620002aa565b80516001600160a01b0381168114620002d857600080fd5b919050565b600082601f830112620002ee578081fd5b81516001600160401b03808211156200030b576200030b620004a5565b604051601f8301601f19908116603f01168101908282118183101715620003365762000336620004a5565b8160405283815260209250868385880101111562000352578485fd5b8491505b8382101562000375578582018301518183018401529082019062000356565b838211156200038657848385830101525b9695505050505050565b600080600080600080600060e0888a031215620003ab578283fd5b875160208901519097506001600160401b0380821115620003ca578485fd5b620003d88b838c01620002dd565b975060408a0151915080821115620003ee578485fd5b50620003fd8a828b01620002dd565b9550506200040e60608901620002c0565b93506200041e60808901620002c0565b925060a088015191506200043560c08901620002c0565b905092959891949750929550565b600082198211156200046357634e487b7160e01b81526011600452602481fd5b500190565b6002810460018216806200047d57607f821691505b602082108114156200049f57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b611b6580620004cb6000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c80638da5cb5b116100f9578063b5c2287711610097578063dd62ed3e11610071578063dd62ed3e14610371578063efab831c146103aa578063f2fde38b146103b7578063f851a440146103ca576101c4565b8063b5c2287714610344578063ccfa214f14610357578063d6e242b814610369576101c4565b806395d89b41116100d357806395d89b411461030e578063a457c2d714610316578063a9059cbb14610329578063b38fe9571461033c576101c4565b80638da5cb5b146102d757806393310ffe146102e8578063936af911146102fb576101c4565b8063395093511161016657806361086b001161014057806361086b00146102a25780636e9960c3146102ab57806370a08231146102bc578063715018a6146102cf576101c4565b8063395093511461025c5780635b8a194a1461026f5780635f6529a314610277576101c4565b806323b872dd116101a257806323b872dd1461021c5780632baa3c9e1461022f5780632ecaf67514610244578063313ce5671461024d576101c4565b806306fdde03146101c9578063095ea7b3146101e757806318160ddd1461020a575b600080fd5b6101d16103dd565b6040516101de9190611a54565b60405180910390f35b6101fa6101f5366004611912565b61046f565b60405190151581526020016101de565b6003545b6040519081526020016101de565b6101fa61022a3660046118d7565b6106dc565b61024261023d366004611884565b61096d565b005b61020e600a5481565b604051601281526020016101de565b6101fa61026a366004611912565b610a2c565b610242610b31565b60065461028a906001600160a01b031681565b6040516001600160a01b0390911681526020016101de565b61020e600b5481565b6009546001600160a01b031661028a565b61020e6102ca366004611884565b610bce565b610242610bed565b6000546001600160a01b031661028a565b6102426102f6366004611912565b610c53565b61024261030936600461193b565b610d06565b6101d1610e1e565b6101fa610324366004611912565b610e2d565b6101fa610337366004611912565b61102f565b61024261110a565b6102426103523660046119aa565b611247565b600c546101fa90610100900460ff1681565b610242611365565b61020e61037f3660046118a5565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b600c546101fa9060ff1681565b6102426103c5366004611884565b611423565b60095461028a906001600160a01b031681565b6060600480546103ec90611ad6565b80601f016020809104026020016040519081016040528092919081815260200182805461041890611ad6565b80156104655780601f1061043a57610100808354040283529160200191610465565b820191906000526020600020905b81548152906001019060200180831161044857829003601f168201915b5050505050905090565b60008282600c60019054906101000a900460ff161561063b57600c546201000090046001600160a01b03166347abf3be6104a63390565b6040516001600160e01b031960e084901b1681526001600160a01b039182166004820152908516602482015260448101849052606401600060405180830381600087803b1580156104f657600080fd5b505af115801561050a573d6000803e3d6000fd5b50505050836000148061053e57503360009081526002602090815260408083206001600160a01b0389168452909152902054155b6105a05760405162461bcd60e51b815260206004820152602860248201527f4c45524332303a2043616e6e6f74206368616e6765206e6f6e207a65726f20616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6105ac335b86866114ee565b600c54600193506201000090046001600160a01b031663900f66ef6105ce3390565b6040516001600160e01b031960e084901b1681526001600160a01b039182166004820152908516602482015260448101849052606401600060405180830381600087803b15801561061e57600080fd5b505af1158015610632573d6000803e3d6000fd5b505050506106d4565b83158061066957503360009081526002602090815260408083206001600160a01b0389168452909152902054155b6106c65760405162461bcd60e51b815260206004820152602860248201527f4c45524332303a2043616e6e6f74206368616e6765206e6f6e207a65726f20616044820152676c6c6f77616e636560c01b6064820152608401610597565b6106cf336105a5565b600192505b505092915050565b6000838383600c60019054906101000a900460ff16156108c257600c546201000090046001600160a01b031663379f5c696107143390565b6040516001600160e01b031960e084901b1681526001600160a01b0391821660048201528187166024820152908516604482015260648101849052608401600060405180830381600087803b15801561076c57600080fd5b505af1158015610780573d6000803e3d6000fd5b5050505061078f87878761162d565b6001600160a01b0387166000908152600260209081526040808320338452909152902054858110156108155760405162461bcd60e51b815260206004820152602960248201527f4c45524332303a207472616e7366657220616d6f756e74206578636565647320604482015268616c6c6f77616e636560b81b6064820152608401610597565b61082a88335b6108258985611abf565b6114ee565b50600c54600194506201000090046001600160a01b031663a56e8adf61084d3390565b6040516001600160e01b031960e084901b1681526001600160a01b0391821660048201528187166024820152908516604482015260648101849052608401600060405180830381600087803b1580156108a557600080fd5b505af11580156108b9573d6000803e3d6000fd5b50505050610963565b6108cd87878761162d565b6001600160a01b0387166000908152600260209081526040808320338452909152902054858110156109535760405162461bcd60e51b815260206004820152602960248201527f4c45524332303a207472616e7366657220616d6f756e74206578636565647320604482015268616c6c6f77616e636560b81b6064820152608401610597565b61095d883361081b565b60019450505b5050509392505050565b6006546001600160a01b0316336001600160a01b0316146109d05760405162461bcd60e51b815260206004820152601e60248201527f4c45524332303a204d757374206265207265636f766572792061646d696e00006044820152606401610597565b6009546040516001600160a01b038084169216907f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f90600090a3600980546001600160a01b0319166001600160a01b0392909216919091179055565b60008282600c60019054906101000a900460ff1615610b2857600c546201000090046001600160a01b031663cf5961bb610a633390565b6040516001600160e01b031960e084901b1681526001600160a01b039182166004820152908516602482015260448101849052606401600060405180830381600087803b158015610ab357600080fd5b505af1158015610ac7573d6000803e3d6000fd5b50505050610b06610ad53390565b3360009081526002602090815260408083206001600160a01b038b1684529091529020548790610825908890611aa7565b600c54600193506201000090046001600160a01b03166334d01aa86105ce3390565b6106cf33610ad5565b6006546001600160a01b0316336001600160a01b031614610b945760405162461bcd60e51b815260206004820152601e60248201527f4c45524332303a204d757374206265207265636f766572792061646d696e00006044820152606401610597565b600c805461ffff19166101001790556040517fa4a40bdd0a809720a61b44f1b3497ce7dad87741a0ba3b961c2e65e645060e7090600090a1565b6001600160a01b0381166000908152600160205260409020545b919050565b6000546001600160a01b03163314610c475760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610597565b610c51600061181d565b565b6006546001600160a01b0316336001600160a01b031614610cb65760405162461bcd60e51b815260206004820152601e60248201527f4c45524332303a204d757374206265207265636f766572792061646d696e00006044820152606401610597565b600780546001600160a01b0319166001600160a01b03841690811790915560088290556040517fc5666bfdfb79a4b0b4abdbc565d6e9937a263233b2b378c55132d34dc5784a3690600090a25050565b600c546201000090046001600160a01b0316610d1f3390565b6001600160a01b031614610d755760405162461bcd60e51b815260206004820152601e60248201527f4c45524332303a204f6e6c79206c6f73736c65737320636f6e747261637400006044820152606401610597565b60005b81811015610e1957610e07838383818110610da357634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610db89190611884565b600c546201000090046001600160a01b0316610e02868686818110610ded57634e487b7160e01b600052603260045260246000fd5b90506020020160208101906102ca9190611884565b61162d565b80610e1181611b11565b915050610d78565b505050565b6060600580546103ec90611ad6565b60008282600c60019054906101000a900460ff1615610f9757600c546201000090046001600160a01b031663568c75a9610e643390565b6040516001600160e01b031960e084901b1681526001600160a01b039182166004820152908516602482015260448101849052606401600060405180830381600087803b158015610eb457600080fd5b505af1158015610ec8573d6000803e3d6000fd5b50505050600060026000610ed93390565b6001600160a01b03908116825260208083019390935260409182016000908120918a1681529252902054905084811015610f645760405162461bcd60e51b815260206004820152602660248201527f4c45524332303a2064656372656173656420616c6c6f77616e63652062656c6f60448201526577207a65726f60d01b6064820152608401610597565b610f74335b876108258885611abf565b50600c54600193506201000090046001600160a01b031663ded1f4d06105ce3390565b3360009081526002602090815260408083206001600160a01b03891684529091529020548481101561101a5760405162461bcd60e51b815260206004820152602660248201527f4c45524332303a2064656372656173656420616c6c6f77616e63652062656c6f60448201526577207a65726f60d01b6064820152608401610597565b61102333610f69565b50600195945050505050565b60008282600c60019054906101000a900460ff161561110157600c546201000090046001600160a01b0316631ffb811f6110663390565b6040516001600160e01b031960e084901b1681526001600160a01b039182166004820152908516602482015260448101849052606401600060405180830381600087803b1580156110b657600080fd5b505af11580156110ca573d6000803e3d6000fd5b505050506110df6110d83390565b868661162d565b600c54600193506201000090046001600160a01b031663f49062ca6105ce3390565b6106cf336110d8565b6006546001600160a01b0316336001600160a01b03161461116d5760405162461bcd60e51b815260206004820152601e60248201527f4c45524332303a204d757374206265207265636f766572792061646d696e00006044820152606401610597565b600c5460ff166111bf5760405162461bcd60e51b815260206004820152601c60248201527f4c45524332303a205475726e4f6666206e6f742070726f706f736564000000006044820152606401610597565b42600b5411156112115760405162461bcd60e51b815260206004820152601d60248201527f4c45524332303a2054696d65206c6f636b20696e2070726f67726573730000006044820152606401610597565b600c805461ffff191690556040517f5b534e2716e5ad68b9f67521378f8199a7ceb9d3f6f354275dad33fe42cf710a90600090a1565b6007546001600160a01b0316336001600160a01b0316146112aa5760405162461bcd60e51b815260206004820152601960248201527f4c45524332303a204d7573742062652063616e646974617465000000000000006044820152606401610597565b60085481516020830120146113015760405162461bcd60e51b815260206004820152601360248201527f4c45524332303a20496e76616c6964206b6579000000000000000000000000006044820152606401610597565b6007546006546040516001600160a01b0392831692909116907f1c7f382531621f02aefb4212478bba8871ffad078202bdbba87f3e21d639aebb90600090a350600754600680546001600160a01b0319166001600160a01b03909216919091179055565b6006546001600160a01b0316336001600160a01b0316146113c85760405162461bcd60e51b815260206004820152601e60248201527f4c45524332303a204d757374206265207265636f766572792061646d696e00006044820152606401610597565b600a546113d59042611aa7565b600b819055600c805460ff191660011790556040517f88e0be0448355c71674462d3cb36342f0d085f7b43a1deab03052c95eb158709916114199190815260200190565b60405180910390a1565b6000546001600160a01b0316331461147d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610597565b6001600160a01b0381166114e25760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610597565b6114eb8161181d565b50565b6001600160a01b03831661156a5760405162461bcd60e51b815260206004820152602560248201527f4c45524332303a20617070726f76652066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610597565b6001600160a01b0382166115cc5760405162461bcd60e51b815260206004820152602360248201527f4c45524332303a20617070726f766520746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610597565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166116925760405162461bcd60e51b815260206004820152602660248201527f4c45524332303a207472616e736665722066726f6d20746865207a65726f206160448201526564647265737360d01b6064820152608401610597565b6001600160a01b0382166116f45760405162461bcd60e51b8152602060048201526024808201527f4c45524332303a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610597565b6001600160a01b038316600090815260016020526040902054818110156117835760405162461bcd60e51b815260206004820152602760248201527f4c45524332303a207472616e7366657220616d6f756e7420657863656564732060448201527f62616c616e6365000000000000000000000000000000000000000000000000006064820152608401610597565b61178d8282611abf565b6001600160a01b0380861660009081526001602052604080822093909355908516815290812080548492906117c3908490611aa7565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161180f91815260200190565b60405180910390a350505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b0381168114610be857600080fd5b600060208284031215611895578081fd5b61189e8261186d565b9392505050565b600080604083850312156118b7578081fd5b6118c08361186d565b91506118ce6020840161186d565b90509250929050565b6000806000606084860312156118eb578081fd5b6118f48461186d565b92506119026020850161186d565b9150604084013590509250925092565b60008060408385031215611924578182fd5b61192d8361186d565b946020939093013593505050565b6000806020838503121561194d578182fd5b823567ffffffffffffffff80821115611964578384fd5b818501915085601f830112611977578384fd5b813581811115611985578485fd5b8660208083028501011115611998578485fd5b60209290920196919550909350505050565b6000602082840312156119bb578081fd5b813567ffffffffffffffff808211156119d2578283fd5b818401915084601f8301126119e5578283fd5b8135818111156119f7576119f7611b42565b604051601f8201601f19908116603f01168101908382118183101715611a1f57611a1f611b42565b81604052828152876020848701011115611a37578586fd5b826020860160208301379182016020019490945295945050505050565b6000602080835283518082850152825b81811015611a8057858101830151858201604001528201611a64565b81811115611a915783604083870101525b50601f01601f1916929092016040019392505050565b60008219821115611aba57611aba611b2c565b500190565b600082821015611ad157611ad1611b2c565b500390565b600281046001821680611aea57607f821691505b60208210811415611b0b57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611b2557611b25611b2c565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea164736f6c6343000802000a";

export class LERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    totalSupply_: BigNumberish,
    name_: string,
    symbol_: string,
    admin_: string,
    recoveryAdmin_: string,
    timelockPeriod_: BigNumberish,
    lossless_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LERC20> {
    return super.deploy(
      totalSupply_,
      name_,
      symbol_,
      admin_,
      recoveryAdmin_,
      timelockPeriod_,
      lossless_,
      overrides || {}
    ) as Promise<LERC20>;
  }
  getDeployTransaction(
    totalSupply_: BigNumberish,
    name_: string,
    symbol_: string,
    admin_: string,
    recoveryAdmin_: string,
    timelockPeriod_: BigNumberish,
    lossless_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      totalSupply_,
      name_,
      symbol_,
      admin_,
      recoveryAdmin_,
      timelockPeriod_,
      lossless_,
      overrides || {}
    );
  }
  attach(address: string): LERC20 {
    return super.attach(address) as LERC20;
  }
  connect(signer: Signer): LERC20__factory {
    return super.connect(signer) as LERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LERC20Interface {
    return new utils.Interface(_abi) as LERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): LERC20 {
    return new Contract(address, _abi, signerOrProvider) as LERC20;
  }
}
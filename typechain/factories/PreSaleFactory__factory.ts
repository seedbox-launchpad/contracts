/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PreSaleFactory,
  PreSaleFactoryInterface,
} from "../PreSaleFactory";

const _abi = [
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
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "registedBy",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "poolId",
        type: "uint256",
      },
    ],
    name: "PresalePoolCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allPools",
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
    name: "allPoolsLength",
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
        name: "_creator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "getCreatedPoolsByToken",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_creator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "getCreatedPoolsLengthByToken",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "getPools",
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
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "paused",
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
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_maxCap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_openTime",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_offeredCurrency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_offeredCurrencyDecimals",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_offeredRate",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
      {
        internalType: "address",
        name: "_signer",
        type: "address",
      },
    ],
    name: "registerPool",
    outputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50613e21806100206000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80638129fc1c11610081578063dc85887d1161005b578063dc85887d146101b1578063efde4e64146101c4578063f2fde38b146101cc576100c9565b80638129fc1c146101785780638da5cb5b14610180578063ae7a774b14610191576100c9565b8063715018a6116100b2578063715018a61461011457806375a466641461011e5780637fd3760914610131576100c9565b806341d1de97146100ce5780635c975abb146100fe575b600080fd5b6100e16100dc366004610ac8565b6101df565b6040516001600160a01b0390911681526020015b60405180910390f35b60655460ff1660405190151581526020016100f5565b61011c610209565b005b6100e161012c366004610a09565b610274565b61016a61013f3660046109d7565b6001600160a01b03918216600090815260986020908152604080832093909416825291909152205490565b6040519081526020016100f5565b61011c6102b9565b6033546001600160a01b03166100e1565b6101a461019f3660046109d7565b610384565b6040516100f59190610ae0565b6100e16101bf366004610a44565b610407565b60975461016a565b61011c6101da3660046109b6565b610848565b609781815481106101ef57600080fd5b6000918252602090912001546001600160a01b0316905081565b6033546001600160a01b031633146102685760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6102726000610923565b565b6098602052826000526040600020602052816000526040600020818154811061029c57600080fd5b6000918252602090912001546001600160a01b0316925083915050565b600054610100900460ff16806102d2575060005460ff16155b6103445760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840161025f565b600054610100900460ff1615801561036f576000805460ff1961ff0019909116610100171660011790555b8015610381576000805461ff00191690555b50565b6001600160a01b0380831660009081526098602090815260408083209385168352928152908290208054835181840281018401909452808452606093928301828280156103fa57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116103dc575b5050505050905092915050565b600061041560655460ff1690565b156104625760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015260640161025f565b6001600160a01b038a166104b85760405162461bcd60e51b815260206004820152601860248201527f49434f466163746f72793a3a5a45524f5f414444524553530000000000000000604482015260640161025f565b876105055760405162461bcd60e51b815260206004820152601960248201527f49434f466163746f72793a3a5a45524f5f4455524154494f4e00000000000000604482015260640161025f565b6001600160a01b03831661055b5760405162461bcd60e51b815260206004820152601860248201527f49434f466163746f72793a3a5a45524f5f414444524553530000000000000000604482015260640161025f565b836105a85760405162461bcd60e51b815260206004820152601d60248201527f49434f466163746f72793a3a5a45524f5f4f4646455245445f52415445000000604482015260640161025f565b6000604051806020016105ba9061098d565b601f1982820381018352601f9091011660405290506000610601338d6001600160a01b03918216600090815260986020908152604080832093909416825291909152205490565b6040516bffffffffffffffffffffffff1933606090811b821660208401528f901b16603482015260488101829052909150600090606801604051602081830303815290604052805190602001209050808351602085016000f560405163026bf74160e01b81526001600160a01b038f81166004830152602482018f9052604482018e9052606482018d90528b8116608483015260a482018a905260c482018b905288811660e48301528781166101048301529195509085169063026bf7419061012401600060405180830381600087803b1580156106de57600080fd5b505af11580156106f2573d6000803e3d6000fd5b5050505060986000336001600160a01b03166001600160a01b0316815260200190815260200160002060008e6001600160a01b03166001600160a01b03168152602001908152602001600020849080600181540180825580915050600190039060005260206000200160009091909190916101000a8154816001600160a01b0302191690836001600160a01b031602179055506097849080600181540180825580915050600190039060005260206000200160009091909190916101000a8154816001600160a01b0302191690836001600160a01b03160217905550836001600160a01b03168d6001600160a01b03167f99b686890294c1c5668af3f7ce1224eb8f3ee73900b209015ad08b3ada19895e3360016097805490506108169190610b2d565b604080516001600160a01b03909316835260208301919091520160405180910390a35050509998505050505050505050565b6033546001600160a01b031633146108a25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161025f565b6001600160a01b03811661091e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161025f565b610381815b603380546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6132c480610b5183390190565b80356001600160a01b03811681146109b157600080fd5b919050565b6000602082840312156109c7578081fd5b6109d08261099a565b9392505050565b600080604083850312156109e9578081fd5b6109f28361099a565b9150610a006020840161099a565b90509250929050565b600080600060608486031215610a1d578081fd5b610a268461099a565b9250610a346020850161099a565b9150604084013590509250925092565b60008060008060008060008060006101208a8c031215610a62578485fd5b610a6b8a61099a565b985060208a0135975060408a0135965060608a01359550610a8e60808b0161099a565b945060a08a0135935060c08a01359250610aaa60e08b0161099a565b9150610ab96101008b0161099a565b90509295985092959850929598565b600060208284031215610ad9578081fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b81811015610b215783516001600160a01b031683529284019291840191600101610afc565b50909695505050505050565b600082821015610b4b57634e487b7160e01b81526011600452602481fd5b50039056fe608060405242600655600060088190556009819055600a819055600b556010805460ff1916600117905534801561003557600080fd5b5061003f33610064565b600180556002805460ff19169055600380546001600160a01b031916331790556100b4565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61320080620000c46000396000f3fe6080604052600436106102eb5760003560e01c80637a09e02811610184578063b837df1e116100d6578063e1f7133d1161008a578063f60ba33811610064578063f60ba3381461091d578063fa5408011461093d578063fc0c546a1461095d576102f5565b8063e1f7133d146108ad578063e630025a146108e3578063f2fde38b146108fd576102f5565b8063c96f14b8116100bb578063c96f14b81461080d578063cffc18eb14610823578063d2b0737b14610843576102f5565b8063b837df1e146107b5578063c45a0155146107ed576102f5565b80638db79ffe11610138578063a4fcb3ea11610112578063a4fcb3ea14610741578063a7bb580314610761578063b42568881461079f576102f5565b80638db79ffe146106e157806395ccea6714610701578063a1491efc14610721576102f5565b806383c6394a1161016957806383c6394a146106965780638d4e4083146106ab5780638da5cb5b146106c3576102f5565b80637a09e028146106145780637a3d276714610634576102f5565b80634042b66f1161023d5780635c975abb116101f1578063715018a6116101cb578063715018a6146105a657806375d785a9146105bb578063763265de146105f4576102f5565b80635c975abb1461054c578063627749e6146105705780636301d4c214610586576102f5565b80634c016408116102225780634c016408146104cd578063519ee19e146104ed5780635a3a85cb14610503576102f5565b80634042b66f1461049757806349e80422146104ad576102f5565b806324c5aae71161029f5780633b7fcdca116102795780633b7fcdca1461042a5780633be3a3f5146104575780633c4b40b814610477576102f5565b806324c5aae7146103ca5780632868193a146103dd5780632ee58943146103fd576102f5565b80630f9c5d9e116102d05780630f9c5d9e1461036657806323548b8b14610386578063238ac933146103aa576102f5565b8063026bf741146103075780630f7d8e3914610329576102f5565b366102f557600080fd5b34801561030157600080fd5b50600080fd5b34801561031357600080fd5b50610327610322366004612e64565b610982565b005b34801561033557600080fd5b50610349610344366004612f42565b610b3c565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561037257600080fd5b50610327610381366004612bec565b610b4f565b34801561039257600080fd5b5061039c60085481565b60405190815260200161035d565b3480156103b657600080fd5b50600454610349906001600160a01b031681565b6103276103d8366004612d3a565b610c17565b3480156103e957600080fd5b506103276103f8366004612dae565b611037565b34801561040957600080fd5b5061039c610418366004612bec565b600c6020526000908152604090205481565b34801561043657600080fd5b5061039c610445366004612bec565b600d6020526000908152604090205481565b34801561046357600080fd5b50610327610472366004612f2a565b611132565b34801561048357600080fd5b50600554610349906001600160a01b031681565b3480156104a357600080fd5b5061039c60095481565b3480156104b957600080fd5b506103276104c8366004612dd9565b6111fb565b3480156104d957600080fd5b506103276104e8366004612e30565b611486565b3480156104f957600080fd5b5061039c600a5481565b34801561050f57600080fd5b5061053761051e366004612bec565b600f602052600090815260409020805460019091015482565b6040805192835260208301919091520161035d565b34801561055857600080fd5b5060025460ff165b604051901515815260200161035d565b34801561057c57600080fd5b5061039c60075481565b34801561059257600080fd5b506103276105a1366004612dae565b61151b565b3480156105b257600080fd5b50610327611610565b3480156105c757600080fd5b5061039c6105d6366004612bec565b6001600160a01b03166000908152600f602052604090206001015490565b34801561060057600080fd5b5061032761060f366004612f2a565b611664565b34801561062057600080fd5b5061032761062f366004612bec565b61172e565b34801561064057600080fd5b5061039c61064f366004612dae565b6040516bffffffffffffffffffffffff19606084901b1660208201526034810182905260009060540160405160208183030381529060405280519060200120905092915050565b3480156106a257600080fd5b5061039c6117f2565b3480156106b757600080fd5b50600754421015610560565b3480156106cf57600080fd5b506000546001600160a01b0316610349565b3480156106ed57600080fd5b506103276106fc366004612ef2565b611810565b34801561070d57600080fd5b5061032761071c366004612dae565b611892565b34801561072d57600080fd5b5061032761073c366004612c40565b6119f8565b34801561074d57600080fd5b5061056061075c366004612cd0565b611dfa565b34801561076d57600080fd5b5061078161077c366004612f87565b611e83565b60408051938452602084019290925260ff169082015260600161035d565b3480156107ab57600080fd5b5061039c60065481565b3480156107c157600080fd5b5061039c6107d0366004612c08565b600e60209081526000928352604080842090915290825290205481565b3480156107f957600080fd5b50600354610349906001600160a01b031681565b34801561081957600080fd5b5061039c600b5481565b34801561082f57600080fd5b5061056061083e366004612d3a565b611ef7565b34801561084f57600080fd5b5061039c61085e366004612e30565b6040516bffffffffffffffffffffffff19606085901b16602082015260348101839052605481018290526000906074016040516020818303038152906040528051906020012090509392505050565b3480156108b957600080fd5b5061039c6108c8366004612bec565b6001600160a01b03166000908152600f602052604090205490565b3480156108ef57600080fd5b506010546105609060ff1681565b34801561090957600080fd5b50610327610918366004612bec565b611f78565b34801561092957600080fd5b50610327610938366004612f2a565b612048565b34801561094957600080fd5b5061039c610958366004612f2a565b6120c1565b34801561096957600080fd5b506002546103499061010090046001600160a01b031681565b6003546001600160a01b031633146109e15760405162461bcd60e51b815260206004820152601260248201527f504f4f4c3a3a554e415554484f52495a4544000000000000000000000000000060448201526064015b60405180910390fd5b6002805474ffffffffffffffffffffffffffffffffffffffff0019166101006001600160a01b038c160217905560088890556006869055610a228688612120565b600755600580546001600160a01b0319166001600160a01b038416179055610a4932611f78565b600480546001600160a01b0319166001600160a01b038381169190911790915560408051808201825285815260208082018881529389166000908152600f90915291909120905181559051600191909101556007547f2c18a228f906d02cb6e47ba950aa8ef0626baf2da310c3673ede9614d85a128a908a908a90899089888a89610adc6000546001600160a01b031690565b604080516001600160a01b039a8b16815260208101999099528801969096526060870194909452918616608086015260a085015260c0840152831660e08301529091166101008201526101200160405180910390a1505050505050505050565b6000610b48838361212c565b9392505050565b6000546001600160a01b03163314610b975760405162461bcd60e51b815260206004820181905260248201526000805160206131d483398151915260448201526064016109d8565b6004546001600160a01b0382811691161415610bf55760405162461bcd60e51b815260206004820152601460248201527f504f4f4c3a3a5349474e45525f494e56414c494400000000000000000000000060448201526064016109d8565b600480546001600160a01b0319166001600160a01b0392909216919091179055565b60025460ff1615610c5d5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016109d8565b60026001541415610cb05760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016109d8565b600260015560008052600f6020527ff4803e074bd026baaf6ed2e288c9515f68c72fb7216eebdd7cae1718a53ec376543490610d385760405162461bcd60e51b815260206004820152602160248201527f504f4f4c3a3a50555243484153455f4d4554484f445f4e4f545f414c4c4f57456044820152601160fa1b60648201526084016109d8565b610d428682612150565b610d4a6121f7565b610d845760405162461bcd60e51b815260206004820152600b60248201526a1413d3d30e8e915391115160aa1b60448201526064016109d8565b610d9085858585612214565b610ddc5760405162461bcd60e51b815260206004820152601660248201527f504f4f4c3a494e56414c49445f5349474e41545552450000000000000000000060448201526064016109d8565b6000610de96000836122a4565b905080610df46117f2565b1015610e425760405162461bcd60e51b815260206004820181905260248201527f504f4f4c3a3a4e4f545f454e4f5547485f544f4b454e535f464f525f53414c4560448201526064016109d8565b8381101580610e7457506001600160a01b0386166000908152600c60205260409020548490610e719083612120565b10155b610ec05760405162461bcd60e51b815260206004820152601a60248201527f504f4f4c3a3a4d494e5f414d4f554e545f554e5245414348454400000000000060448201526064016109d8565b6001600160a01b0386166000908152600c60205260409020548590610ee59083612120565b1115610f595760405162461bcd60e51b815260206004820152602660248201527f504f4f4c3a3a50555243484153455f414d4f554e545f4558434545445f414c4c60448201527f4f57414e4345000000000000000000000000000000000000000000000000000060648201526084016109d8565b610f62826122fa565b610f6c82826123a6565b6001600160a01b03861660009081527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c6020526040902054610fae9083612120565b6001600160a01b0387811660009081527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c60209081526040918290209390935580518581529283018490529089169133917fd6e14f869a4a94e470ad9068cd72554abf10add2c7004aaeed6ea664aede76bd910160405180910390a35050600180555050505050565b6000546001600160a01b0316331461107f5760405162461bcd60e51b815260206004820181905260248201526000805160206131d483398151915260448201526064016109d8565b6001600160a01b0382166000908152600f60205260409020600101548114156110ea5760405162461bcd60e51b815260206004820152601260248201527f504f4f4c3a3a524154455f494e56414c4944000000000000000000000000000060448201526064016109d8565b6001600160a01b0382166000908152600f6020526040808220600101839055517f915bfd81dbd055d8da358fc4e8b3765b49c2622a2c9ae16e8ae64ed4b18f95629190a15050565b6000546001600160a01b0316331461117a5760405162461bcd60e51b815260206004820181905260248201526000805160206131d483398151915260448201526064016109d8565b428110156111ca5760405162461bcd60e51b815260206004820152601260248201527f504f4f4c3a3a494e56414c49445f54494d45000000000000000000000000000060448201526064016109d8565b60078190556040517f915bfd81dbd055d8da358fc4e8b3765b49c2622a2c9ae16e8ae64ed4b18f956290600090a150565b6002600154141561124e5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016109d8565b600260015561125e838383612404565b6112aa5760405162461bcd60e51b815260206004820152601860248201527f504f4f4c3a3a4e4f545f414c4c4f575f544f5f434c41494d000000000000000060448201526064016109d8565b6007544210156112fc5760405162461bcd60e51b815260206004820152601360248201527f504f4f4c3a3a4e4f545f46494e414c495a45440000000000000000000000000060448201526064016109d8565b6001600160a01b0383166000908152600d602052604090205482101561138a5760405162461bcd60e51b815260206004820152602660248201527f504f4f4c3a3a414d4f554e545f4d5553545f475245415445525f5448414e5f4360448201527f4c41494d4544000000000000000000000000000000000000000000000000000060648201526084016109d8565b6001600160a01b0383166000908152600d6020908152604080832054600c9092528220546113b791612476565b6001600160a01b0385166000908152600d6020526040812054919250906113df908590612476565b9050818111156113ec5750805b6001600160a01b0385166000908152600d602052604090205461140f9082612120565b6001600160a01b0386166000908152600d60205260409020556114323382612482565b600b5461143f9082612476565b600b5560408051338152602081018390527fe42df0d9493dfd0d7f69902c895b94c190a53e8c27876a86f45e7c997d9d8f7c910160405180910390a1505060018055505050565b6000546001600160a01b031633146114ce5760405162461bcd60e51b815260206004820181905260248201526000805160206131d483398151915260448201526064016109d8565b6001600160a01b0383166000908152600f602052604080822060018101859055839055517f915bfd81dbd055d8da358fc4e8b3765b49c2622a2c9ae16e8ae64ed4b18f95629190a1505050565b6000546001600160a01b031633146115635760405162461bcd60e51b815260206004820181905260248201526000805160206131d483398151915260448201526064016109d8565b6001600160a01b0382166000908152600f60205260409020548114156115cb5760405162461bcd60e51b815260206004820152601260248201527f504f4f4c3a3a524154455f494e56414c4944000000000000000000000000000060448201526064016109d8565b6001600160a01b0382166000908152600f6020526040808220839055517f915bfd81dbd055d8da358fc4e8b3765b49c2622a2c9ae16e8ae64ed4b18f95629190a15050565b6000546001600160a01b031633146116585760405162461bcd60e51b815260206004820181905260248201526000805160206131d483398151915260448201526064016109d8565b61166260006125dc565b565b6000546001600160a01b031633146116ac5760405162461bcd60e51b815260206004820181905260248201526000805160206131d483398151915260448201526064016109d8565b600a5481116116fd5760405162461bcd60e51b815260206004820152601660248201527f504f4f4c3a3a494e56414c49445f43415041434954590000000000000000000060448201526064016109d8565b60088190556040517fc83c8df771755b82ccfe87d589830a05813f12d04219b02ca65318bd542217b190600090a150565b6000546001600160a01b031633146117765760405162461bcd60e51b815260206004820181905260248201526000805160206131d483398151915260448201526064016109d8565b6001600160a01b03811661178957600080fd5b6002805474ffffffffffffffffffffffffffffffffffffffff0019166101006001600160a01b038416908102919091179091556040519081527f5d108ca248943e98e1886bbc2c38beda701271994a14354258a11692b81b73cf9060200160405180910390a150565b600061180b600a5460085461247690919063ffffffff16565b905090565b6000546001600160a01b031633146118585760405162461bcd60e51b815260206004820181905260248201526000805160206131d483398151915260448201526064016109d8565b6010805460ff19168215151790556040517f915bfd81dbd055d8da358fc4e8b3765b49c2622a2c9ae16e8ae64ed4b18f956290600090a150565b6000546001600160a01b031633146118da5760405162461bcd60e51b815260206004820181905260248201526000805160206131d483398151915260448201526064016109d8565b6002546040516370a0823160e01b8152306004820152829161010090046001600160a01b0316906370a082319060240160206040518083038186803b15801561192257600080fd5b505afa158015611936573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061195a9190612fba565b10156119a85760405162461bcd60e51b815260206004820152601a60248201527f504f4f4c3a3a494e53554646494349454e545f42414c414e434500000000000060448201526064016109d8565b6119b28282612482565b604080516001600160a01b0384168152602081018390527f5fafa99d0643513820be26656b45130b01e1c03062e1266bf36f88cbd3bd9695910160405180910390a15050565b60025460ff1615611a3e5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016109d8565b60026001541415611a915760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016109d8565b600260019081556001600160a01b0387166000908152600f602052604090200154611b085760405162461bcd60e51b815260206004820152602160248201527f504f4f4c3a3a50555243484153455f4d4554484f445f4e4f545f414c4c4f57456044820152601160fa1b60648201526084016109d8565b611b106121f7565b611b4a5760405162461bcd60e51b815260206004820152600b60248201526a1413d3d30e8e915391115160aa1b60448201526064016109d8565b611b5684848484612214565b611ba25760405162461bcd60e51b815260206004820152601660248201527f504f4f4c3a494e56414c49445f5349474e41545552450000000000000000000060448201526064016109d8565b611bac8786612150565b6000611bb887876122a4565b905080611bc36117f2565b1015611c115760405162461bcd60e51b815260206004820181905260248201527f504f4f4c3a3a4e4f545f454e4f5547485f544f4b454e535f464f525f53414c4560448201526064016109d8565b8281101580611c4357506001600160a01b0385166000908152600c60205260409020548390611c409083612120565b10155b611c8f5760405162461bcd60e51b815260206004820152601a60248201527f504f4f4c3a3a4d494e5f414d4f554e545f554e5245414348454400000000000060448201526064016109d8565b6001600160a01b0385166000908152600c60205260409020548490611cb49083612120565b1115611d285760405162461bcd60e51b815260206004820152602560248201527f504f4f4c3a50555243484153455f414d4f554e545f4558434545445f414c4c4f60448201527f57414e434500000000000000000000000000000000000000000000000000000060648201526084016109d8565b611d32878761262c565b611d3c86826123a6565b6001600160a01b03851660009081527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c6020526040902054611d7e9087612120565b6001600160a01b038881166000818152600e602090815260408083208b8616845282529182902094909455805191825292810189905291820183905289169033907f7298563060885829720d658271e2cf90735f0dedf473ea50428added4b4f78819060600160405180910390a3505060018055505050505050565b600080611e4985856040516bffffffffffffffffffffffff19606084901b1660208201526034810182905260009060540160405160208183030381529060405280519060200120905092915050565b90506000611e56826120c1565b9050866001600160a01b0316611e6c8286610b3c565b6001600160a01b031614925050505b949350505050565b60008060008351604114611ed95760405162461bcd60e51b815260206004820152601860248201527f696e76616c6964207369676e6174757265206c656e677468000000000000000060448201526064016109d8565b50505060208101516040820151606090920151909260009190911a90565b60408051606086901b6bffffffffffffffffffffffff191660208083019190915260348201869052605480830186905283518084039091018152607490920190925280519101206000906000611f4c826120c1565b9050876001600160a01b0316611f628286610b3c565b6001600160a01b03161498975050505050505050565b6000546001600160a01b03163314611fc05760405162461bcd60e51b815260206004820181905260248201526000805160206131d483398151915260448201526064016109d8565b6001600160a01b03811661203c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016109d8565b612045816125dc565b50565b6000546001600160a01b031633146120905760405162461bcd60e51b815260206004820181905260248201526000805160206131d483398151915260448201526064016109d8565b60068190556040517f915bfd81dbd055d8da358fc4e8b3765b49c2622a2c9ae16e8ae64ed4b18f956290600090a150565b600061211a826040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b92915050565b6000610b48828461300b565b600080600061213b8585612646565b91509150612148816126b6565b509392505050565b6001600160a01b0382166121a65760405162461bcd60e51b815260206004820152601960248201527f504f4f4c3a3a494e56414c49445f42454e45464943494152590000000000000060448201526064016109d8565b806121f35760405162461bcd60e51b815260206004820152601860248201527f504f4f4c3a3a494e56414c49445f5745495f414d4f554e54000000000000000060448201526064016109d8565b5050565b600080600654421015801561220e57506007544211155b91505090565b6000336001600160a01b0386161461226e5760405162461bcd60e51b815260206004820152601560248201527f504f4f4c3a3a57524f4e475f43414e444944415445000000000000000000000060448201526064016109d8565b60105460ff161561229957600454612292906001600160a01b031686868686611ef7565b9050611e7b565b506001949350505050565b6001600160a01b0382166000908152600f602052604081206001810154905460006122d082601261300b565b90506122f06122e082600a613080565b6122ea87866128b9565b906128c5565b9695505050505050565b6005546040516001600160a01b0390911690600090829084908381818185875af1925050503d806000811461234b576040519150601f19603f3d011682016040523d82523d6000602084013e612350565b606091505b50509050806123a15760405162461bcd60e51b815260206004820152601c60248201527f504f4f4c3a3a57414c4c45545f5452414e534645525f4641494c45440000000060448201526064016109d8565b505050565b6009546123b39083612120565b600955600a546123c39082612120565b600a55336000908152600c60205260409020546123e09082612120565b336000908152600c6020526040902055600b546123fd9082612120565b600b555050565b6000336001600160a01b0385161461245e5760405162461bcd60e51b815260206004820152601560248201527f504f4f4c3a3a57524f4e475f43414e444944415445000000000000000000000060448201526064016109d8565b600454611e7b906001600160a01b0316858585611dfa565b6000610b48828461316d565b6002546040516370a0823160e01b8152306004820152829161010090046001600160a01b0316906370a082319060240160206040518083038186803b1580156124ca57600080fd5b505afa1580156124de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125029190612fba565b10156125505760405162461bcd60e51b815260206004820152601760248201527f504f4f4c3a3a494e53554646494349454e545f46554e4400000000000000000060448201526064016109d8565b60025460405163a9059cbb60e01b81526001600160a01b038481166004830152602482018490526101009092049091169063a9059cbb90604401602060405180830381600087803b1580156125a457600080fd5b505af11580156125b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123a19190612f0e565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6005546121f390839033906001600160a01b0316846128d1565b60008082516041141561267d5760208301516040840151606085015160001a61267187828585612a30565b945094505050506126af565b8251604014156126a7576020830151604084015161269c868383612b1d565b9350935050506126af565b506000905060025b9250929050565b60008160048111156126d857634e487b7160e01b600052602160045260246000fd5b14156126e357612045565b600181600481111561270557634e487b7160e01b600052602160045260246000fd5b14156127535760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016109d8565b600281600481111561277557634e487b7160e01b600052602160045260246000fd5b14156127c35760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016109d8565b60038160048111156127e557634e487b7160e01b600052602160045260246000fd5b141561283e5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016109d8565b600481600481111561286057634e487b7160e01b600052602160045260246000fd5b14156120455760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016109d8565b6000610b48828461314e565b6000610b488284613023565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b179052915160009283929088169161294a9190612fd2565b6000604051808303816000865af19150503d8060008114612987576040519150601f19603f3d011682016040523d82523d6000602084013e61298c565b606091505b50915091508180156129b65750805115806129b65750808060200190518101906129b69190612f0e565b612a285760405162461bcd60e51b815260206004820152603160248201527f5472616e7366657248656c7065723a3a7472616e7366657246726f6d3a20747260448201527f616e7366657246726f6d206661696c656400000000000000000000000000000060648201526084016109d8565b505050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115612a675750600090506003612b14565b8460ff16601b14158015612a7f57508460ff16601c14155b15612a905750600090506004612b14565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015612ae4573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116612b0d57600060019250925050612b14565b9150600090505b94509492505050565b6000807f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831660ff84901c601b01612b5787828885612a30565b935093505050935093915050565b600082601f830112612b75578081fd5b813567ffffffffffffffff80821115612b9057612b9061319a565b604051601f8301601f19908116603f01168101908282118183101715612bb857612bb861319a565b81604052838152866020858801011115612bd0578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215612bfd578081fd5b8135610b48816131b0565b60008060408385031215612c1a578081fd5b8235612c25816131b0565b91506020830135612c35816131b0565b809150509250929050565b600080600080600080600060e0888a031215612c5a578283fd5b8735612c65816131b0565b96506020880135612c75816131b0565b9550604088013594506060880135612c8c816131b0565b93506080880135925060a0880135915060c088013567ffffffffffffffff811115612cb5578182fd5b612cc18a828b01612b65565b91505092959891949750929550565b60008060008060808587031215612ce5578384fd5b8435612cf0816131b0565b93506020850135612d00816131b0565b925060408501359150606085013567ffffffffffffffff811115612d22578182fd5b612d2e87828801612b65565b91505092959194509250565b600080600080600060a08688031215612d51578081fd5b8535612d5c816131b0565b94506020860135612d6c816131b0565b93506040860135925060608601359150608086013567ffffffffffffffff811115612d95578182fd5b612da188828901612b65565b9150509295509295909350565b60008060408385031215612dc0578182fd5b8235612dcb816131b0565b946020939093013593505050565b600080600060608486031215612ded578283fd5b8335612df8816131b0565b925060208401359150604084013567ffffffffffffffff811115612e1a578182fd5b612e2686828701612b65565b9150509250925092565b600080600060608486031215612e44578283fd5b8335612e4f816131b0565b95602085013595506040909401359392505050565b60008060008060008060008060006101208a8c031215612e82578182fd5b8935612e8d816131b0565b985060208a0135975060408a0135965060608a0135955060808a0135612eb2816131b0565b945060a08a0135935060c08a0135925060e08a0135612ed0816131b0565b91506101008a0135612ee1816131b0565b809150509295985092959850929598565b600060208284031215612f03578081fd5b8135610b48816131c5565b600060208284031215612f1f578081fd5b8151610b48816131c5565b600060208284031215612f3b578081fd5b5035919050565b60008060408385031215612f54578182fd5b82359150602083013567ffffffffffffffff811115612f71578182fd5b612f7d85828601612b65565b9150509250929050565b600060208284031215612f98578081fd5b813567ffffffffffffffff811115612fae578182fd5b611e7b84828501612b65565b600060208284031215612fcb578081fd5b5051919050565b60008251815b81811015612ff25760208186018101518583015201612fd8565b818111156130005782828501525b509190910192915050565b6000821982111561301e5761301e613184565b500190565b60008261303e57634e487b7160e01b81526012600452602481fd5b500490565b80825b60018086116130555750612b14565b81870482111561306757613067613184565b8086161561307457918102915b9490941c938002613046565b6000610b48600019848460008261309957506001610b48565b816130a657506000610b48565b81600181146130bc57600281146130c6576130f3565b6001915050610b48565b60ff8411156130d7576130d7613184565b6001841b9150848211156130ed576130ed613184565b50610b48565b5060208310610133831016604e8410600b8410161715613126575081810a8381111561312157613121613184565b610b48565b6131338484846001613043565b80860482111561314557613145613184565b02949350505050565b600081600019048311821515161561316857613168613184565b500290565b60008282101561317f5761317f613184565b500390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461204557600080fd5b801515811461204557600080fdfe4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a164736f6c6343000802000aa164736f6c6343000802000a";

export class PreSaleFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PreSaleFactory> {
    return super.deploy(overrides || {}) as Promise<PreSaleFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PreSaleFactory {
    return super.attach(address) as PreSaleFactory;
  }
  connect(signer: Signer): PreSaleFactory__factory {
    return super.connect(signer) as PreSaleFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PreSaleFactoryInterface {
    return new utils.Interface(_abi) as PreSaleFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PreSaleFactory {
    return new Contract(address, _abi, signerOrProvider) as PreSaleFactory;
  }
}
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  VRFCoordinatorV2Mock,
  VRFCoordinatorV2MockInterface,
} from "../../../../../../@chainlink/contracts/src/v0.8/mocks/VRFCoordinatorV2Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint96",
        name: "_baseFee",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "_gasPriceLink",
        type: "uint96",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSubscription",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "MustBeSubOwner",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "outputSeed",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "payment",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    name: "RandomWordsFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "keyHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "preSeed",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "subId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "minimumRequestConfirmations",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "callbackGasLimit",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "numWords",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RandomWordsRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "subId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "SubscriptionCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "subId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "SubscriptionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "subId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "SubscriptionFunded",
    type: "event",
  },
  {
    inputs: [],
    name: "BASE_FEE",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GAS_PRICE_LINK",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
    ],
    name: "acceptSubscriptionOwnerTransfer",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_consumer",
        type: "address",
      },
    ],
    name: "addConsumer",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "cancelSubscription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "createSubscription",
    outputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_consumer",
        type: "address",
      },
    ],
    name: "fulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "uint96",
        name: "_amount",
        type: "uint96",
      },
    ],
    name: "fundSubscription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getRequestConfig",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
    ],
    name: "getSubscription",
    outputs: [
      {
        internalType: "uint96",
        name: "balance",
        type: "uint96",
      },
      {
        internalType: "uint64",
        name: "reqCount",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "consumers",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_consumer",
        type: "address",
      },
    ],
    name: "removeConsumer",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_keyHash",
        type: "bytes32",
      },
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "uint16",
        name: "_minimumRequestConfirmations",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "_callbackGasLimit",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_numWords",
        type: "uint32",
      },
    ],
    name: "requestRandomWords",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "requestSubscriptionOwnerTransfer",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040526001805560646002553480156200001a57600080fd5b5060405162002049380380620020498339818101604052810190620000409190620000e4565b816bffffffffffffffffffffffff166080816bffffffffffffffffffffffff1660a01b81525050806bffffffffffffffffffffffff1660a0816bffffffffffffffffffffffff1660a01b8152505050506200012b565b600080fd5b60006bffffffffffffffffffffffff82169050919050565b620000be816200009b565b8114620000ca57600080fd5b50565b600081519050620000de81620000b3565b92915050565b60008060408385031215620000fe57620000fd62000096565b5b60006200010e85828601620000cd565b92505060206200012185828601620000cd565b9150509250929050565b60805160a01c60a05160a01c611ee4620001656000396000818161086c0152610cdc01526000818161031101526108b10152611ee46000f3fe608060405234801561001057600080fd5b50600436106100ce5760003560e01c8063823597401161008c578063a410347f11610066578063a410347f146101eb578063a47c769614610209578063afc69b531461023c578063d7ae1d3014610258576100ce565b806382359740146101955780639f87fad7146101b1578063a21a23e4146101cd576100ce565b8062012291146100d357806304c357cb146100f35780633d18651e1461010f5780635d3b1d301461012d5780637341c10c1461015d578063808974ff14610179575b600080fd5b6100db610274565b6040516100ea93929190611391565b60405180910390f35b61010d60048036038101906101089190611472565b6102d4565b005b61011761030f565b60405161012491906114d9565b60405180910390f35b61014760048036038101906101429190611578565b610333565b604051610154919061160c565b60405180910390f35b61017760048036038101906101729190611472565b61054f565b005b610193600480360381019061018e9190611653565b61058a565b005b6101af60048036038101906101aa9190611693565b610aaf565b005b6101cb60048036038101906101c69190611472565b610aea565b005b6101d5610b25565b6040516101e291906116cf565b60405180910390f35b6101f3610cda565b60405161020091906114d9565b60405180910390f35b610223600480360381019061021e9190611693565b610cfe565b60405161023394939291906117b7565b60405180910390f35b6102566004803603810190610251919061182f565b610e9f565b005b610272600480360381019061026d9190611472565b61106a565b005b60008060606003621e8480600067ffffffffffffffff81111561029a5761029961186f565b5b6040519080825280602002602001820160405280156102c85781602001602082028036833780820191505090505b50925092509250909192565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610306906118fb565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000081565b60008073ffffffffffffffffffffffffffffffffffffffff16600360008767ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156103e5576040517f1f6a65b600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600160008154809291906103fa9061194a565b9190505590506000600260008154809291906104159061194a565b91905055905060405180606001604052808867ffffffffffffffff1681526020018663ffffffff1681526020018563ffffffff168152506004600084815260200190815260200160002060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548163ffffffff021916908363ffffffff160217905550604082015181600001600c6101000a81548163ffffffff021916908363ffffffff1602179055509050503373ffffffffffffffffffffffffffffffffffffffff168767ffffffffffffffff16897f63373d1c4696214b898952999c9aaec57dac1ee2723cec59bea6888f489a977285858b8b8b604051610539959493929190611993565b60405180910390a4819250505095945050505050565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610581906118fb565b60405180910390fd5b60005a905060006004600085815260200190815260200160002060000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff161415610607576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fe90611a32565b60405180910390fd5b6000600460008581526020019081526020016000206040518060600160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016000820160089054906101000a900463ffffffff1663ffffffff1663ffffffff16815260200160008201600c9054906101000a900463ffffffff1663ffffffff1663ffffffff168152505090506000816040015163ffffffff1667ffffffffffffffff8111156106cd576106cc61186f565b5b6040519080825280602002602001820160405280156106fb5781602001602082028036833780820191505090505b50905060005b826040015163ffffffff16811015610771578581604051602001610726929190611a52565b6040516020818303038152906040528051906020012060001c82828151811061075257610751611a7b565b5b60200260200101818152505080806107699061194a565b915050610701565b50600080631fe543e360e01b8784604051602401610790929190611b68565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905060008673ffffffffffffffffffffffffffffffffffffffff16856020015163ffffffff16836040516108219190611c12565b60006040518083038160008787f1925050503d806000811461085f576040519150601f19603f3d011682016040523d82523d6000602084013e610864565b606091505b5050905060007f00000000000000000000000000000000000000000000000000000000000000006bffffffffffffffffffffffff165a886108a59190611c29565b6108af9190611c5d565b7f00000000000000000000000000000000000000000000000000000000000000006bffffffffffffffffffffffff166108e89190611cb7565b9050806bffffffffffffffffffffffff1660036000886000015167ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff161015610986576040517ff4d678b800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060036000886000015167ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160148282829054906101000a90046bffffffffffffffffffffffff166109db9190611d0d565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550600460008a8152602001908152602001600020600080820160006101000a81549067ffffffffffffffff02191690556000820160086101000a81549063ffffffff021916905560008201600c6101000a81549063ffffffff02191690555050887f7dffc5ae5ee4e2e4df1651cf6ad329a73cebdb728f37ea0187b9b17e036756e48a8385604051610a9c93929190611d5c565b60405180910390a2505050505050505050565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae1906118fb565b60405180910390fd5b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1c906118fb565b60405180910390fd5b600080600081819054906101000a900467ffffffffffffffff1680929190610b4c90611d93565b91906101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505060405180604001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200160006bffffffffffffffffffffffff16815250600360008060009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff16021790555090505060008054906101000a900467ffffffffffffffff1667ffffffffffffffff167f464722b4166576d3dcbba877b999bc35cf911f4eaf434b7eba68fa113951d0bf33604051610cb89190611dc4565b60405180910390a260008054906101000a900467ffffffffffffffff16905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008060006060600073ffffffffffffffffffffffffffffffffffffffff16600360008767ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610db6576040517f1f6a65b600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600360008667ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160149054906101000a90046bffffffffffffffffffffffff166000600360008867ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600067ffffffffffffffff811115610e6157610e6061186f565b5b604051908082528060200260200182016040528015610e8f5781602001602082028036833780820191505090505b5093509350935093509193509193565b600073ffffffffffffffffffffffffffffffffffffffff16600360008467ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610f50576040517f1f6a65b600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600360008467ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160149054906101000a90046bffffffffffffffffffffffff16905081600360008567ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160148282829054906101000a90046bffffffffffffffffffffffff16610fe89190611ddf565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508267ffffffffffffffff167fd39ec07f4e209f627a4c427971473820dc129761ba28de8906bd56f57101d4f882848461104f9190611ddf565b60405161105d929190611e5c565b60405180910390a2505050565b816000600360008367ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611121576040517f1f6a65b600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461119157806040517fd8a3fb520000000000000000000000000000000000000000000000000000000081526004016111889190611dc4565b60405180910390fd5b8367ffffffffffffffff167fe8ed5b475a5b5987aa9165e8731bb78043f39eee32ec5a1169a89e27fcd4981584600360008867ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060000160149054906101000a90046bffffffffffffffffffffffff1660405161120f929190611e85565b60405180910390a2600360008567ffffffffffffffff1667ffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a8154906bffffffffffffffffffffffff0219169055505050505050565b600061ffff82169050919050565b6112a48161128d565b82525050565b600063ffffffff82169050919050565b6112c3816112aa565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b611308816112f5565b82525050565b600061131a83836112ff565b60208301905092915050565b6000602082019050919050565b600061133e826112c9565b61134881856112d4565b9350611353836112e5565b8060005b8381101561138457815161136b888261130e565b975061137683611326565b925050600181019050611357565b5085935050505092915050565b60006060820190506113a6600083018661129b565b6113b360208301856112ba565b81810360408301526113c58184611333565b9050949350505050565b600080fd5b600067ffffffffffffffff82169050919050565b6113f1816113d4565b81146113fc57600080fd5b50565b60008135905061140e816113e8565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061143f82611414565b9050919050565b61144f81611434565b811461145a57600080fd5b50565b60008135905061146c81611446565b92915050565b60008060408385031215611489576114886113cf565b5b6000611497858286016113ff565b92505060206114a88582860161145d565b9150509250929050565b60006bffffffffffffffffffffffff82169050919050565b6114d3816114b2565b82525050565b60006020820190506114ee60008301846114ca565b92915050565b6114fd816112f5565b811461150857600080fd5b50565b60008135905061151a816114f4565b92915050565b6115298161128d565b811461153457600080fd5b50565b60008135905061154681611520565b92915050565b611555816112aa565b811461156057600080fd5b50565b6000813590506115728161154c565b92915050565b600080600080600060a08688031215611594576115936113cf565b5b60006115a28882890161150b565b95505060206115b3888289016113ff565b94505060406115c488828901611537565b93505060606115d588828901611563565b92505060806115e688828901611563565b9150509295509295909350565b6000819050919050565b611606816115f3565b82525050565b600060208201905061162160008301846115fd565b92915050565b611630816115f3565b811461163b57600080fd5b50565b60008135905061164d81611627565b92915050565b6000806040838503121561166a576116696113cf565b5b60006116788582860161163e565b92505060206116898582860161145d565b9150509250929050565b6000602082840312156116a9576116a86113cf565b5b60006116b7848285016113ff565b91505092915050565b6116c9816113d4565b82525050565b60006020820190506116e460008301846116c0565b92915050565b6116f381611434565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61172e81611434565b82525050565b60006117408383611725565b60208301905092915050565b6000602082019050919050565b6000611764826116f9565b61176e8185611704565b935061177983611715565b8060005b838110156117aa5781516117918882611734565b975061179c8361174c565b92505060018101905061177d565b5085935050505092915050565b60006080820190506117cc60008301876114ca565b6117d960208301866116c0565b6117e660408301856116ea565b81810360608301526117f88184611759565b905095945050505050565b61180c816114b2565b811461181757600080fd5b50565b60008135905061182981611803565b92915050565b60008060408385031215611846576118456113cf565b5b6000611854858286016113ff565b92505060206118658582860161181a565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082825260208201905092915050565b7f6e6f7420696d706c656d656e7465640000000000000000000000000000000000600082015250565b60006118e5600f8361189e565b91506118f0826118af565b602082019050919050565b60006020820190508181036000830152611914816118d8565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611955826115f3565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156119885761198761191b565b5b600182019050919050565b600060a0820190506119a860008301886115fd565b6119b560208301876115fd565b6119c2604083018661129b565b6119cf60608301856112ba565b6119dc60808301846112ba565b9695505050505050565b7f6e6f6e6578697374656e74207265717565737400000000000000000000000000600082015250565b6000611a1c60138361189e565b9150611a27826119e6565b602082019050919050565b60006020820190508181036000830152611a4b81611a0f565b9050919050565b6000604082019050611a6760008301856115fd565b611a7460208301846115fd565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611adf816115f3565b82525050565b6000611af18383611ad6565b60208301905092915050565b6000602082019050919050565b6000611b1582611aaa565b611b1f8185611ab5565b9350611b2a83611ac6565b8060005b83811015611b5b578151611b428882611ae5565b9750611b4d83611afd565b925050600181019050611b2e565b5085935050505092915050565b6000604082019050611b7d60008301856115fd565b8181036020830152611b8f8184611b0a565b90509392505050565b600081519050919050565b600081905092915050565b60005b83811015611bcc578082015181840152602081019050611bb1565b83811115611bdb576000848401525b50505050565b6000611bec82611b98565b611bf68185611ba3565b9350611c06818560208601611bae565b80840191505092915050565b6000611c1e8284611be1565b915081905092915050565b6000611c34826115f3565b9150611c3f836115f3565b925082821015611c5257611c5161191b565b5b828203905092915050565b6000611c68826115f3565b9150611c73836115f3565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611cac57611cab61191b565b5b828202905092915050565b6000611cc2826115f3565b9150611ccd836115f3565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611d0257611d0161191b565b5b828201905092915050565b6000611d18826114b2565b9150611d23836114b2565b925082821015611d3657611d3561191b565b5b828203905092915050565b60008115159050919050565b611d5681611d41565b82525050565b6000606082019050611d7160008301866115fd565b611d7e60208301856114ca565b611d8b6040830184611d4d565b949350505050565b6000611d9e826113d4565b915067ffffffffffffffff821415611db957611db861191b565b5b600182019050919050565b6000602082019050611dd960008301846116ea565b92915050565b6000611dea826114b2565b9150611df5836114b2565b9250826bffffffffffffffffffffffff03821115611e1657611e1561191b565b5b828201905092915050565b6000819050919050565b6000611e46611e41611e3c846114b2565b611e21565b6115f3565b9050919050565b611e5681611e2b565b82525050565b6000604082019050611e716000830185611e4d565b611e7e6020830184611e4d565b9392505050565b6000604082019050611e9a60008301856116ea565b611ea76020830184611e4d565b939250505056fea2646970667358221220e94f07f3e4bb71dae8e3eadbfe05f98643ca236f2aef48270e1b962a33ec18bd64736f6c63430008080033";

type VRFCoordinatorV2MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VRFCoordinatorV2MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VRFCoordinatorV2Mock__factory extends ContractFactory {
  constructor(...args: VRFCoordinatorV2MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _baseFee: BigNumberish,
    _gasPriceLink: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VRFCoordinatorV2Mock> {
    return super.deploy(
      _baseFee,
      _gasPriceLink,
      overrides || {}
    ) as Promise<VRFCoordinatorV2Mock>;
  }
  override getDeployTransaction(
    _baseFee: BigNumberish,
    _gasPriceLink: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_baseFee, _gasPriceLink, overrides || {});
  }
  override attach(address: string): VRFCoordinatorV2Mock {
    return super.attach(address) as VRFCoordinatorV2Mock;
  }
  override connect(signer: Signer): VRFCoordinatorV2Mock__factory {
    return super.connect(signer) as VRFCoordinatorV2Mock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VRFCoordinatorV2MockInterface {
    return new utils.Interface(_abi) as VRFCoordinatorV2MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VRFCoordinatorV2Mock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as VRFCoordinatorV2Mock;
  }
}

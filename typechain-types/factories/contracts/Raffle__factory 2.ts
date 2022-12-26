/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Raffle, RaffleInterface } from "../../contracts/Raffle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "vrfCoordinatorV2",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "subscriptionId",
        type: "uint64",
      },
      {
        internalType: "bytes32",
        name: "gasLane",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "interval",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "entranceFee",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "callbackGasLimit",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "have",
        type: "address",
      },
      {
        internalType: "address",
        name: "want",
        type: "address",
      },
    ],
    name: "OnlyCoordinatorCanFulfill",
    type: "error",
  },
  {
    inputs: [],
    name: "Raffle__RaffleNotOpen",
    type: "error",
  },
  {
    inputs: [],
    name: "Raffle__SendMoreToEnterRaffle",
    type: "error",
  },
  {
    inputs: [],
    name: "Raffle__TransferFailed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "currentBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numPlayers",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "raffleState",
        type: "uint256",
      },
    ],
    name: "Raffle__UpkeepNotNeeded",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "RaffleEnter",
    type: "event",
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
    ],
    name: "RequestedRaffleWinner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "WinnerPicked",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "checkUpkeep",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "enterRaffle",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getEntranceFee",
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
    name: "getInterval",
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
    name: "getLastTimeStamp",
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
    name: "getNumWords",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getNumberOfPlayers",
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getPlayer",
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
    name: "getRaffleState",
    outputs: [
      {
        internalType: "enum Raffle.RaffleState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRecentWinner",
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
    name: "getRequestConfirmations",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "rawFulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101406040523480156200001257600080fd5b50604051620018213803806200182183398181016040528101906200003891906200029e565b858073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b81525050508573ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508360e081815250508261012081815250508467ffffffffffffffff1660c08167ffffffffffffffff1660c01b81525050816002819055506000600460006101000a81548160ff021916908360018111156200010857620001076200033a565b5b0217905550426000819055508063ffffffff166101008163ffffffff1660e01b8152505050505050505062000369565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200016a826200013d565b9050919050565b6200017c816200015d565b81146200018857600080fd5b50565b6000815190506200019c8162000171565b92915050565b600067ffffffffffffffff82169050919050565b620001c181620001a2565b8114620001cd57600080fd5b50565b600081519050620001e181620001b6565b92915050565b6000819050919050565b620001fc81620001e7565b81146200020857600080fd5b50565b6000815190506200021c81620001f1565b92915050565b6000819050919050565b620002378162000222565b81146200024357600080fd5b50565b60008151905062000257816200022c565b92915050565b600063ffffffff82169050919050565b62000278816200025d565b81146200028457600080fd5b50565b60008151905062000298816200026d565b92915050565b60008060008060008060c08789031215620002be57620002bd62000138565b5b6000620002ce89828a016200018b565b9650506020620002e189828a01620001d0565b9550506040620002f489828a016200020b565b94505060606200030789828a0162000246565b93505060806200031a89828a0162000246565b92505060a06200032d89828a0162000287565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60805160601c60a05160601c60c05160c01c60e0516101005160e01c6101205161144e620003d3600039600081816107b1015261085a015260006106600152600061061c0152600061063d015260006105e0015260008181610319015261036d015261144e6000f3fe6080604052600436106100c25760003560e01c806353a2c19a1161007f57806391ad27b41161005957806391ad27b414610238578063c1c244e814610263578063e55ae4e81461028e578063fd6673f5146102cb576100c2565b806353a2c19a146101a45780635f1b0fd8146101cf5780636e04ff0d146101fa576100c2565b806309bc33a7146100c7578063115cbaf5146100f25780631fe543e31461011d5780632cfcc539146101465780634585e33b14610150578063473f1ddc14610179575b600080fd5b3480156100d357600080fd5b506100dc6102f6565b6040516100e99190610bcf565b60405180910390f35b3480156100fe57600080fd5b50610107610300565b6040516101149190610c61565b60405180910390f35b34801561012957600080fd5b50610144600480360381019061013f9190610e15565b610317565b005b61014e6103d7565b005b34801561015c57600080fd5b5061017760048036038101906101729190610ecc565b610528565b005b34801561018557600080fd5b5061018e610728565b60405161019b9190610f5a565b60405180910390f35b3480156101b057600080fd5b506101b9610752565b6040516101c69190610bcf565b60405180910390f35b3480156101db57600080fd5b506101e4610761565b6040516101f19190610bcf565b60405180910390f35b34801561020657600080fd5b50610221600480360381019061021c919061102a565b61076e565b60405161022f929190611116565b60405180910390f35b34801561024457600080fd5b5061024d610856565b60405161025a9190610bcf565b60405180910390f35b34801561026f57600080fd5b5061027861087e565b6040516102859190610bcf565b60405180910390f35b34801561029a57600080fd5b506102b560048036038101906102b09190611146565b610887565b6040516102c29190610f5a565b60405180910390f35b3480156102d757600080fd5b506102e06108cf565b6040516102ed9190610bcf565b60405180910390f35b6000600254905090565b6000600460009054906101000a900460ff16905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103c957337f00000000000000000000000000000000000000000000000000000000000000006040517f1cf993f40000000000000000000000000000000000000000000000000000000081526004016103c0929190611173565b60405180910390fd5b6103d382826108dc565b5050565b600254341015610413576040517f3038c00a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600181111561042757610426610bea565b5b600460009054906101000a900460ff16600181111561044957610448610bea565b5b14610480576040517fd24a271400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6003339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff167f0805e1d667bddb8a95f0f09880cf94f403fb596ce79928d9f29b74203ba284d460405160405180910390a2565b60006105426040518060200160405280600081525061076e565b509050806105b15747600380549050600460009054906101000a900460ff16600181111561057357610572610bea565b5b6040517f584327aa0000000000000000000000000000000000000000000000000000000081526004016105a89392919061119c565b60405180910390fd5b6001600460006101000a81548160ff021916908360018111156105d7576105d6610bea565b5b021790555060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635d3b1d307f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000060037f000000000000000000000000000000000000000000000000000000000000000060016040518663ffffffff1660e01b81526004016106a195949392919061124b565b602060405180830381600087803b1580156106bb57600080fd5b505af11580156106cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f391906112b3565b9050807fcd6e45c8998311cab7e9d4385596cac867e20a0587194b954fa3a731c93ce78b60405160405180910390a250505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600163ffffffff16905090565b6000600361ffff16905090565b600060606000600460009054906101000a900460ff16600181111561079657610795610bea565b5b600060018111156107aa576107a9610bea565b5b14905060007f0000000000000000000000000000000000000000000000000000000000000000600054426107de919061130f565b119050600080600380549050119050600080471190508280156107fe5750835b80156108075750805b80156108105750815b9550856040518060400160405280600381526020017f30783000000000000000000000000000000000000000000000000000000000008152509550955050505050915091565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b60008054905090565b60006003828154811061089d5761089c611343565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600380549050905090565b6000600380549050826000815181106108f8576108f7611343565b5b602002602001015161090a91906113a1565b905060006003828154811061092257610921611343565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600067ffffffffffffffff8111156109ab576109aa610cd2565b5b6040519080825280602002602001820160405280156109d95781602001602082028036833780820191505090505b50600390805190602001906109ef929190610b0f565b506000600460006101000a81548160ff02191690836001811115610a1657610a15610bea565b5b02179055504260008190555060008173ffffffffffffffffffffffffffffffffffffffff1647604051610a4890611403565b60006040518083038185875af1925050503d8060008114610a85576040519150601f19603f3d011682016040523d82523d6000602084013e610a8a565b606091505b5050905080610ac5576040517fa1d04b3900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff167f5b690ec4a06fe979403046eaeea5b3ce38524683c3001f662c8b5a829632f7df60405160405180910390a25050505050565b828054828255906000526020600020908101928215610b88579160200282015b82811115610b875782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610b2f565b5b509050610b959190610b99565b5090565b5b80821115610bb2576000816000905550600101610b9a565b5090565b6000819050919050565b610bc981610bb6565b82525050565b6000602082019050610be46000830184610bc0565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60028110610c2a57610c29610bea565b5b50565b6000819050610c3b82610c19565b919050565b6000610c4b82610c2d565b9050919050565b610c5b81610c40565b82525050565b6000602082019050610c766000830184610c52565b92915050565b6000604051905090565b600080fd5b600080fd5b610c9981610bb6565b8114610ca457600080fd5b50565b600081359050610cb681610c90565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610d0a82610cc1565b810181811067ffffffffffffffff82111715610d2957610d28610cd2565b5b80604052505050565b6000610d3c610c7c565b9050610d488282610d01565b919050565b600067ffffffffffffffff821115610d6857610d67610cd2565b5b602082029050602081019050919050565b600080fd5b6000610d91610d8c84610d4d565b610d32565b90508083825260208201905060208402830185811115610db457610db3610d79565b5b835b81811015610ddd5780610dc98882610ca7565b845260208401935050602081019050610db6565b5050509392505050565b600082601f830112610dfc57610dfb610cbc565b5b8135610e0c848260208601610d7e565b91505092915050565b60008060408385031215610e2c57610e2b610c86565b5b6000610e3a85828601610ca7565b925050602083013567ffffffffffffffff811115610e5b57610e5a610c8b565b5b610e6785828601610de7565b9150509250929050565b600080fd5b60008083601f840112610e8c57610e8b610cbc565b5b8235905067ffffffffffffffff811115610ea957610ea8610e71565b5b602083019150836001820283011115610ec557610ec4610d79565b5b9250929050565b60008060208385031215610ee357610ee2610c86565b5b600083013567ffffffffffffffff811115610f0157610f00610c8b565b5b610f0d85828601610e76565b92509250509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f4482610f19565b9050919050565b610f5481610f39565b82525050565b6000602082019050610f6f6000830184610f4b565b92915050565b600080fd5b600067ffffffffffffffff821115610f9557610f94610cd2565b5b610f9e82610cc1565b9050602081019050919050565b82818337600083830152505050565b6000610fcd610fc884610f7a565b610d32565b905082815260208101848484011115610fe957610fe8610f75565b5b610ff4848285610fab565b509392505050565b600082601f83011261101157611010610cbc565b5b8135611021848260208601610fba565b91505092915050565b6000602082840312156110405761103f610c86565b5b600082013567ffffffffffffffff81111561105e5761105d610c8b565b5b61106a84828501610ffc565b91505092915050565b60008115159050919050565b61108881611073565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156110c85780820151818401526020810190506110ad565b838111156110d7576000848401525b50505050565b60006110e88261108e565b6110f28185611099565b93506111028185602086016110aa565b61110b81610cc1565b840191505092915050565b600060408201905061112b600083018561107f565b818103602083015261113d81846110dd565b90509392505050565b60006020828403121561115c5761115b610c86565b5b600061116a84828501610ca7565b91505092915050565b60006040820190506111886000830185610f4b565b6111956020830184610f4b565b9392505050565b60006060820190506111b16000830186610bc0565b6111be6020830185610bc0565b6111cb6040830184610bc0565b949350505050565b6000819050919050565b6111e6816111d3565b82525050565b600067ffffffffffffffff82169050919050565b611209816111ec565b82525050565b600061ffff82169050919050565b6112268161120f565b82525050565b600063ffffffff82169050919050565b6112458161122c565b82525050565b600060a08201905061126060008301886111dd565b61126d6020830187611200565b61127a604083018661121d565b611287606083018561123c565b611294608083018461123c565b9695505050505050565b6000815190506112ad81610c90565b92915050565b6000602082840312156112c9576112c8610c86565b5b60006112d78482850161129e565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061131a82610bb6565b915061132583610bb6565b925082821015611338576113376112e0565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006113ac82610bb6565b91506113b783610bb6565b9250826113c7576113c6611372565b5b828206905092915050565b600081905092915050565b50565b60006113ed6000836113d2565b91506113f8826113dd565b600082019050919050565b600061140e826113e0565b915081905091905056fea2646970667358221220944c541f25d64feabacc853f523064872399883d5b4a76925db1eafb22544e1264736f6c63430008080033";

type RaffleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RaffleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Raffle__factory extends ContractFactory {
  constructor(...args: RaffleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    vrfCoordinatorV2: string,
    subscriptionId: BigNumberish,
    gasLane: BytesLike,
    interval: BigNumberish,
    entranceFee: BigNumberish,
    callbackGasLimit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Raffle> {
    return super.deploy(
      vrfCoordinatorV2,
      subscriptionId,
      gasLane,
      interval,
      entranceFee,
      callbackGasLimit,
      overrides || {}
    ) as Promise<Raffle>;
  }
  override getDeployTransaction(
    vrfCoordinatorV2: string,
    subscriptionId: BigNumberish,
    gasLane: BytesLike,
    interval: BigNumberish,
    entranceFee: BigNumberish,
    callbackGasLimit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      vrfCoordinatorV2,
      subscriptionId,
      gasLane,
      interval,
      entranceFee,
      callbackGasLimit,
      overrides || {}
    );
  }
  override attach(address: string): Raffle {
    return super.attach(address) as Raffle;
  }
  override connect(signer: Signer): Raffle__factory {
    return super.connect(signer) as Raffle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RaffleInterface {
    return new utils.Interface(_abi) as RaffleInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Raffle {
    return new Contract(address, _abi, signerOrProvider) as Raffle;
  }
}

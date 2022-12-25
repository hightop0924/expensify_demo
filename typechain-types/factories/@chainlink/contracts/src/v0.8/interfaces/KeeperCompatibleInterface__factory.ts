/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  KeeperCompatibleInterface,
  KeeperCompatibleInterfaceInterface,
} from "../../../../../../@chainlink/contracts/src/v0.8/interfaces/KeeperCompatibleInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "checkData",
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
        name: "performData",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "performData",
        type: "bytes",
      },
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class KeeperCompatibleInterface__factory {
  static readonly abi = _abi;
  static createInterface(): KeeperCompatibleInterfaceInterface {
    return new utils.Interface(_abi) as KeeperCompatibleInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KeeperCompatibleInterface {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as KeeperCompatibleInterface;
  }
}

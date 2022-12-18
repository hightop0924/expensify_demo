/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../../common";

export interface VRFCoordinatorV2MockInterface extends utils.Interface {
  functions: {
    "BASE_FEE()": FunctionFragment;
    "GAS_PRICE_LINK()": FunctionFragment;
    "acceptSubscriptionOwnerTransfer(uint64)": FunctionFragment;
    "addConsumer(uint64,address)": FunctionFragment;
    "cancelSubscription(uint64,address)": FunctionFragment;
    "createSubscription()": FunctionFragment;
    "fulfillRandomWords(uint256,address)": FunctionFragment;
    "fundSubscription(uint64,uint96)": FunctionFragment;
    "getRequestConfig()": FunctionFragment;
    "getSubscription(uint64)": FunctionFragment;
    "removeConsumer(uint64,address)": FunctionFragment;
    "requestRandomWords(bytes32,uint64,uint16,uint32,uint32)": FunctionFragment;
    "requestSubscriptionOwnerTransfer(uint64,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BASE_FEE"
      | "GAS_PRICE_LINK"
      | "acceptSubscriptionOwnerTransfer"
      | "addConsumer"
      | "cancelSubscription"
      | "createSubscription"
      | "fulfillRandomWords"
      | "fundSubscription"
      | "getRequestConfig"
      | "getSubscription"
      | "removeConsumer"
      | "requestRandomWords"
      | "requestSubscriptionOwnerTransfer"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "BASE_FEE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "GAS_PRICE_LINK",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptSubscriptionOwnerTransfer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addConsumer",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelSubscription",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createSubscription",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fulfillRandomWords",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "fundSubscription",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestConfig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSubscription",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeConsumer",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "requestRandomWords",
    values: [BytesLike, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requestSubscriptionOwnerTransfer",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(functionFragment: "BASE_FEE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "GAS_PRICE_LINK",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptSubscriptionOwnerTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addConsumer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelSubscription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createSubscription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fulfillRandomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundSubscription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSubscription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeConsumer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestRandomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestSubscriptionOwnerTransfer",
    data: BytesLike
  ): Result;

  events: {
    "RandomWordsFulfilled(uint256,uint256,uint96,bool)": EventFragment;
    "RandomWordsRequested(bytes32,uint256,uint256,uint64,uint16,uint32,uint32,address)": EventFragment;
    "SubscriptionCanceled(uint64,address,uint256)": EventFragment;
    "SubscriptionCreated(uint64,address)": EventFragment;
    "SubscriptionFunded(uint64,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RandomWordsFulfilled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RandomWordsRequested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SubscriptionCanceled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SubscriptionCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SubscriptionFunded"): EventFragment;
}

export interface RandomWordsFulfilledEventObject {
  requestId: BigNumber;
  outputSeed: BigNumber;
  payment: BigNumber;
  success: boolean;
}
export type RandomWordsFulfilledEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, boolean],
  RandomWordsFulfilledEventObject
>;

export type RandomWordsFulfilledEventFilter =
  TypedEventFilter<RandomWordsFulfilledEvent>;

export interface RandomWordsRequestedEventObject {
  keyHash: string;
  requestId: BigNumber;
  preSeed: BigNumber;
  subId: BigNumber;
  minimumRequestConfirmations: number;
  callbackGasLimit: number;
  numWords: number;
  sender: string;
}
export type RandomWordsRequestedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, number, number, number, string],
  RandomWordsRequestedEventObject
>;

export type RandomWordsRequestedEventFilter =
  TypedEventFilter<RandomWordsRequestedEvent>;

export interface SubscriptionCanceledEventObject {
  subId: BigNumber;
  to: string;
  amount: BigNumber;
}
export type SubscriptionCanceledEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  SubscriptionCanceledEventObject
>;

export type SubscriptionCanceledEventFilter =
  TypedEventFilter<SubscriptionCanceledEvent>;

export interface SubscriptionCreatedEventObject {
  subId: BigNumber;
  owner: string;
}
export type SubscriptionCreatedEvent = TypedEvent<
  [BigNumber, string],
  SubscriptionCreatedEventObject
>;

export type SubscriptionCreatedEventFilter =
  TypedEventFilter<SubscriptionCreatedEvent>;

export interface SubscriptionFundedEventObject {
  subId: BigNumber;
  oldBalance: BigNumber;
  newBalance: BigNumber;
}
export type SubscriptionFundedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  SubscriptionFundedEventObject
>;

export type SubscriptionFundedEventFilter =
  TypedEventFilter<SubscriptionFundedEvent>;

export interface VRFCoordinatorV2Mock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VRFCoordinatorV2MockInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BASE_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;

    GAS_PRICE_LINK(overrides?: CallOverrides): Promise<[BigNumber]>;

    acceptSubscriptionOwnerTransfer(
      _subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    addConsumer(
      _subId: BigNumberish,
      _consumer: string,
      overrides?: CallOverrides
    ): Promise<[void]>;

    cancelSubscription(
      _subId: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createSubscription(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fulfillRandomWords(
      _requestId: BigNumberish,
      _consumer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fundSubscription(
      _subId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRequestConfig(
      overrides?: CallOverrides
    ): Promise<[number, number, string[]]>;

    getSubscription(
      _subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, string[]] & {
        balance: BigNumber;
        reqCount: BigNumber;
        owner: string;
        consumers: string[];
      }
    >;

    removeConsumer(
      _subId: BigNumberish,
      _consumer: string,
      overrides?: CallOverrides
    ): Promise<[void]>;

    requestRandomWords(
      _keyHash: BytesLike,
      _subId: BigNumberish,
      _minimumRequestConfirmations: BigNumberish,
      _callbackGasLimit: BigNumberish,
      _numWords: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestSubscriptionOwnerTransfer(
      _subId: BigNumberish,
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  BASE_FEE(overrides?: CallOverrides): Promise<BigNumber>;

  GAS_PRICE_LINK(overrides?: CallOverrides): Promise<BigNumber>;

  acceptSubscriptionOwnerTransfer(
    _subId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  addConsumer(
    _subId: BigNumberish,
    _consumer: string,
    overrides?: CallOverrides
  ): Promise<void>;

  cancelSubscription(
    _subId: BigNumberish,
    _to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createSubscription(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fulfillRandomWords(
    _requestId: BigNumberish,
    _consumer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fundSubscription(
    _subId: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRequestConfig(
    overrides?: CallOverrides
  ): Promise<[number, number, string[]]>;

  getSubscription(
    _subId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string, string[]] & {
      balance: BigNumber;
      reqCount: BigNumber;
      owner: string;
      consumers: string[];
    }
  >;

  removeConsumer(
    _subId: BigNumberish,
    _consumer: string,
    overrides?: CallOverrides
  ): Promise<void>;

  requestRandomWords(
    _keyHash: BytesLike,
    _subId: BigNumberish,
    _minimumRequestConfirmations: BigNumberish,
    _callbackGasLimit: BigNumberish,
    _numWords: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestSubscriptionOwnerTransfer(
    _subId: BigNumberish,
    _newOwner: string,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    BASE_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    GAS_PRICE_LINK(overrides?: CallOverrides): Promise<BigNumber>;

    acceptSubscriptionOwnerTransfer(
      _subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    addConsumer(
      _subId: BigNumberish,
      _consumer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelSubscription(
      _subId: BigNumberish,
      _to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    createSubscription(overrides?: CallOverrides): Promise<BigNumber>;

    fulfillRandomWords(
      _requestId: BigNumberish,
      _consumer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    fundSubscription(
      _subId: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getRequestConfig(
      overrides?: CallOverrides
    ): Promise<[number, number, string[]]>;

    getSubscription(
      _subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, string[]] & {
        balance: BigNumber;
        reqCount: BigNumber;
        owner: string;
        consumers: string[];
      }
    >;

    removeConsumer(
      _subId: BigNumberish,
      _consumer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    requestRandomWords(
      _keyHash: BytesLike,
      _subId: BigNumberish,
      _minimumRequestConfirmations: BigNumberish,
      _callbackGasLimit: BigNumberish,
      _numWords: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    requestSubscriptionOwnerTransfer(
      _subId: BigNumberish,
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "RandomWordsFulfilled(uint256,uint256,uint96,bool)"(
      requestId?: BigNumberish | null,
      outputSeed?: null,
      payment?: null,
      success?: null
    ): RandomWordsFulfilledEventFilter;
    RandomWordsFulfilled(
      requestId?: BigNumberish | null,
      outputSeed?: null,
      payment?: null,
      success?: null
    ): RandomWordsFulfilledEventFilter;

    "RandomWordsRequested(bytes32,uint256,uint256,uint64,uint16,uint32,uint32,address)"(
      keyHash?: BytesLike | null,
      requestId?: null,
      preSeed?: null,
      subId?: BigNumberish | null,
      minimumRequestConfirmations?: null,
      callbackGasLimit?: null,
      numWords?: null,
      sender?: string | null
    ): RandomWordsRequestedEventFilter;
    RandomWordsRequested(
      keyHash?: BytesLike | null,
      requestId?: null,
      preSeed?: null,
      subId?: BigNumberish | null,
      minimumRequestConfirmations?: null,
      callbackGasLimit?: null,
      numWords?: null,
      sender?: string | null
    ): RandomWordsRequestedEventFilter;

    "SubscriptionCanceled(uint64,address,uint256)"(
      subId?: BigNumberish | null,
      to?: null,
      amount?: null
    ): SubscriptionCanceledEventFilter;
    SubscriptionCanceled(
      subId?: BigNumberish | null,
      to?: null,
      amount?: null
    ): SubscriptionCanceledEventFilter;

    "SubscriptionCreated(uint64,address)"(
      subId?: BigNumberish | null,
      owner?: null
    ): SubscriptionCreatedEventFilter;
    SubscriptionCreated(
      subId?: BigNumberish | null,
      owner?: null
    ): SubscriptionCreatedEventFilter;

    "SubscriptionFunded(uint64,uint256,uint256)"(
      subId?: BigNumberish | null,
      oldBalance?: null,
      newBalance?: null
    ): SubscriptionFundedEventFilter;
    SubscriptionFunded(
      subId?: BigNumberish | null,
      oldBalance?: null,
      newBalance?: null
    ): SubscriptionFundedEventFilter;
  };

  estimateGas: {
    BASE_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    GAS_PRICE_LINK(overrides?: CallOverrides): Promise<BigNumber>;

    acceptSubscriptionOwnerTransfer(
      _subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addConsumer(
      _subId: BigNumberish,
      _consumer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cancelSubscription(
      _subId: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createSubscription(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fulfillRandomWords(
      _requestId: BigNumberish,
      _consumer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fundSubscription(
      _subId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRequestConfig(overrides?: CallOverrides): Promise<BigNumber>;

    getSubscription(
      _subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeConsumer(
      _subId: BigNumberish,
      _consumer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    requestRandomWords(
      _keyHash: BytesLike,
      _subId: BigNumberish,
      _minimumRequestConfirmations: BigNumberish,
      _callbackGasLimit: BigNumberish,
      _numWords: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestSubscriptionOwnerTransfer(
      _subId: BigNumberish,
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BASE_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    GAS_PRICE_LINK(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptSubscriptionOwnerTransfer(
      _subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addConsumer(
      _subId: BigNumberish,
      _consumer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cancelSubscription(
      _subId: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createSubscription(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fulfillRandomWords(
      _requestId: BigNumberish,
      _consumer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fundSubscription(
      _subId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRequestConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSubscription(
      _subId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeConsumer(
      _subId: BigNumberish,
      _consumer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    requestRandomWords(
      _keyHash: BytesLike,
      _subId: BigNumberish,
      _minimumRequestConfirmations: BigNumberish,
      _callbackGasLimit: BigNumberish,
      _numWords: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestSubscriptionOwnerTransfer(
      _subId: BigNumberish,
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

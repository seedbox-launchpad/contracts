/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface RedKiteWhitelistInterface extends ethers.utils.Interface {
  functions: {
    "getClaimMessageHash(address,uint256)": FunctionFragment;
    "getEthSignedMessageHash(bytes32)": FunctionFragment;
    "getMessageHash(address,uint256,uint256)": FunctionFragment;
    "getSignerAddress(bytes32,bytes)": FunctionFragment;
    "splitSignature(bytes)": FunctionFragment;
    "verify(address,address,uint256,uint256,bytes)": FunctionFragment;
    "verifyClaimToken(address,address,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getClaimMessageHash",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getEthSignedMessageHash",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getMessageHash",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSignerAddress",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "splitSignature",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyClaimToken",
    values: [string, string, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getClaimMessageHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEthSignedMessageHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMessageHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSignerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "splitSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "verifyClaimToken",
    data: BytesLike
  ): Result;

  events: {};
}

export class RedKiteWhitelist extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: RedKiteWhitelistInterface;

  functions: {
    getClaimMessageHash(
      _candidate: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getEthSignedMessageHash(
      _messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getMessageHash(
      _candidate: string,
      _maxAmount: BigNumberish,
      _minAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getSignerAddress(
      _messageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { signer: string }>;

    splitSignature(
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string, number] & { r: string; s: string; v: number }>;

    verify(
      _signer: string,
      _candidate: string,
      _maxAmount: BigNumberish,
      _minAmount: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    verifyClaimToken(
      _signer: string,
      _candidate: string,
      _amount: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  getClaimMessageHash(
    _candidate: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getEthSignedMessageHash(
    _messageHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getMessageHash(
    _candidate: string,
    _maxAmount: BigNumberish,
    _minAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getSignerAddress(
    _messageHash: BytesLike,
    _signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  splitSignature(
    _signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, string, number] & { r: string; s: string; v: number }>;

  verify(
    _signer: string,
    _candidate: string,
    _maxAmount: BigNumberish,
    _minAmount: BigNumberish,
    signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  verifyClaimToken(
    _signer: string,
    _candidate: string,
    _amount: BigNumberish,
    signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    getClaimMessageHash(
      _candidate: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getEthSignedMessageHash(
      _messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getMessageHash(
      _candidate: string,
      _maxAmount: BigNumberish,
      _minAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getSignerAddress(
      _messageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    splitSignature(
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string, number] & { r: string; s: string; v: number }>;

    verify(
      _signer: string,
      _candidate: string,
      _maxAmount: BigNumberish,
      _minAmount: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifyClaimToken(
      _signer: string,
      _candidate: string,
      _amount: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    getClaimMessageHash(
      _candidate: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEthSignedMessageHash(
      _messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMessageHash(
      _candidate: string,
      _maxAmount: BigNumberish,
      _minAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSignerAddress(
      _messageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    splitSignature(
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verify(
      _signer: string,
      _candidate: string,
      _maxAmount: BigNumberish,
      _minAmount: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyClaimToken(
      _signer: string,
      _candidate: string,
      _amount: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getClaimMessageHash(
      _candidate: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEthSignedMessageHash(
      _messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMessageHash(
      _candidate: string,
      _maxAmount: BigNumberish,
      _minAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSignerAddress(
      _messageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    splitSignature(
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verify(
      _signer: string,
      _candidate: string,
      _maxAmount: BigNumberish,
      _minAmount: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyClaimToken(
      _signer: string,
      _candidate: string,
      _amount: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

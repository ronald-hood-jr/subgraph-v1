// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pid(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get to(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class EmergencyWithdraw extends ethereum.Event {
  get params(): EmergencyWithdraw__Params {
    return new EmergencyWithdraw__Params(this);
  }
}

export class EmergencyWithdraw__Params {
  _event: EmergencyWithdraw;

  constructor(event: EmergencyWithdraw) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pid(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get to(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class Harvest extends ethereum.Event {
  get params(): Harvest__Params {
    return new Harvest__Params(this);
  }
}

export class Harvest__Params {
  _event: Harvest;

  constructor(event: Harvest) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pid(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class LogPoolAddition extends ethereum.Event {
  get params(): LogPoolAddition__Params {
    return new LogPoolAddition__Params(this);
  }
}

export class LogPoolAddition__Params {
  _event: LogPoolAddition;

  constructor(event: LogPoolAddition) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get allocPoint(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get lpToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class LogSetPool extends ethereum.Event {
  get params(): LogSetPool__Params {
    return new LogSetPool__Params(this);
  }
}

export class LogSetPool__Params {
  _event: LogSetPool;

  constructor(event: LogSetPool) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get allocPoint(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class LogUpdatePool extends ethereum.Event {
  get params(): LogUpdatePool__Params {
    return new LogUpdatePool__Params(this);
  }
}

export class LogUpdatePool__Params {
  _event: LogUpdatePool;

  constructor(event: LogUpdatePool) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get lastRewardBlock(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get lpSupply(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get accIchiPerShare(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SetIchiPerBlock extends ethereum.Event {
  get params(): SetIchiPerBlock__Params {
    return new SetIchiPerBlock__Params(this);
  }
}

export class SetIchiPerBlock__Params {
  _event: SetIchiPerBlock;

  constructor(event: SetIchiPerBlock) {
    this._event = event;
  }

  get ichiPerBlock(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get withUpdate(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pid(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get to(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class ichiFarmV2__poolInfoResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class ichiFarmV2__updatePoolResultPoolStruct extends ethereum.Tuple {
  get accIchiPerShare(): BigInt {
    return this[0].toBigInt();
  }

  get lastRewardBlock(): BigInt {
    return this[1].toBigInt();
  }

  get allocPoint(): BigInt {
    return this[2].toBigInt();
  }
}

export class ichiFarmV2__userInfoResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromSignedBigInt(this.value1));
    return map;
  }
}

export class ichiFarmV2 extends ethereum.SmartContract {
  static bind(address: Address): ichiFarmV2 {
    return new ichiFarmV2("ichiFarmV2", address);
  }

  getLPSupply(_pid: BigInt): BigInt {
    let result = super.call("getLPSupply", "getLPSupply(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_pid)
    ]);

    return result[0].toBigInt();
  }

  try_getLPSupply(_pid: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getLPSupply",
      "getLPSupply(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_pid)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ichiPerBlock(): BigInt {
    let result = super.call("ichiPerBlock", "ichiPerBlock():(uint256)", []);

    return result[0].toBigInt();
  }

  try_ichiPerBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("ichiPerBlock", "ichiPerBlock():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lpToken(param0: BigInt): Address {
    let result = super.call("lpToken", "lpToken(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_lpToken(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("lpToken", "lpToken(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pendingIchi(_pid: BigInt, _user: Address): BigInt {
    let result = super.call(
      "pendingIchi",
      "pendingIchi(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_pid),
        ethereum.Value.fromAddress(_user)
      ]
    );

    return result[0].toBigInt();
  }

  try_pendingIchi(_pid: BigInt, _user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "pendingIchi",
      "pendingIchi(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_pid),
        ethereum.Value.fromAddress(_user)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  pendingOwner(): Address {
    let result = super.call("pendingOwner", "pendingOwner():(address)", []);

    return result[0].toAddress();
  }

  try_pendingOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall("pendingOwner", "pendingOwner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  poolIchiReward(_pid: BigInt): BigInt {
    let result = super.call(
      "poolIchiReward",
      "poolIchiReward(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_pid)]
    );

    return result[0].toBigInt();
  }

  try_poolIchiReward(_pid: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "poolIchiReward",
      "poolIchiReward(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_pid)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  poolInfo(param0: BigInt): ichiFarmV2__poolInfoResult {
    let result = super.call(
      "poolInfo",
      "poolInfo(uint256):(uint128,uint64,uint64)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new ichiFarmV2__poolInfoResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_poolInfo(
    param0: BigInt
  ): ethereum.CallResult<ichiFarmV2__poolInfoResult> {
    let result = super.tryCall(
      "poolInfo",
      "poolInfo(uint256):(uint128,uint64,uint64)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ichiFarmV2__poolInfoResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  poolLength(): BigInt {
    let result = super.call("poolLength", "poolLength():(uint256)", []);

    return result[0].toBigInt();
  }

  try_poolLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("poolLength", "poolLength():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  setNonReentrant(_val: boolean): boolean {
    let result = super.call("setNonReentrant", "setNonReentrant(bool):(bool)", [
      ethereum.Value.fromBoolean(_val)
    ]);

    return result[0].toBoolean();
  }

  try_setNonReentrant(_val: boolean): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "setNonReentrant",
      "setNonReentrant(bool):(bool)",
      [ethereum.Value.fromBoolean(_val)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  totalAllocPoint(): BigInt {
    let result = super.call(
      "totalAllocPoint",
      "totalAllocPoint():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalAllocPoint(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalAllocPoint",
      "totalAllocPoint():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  updatePool(pid: BigInt): ichiFarmV2__updatePoolResultPoolStruct {
    let result = super.call(
      "updatePool",
      "updatePool(uint256):((uint128,uint64,uint64))",
      [ethereum.Value.fromUnsignedBigInt(pid)]
    );

    return changetype<ichiFarmV2__updatePoolResultPoolStruct>(
      result[0].toTuple()
    );
  }

  try_updatePool(
    pid: BigInt
  ): ethereum.CallResult<ichiFarmV2__updatePoolResultPoolStruct> {
    let result = super.tryCall(
      "updatePool",
      "updatePool(uint256):((uint128,uint64,uint64))",
      [ethereum.Value.fromUnsignedBigInt(pid)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<ichiFarmV2__updatePoolResultPoolStruct>(value[0].toTuple())
    );
  }

  userInfo(param0: BigInt, param1: Address): ichiFarmV2__userInfoResult {
    let result = super.call(
      "userInfo",
      "userInfo(uint256,address):(uint256,int256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );

    return new ichiFarmV2__userInfoResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_userInfo(
    param0: BigInt,
    param1: Address
  ): ethereum.CallResult<ichiFarmV2__userInfoResult> {
    let result = super.tryCall(
      "userInfo",
      "userInfo(uint256,address):(uint256,int256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ichiFarmV2__userInfoResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _ichi(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _ichiPerBlock(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddCall extends ethereum.Call {
  get inputs(): AddCall__Inputs {
    return new AddCall__Inputs(this);
  }

  get outputs(): AddCall__Outputs {
    return new AddCall__Outputs(this);
  }
}

export class AddCall__Inputs {
  _call: AddCall;

  constructor(call: AddCall) {
    this._call = call;
  }

  get allocPoint(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _lpToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AddCall__Outputs {
  _call: AddCall;

  constructor(call: AddCall) {
    this._call = call;
  }
}

export class BatchCall extends ethereum.Call {
  get inputs(): BatchCall__Inputs {
    return new BatchCall__Inputs(this);
  }

  get outputs(): BatchCall__Outputs {
    return new BatchCall__Outputs(this);
  }
}

export class BatchCall__Inputs {
  _call: BatchCall;

  constructor(call: BatchCall) {
    this._call = call;
  }

  get calls(): Array<Bytes> {
    return this._call.inputValues[0].value.toBytesArray();
  }

  get revertOnFail(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class BatchCall__Outputs {
  _call: BatchCall;

  constructor(call: BatchCall) {
    this._call = call;
  }

  get successes(): Array<boolean> {
    return this._call.outputValues[0].value.toBooleanArray();
  }

  get results(): Array<Bytes> {
    return this._call.outputValues[1].value.toBytesArray();
  }
}

export class ClaimOwnershipCall extends ethereum.Call {
  get inputs(): ClaimOwnershipCall__Inputs {
    return new ClaimOwnershipCall__Inputs(this);
  }

  get outputs(): ClaimOwnershipCall__Outputs {
    return new ClaimOwnershipCall__Outputs(this);
  }
}

export class ClaimOwnershipCall__Inputs {
  _call: ClaimOwnershipCall;

  constructor(call: ClaimOwnershipCall) {
    this._call = call;
  }
}

export class ClaimOwnershipCall__Outputs {
  _call: ClaimOwnershipCall;

  constructor(call: ClaimOwnershipCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class EmergencyWithdrawCall extends ethereum.Call {
  get inputs(): EmergencyWithdrawCall__Inputs {
    return new EmergencyWithdrawCall__Inputs(this);
  }

  get outputs(): EmergencyWithdrawCall__Outputs {
    return new EmergencyWithdrawCall__Outputs(this);
  }
}

export class EmergencyWithdrawCall__Inputs {
  _call: EmergencyWithdrawCall;

  constructor(call: EmergencyWithdrawCall) {
    this._call = call;
  }

  get pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class EmergencyWithdrawCall__Outputs {
  _call: EmergencyWithdrawCall;

  constructor(call: EmergencyWithdrawCall) {
    this._call = call;
  }
}

export class HarvestCall extends ethereum.Call {
  get inputs(): HarvestCall__Inputs {
    return new HarvestCall__Inputs(this);
  }

  get outputs(): HarvestCall__Outputs {
    return new HarvestCall__Outputs(this);
  }
}

export class HarvestCall__Inputs {
  _call: HarvestCall;

  constructor(call: HarvestCall) {
    this._call = call;
  }

  get pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class HarvestCall__Outputs {
  _call: HarvestCall;

  constructor(call: HarvestCall) {
    this._call = call;
  }
}

export class MassUpdateAllPoolsCall extends ethereum.Call {
  get inputs(): MassUpdateAllPoolsCall__Inputs {
    return new MassUpdateAllPoolsCall__Inputs(this);
  }

  get outputs(): MassUpdateAllPoolsCall__Outputs {
    return new MassUpdateAllPoolsCall__Outputs(this);
  }
}

export class MassUpdateAllPoolsCall__Inputs {
  _call: MassUpdateAllPoolsCall;

  constructor(call: MassUpdateAllPoolsCall) {
    this._call = call;
  }
}

export class MassUpdateAllPoolsCall__Outputs {
  _call: MassUpdateAllPoolsCall;

  constructor(call: MassUpdateAllPoolsCall) {
    this._call = call;
  }
}

export class MassUpdatePoolsCall extends ethereum.Call {
  get inputs(): MassUpdatePoolsCall__Inputs {
    return new MassUpdatePoolsCall__Inputs(this);
  }

  get outputs(): MassUpdatePoolsCall__Outputs {
    return new MassUpdatePoolsCall__Outputs(this);
  }
}

export class MassUpdatePoolsCall__Inputs {
  _call: MassUpdatePoolsCall;

  constructor(call: MassUpdatePoolsCall) {
    this._call = call;
  }

  get pids(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }
}

export class MassUpdatePoolsCall__Outputs {
  _call: MassUpdatePoolsCall;

  constructor(call: MassUpdatePoolsCall) {
    this._call = call;
  }
}

export class PermitTokenCall extends ethereum.Call {
  get inputs(): PermitTokenCall__Inputs {
    return new PermitTokenCall__Inputs(this);
  }

  get outputs(): PermitTokenCall__Outputs {
    return new PermitTokenCall__Outputs(this);
  }
}

export class PermitTokenCall__Inputs {
  _call: PermitTokenCall;

  constructor(call: PermitTokenCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get from(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get deadline(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get v(): i32 {
    return this._call.inputValues[5].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[7].value.toBytes();
  }
}

export class PermitTokenCall__Outputs {
  _call: PermitTokenCall;

  constructor(call: PermitTokenCall) {
    this._call = call;
  }
}

export class SetCall extends ethereum.Call {
  get inputs(): SetCall__Inputs {
    return new SetCall__Inputs(this);
  }

  get outputs(): SetCall__Outputs {
    return new SetCall__Outputs(this);
  }
}

export class SetCall__Inputs {
  _call: SetCall;

  constructor(call: SetCall) {
    this._call = call;
  }

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _allocPoint(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetCall__Outputs {
  _call: SetCall;

  constructor(call: SetCall) {
    this._call = call;
  }
}

export class SetIchiPerBlockCall extends ethereum.Call {
  get inputs(): SetIchiPerBlockCall__Inputs {
    return new SetIchiPerBlockCall__Inputs(this);
  }

  get outputs(): SetIchiPerBlockCall__Outputs {
    return new SetIchiPerBlockCall__Outputs(this);
  }
}

export class SetIchiPerBlockCall__Inputs {
  _call: SetIchiPerBlockCall;

  constructor(call: SetIchiPerBlockCall) {
    this._call = call;
  }

  get _ichiPerBlock(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _withUpdate(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetIchiPerBlockCall__Outputs {
  _call: SetIchiPerBlockCall;

  constructor(call: SetIchiPerBlockCall) {
    this._call = call;
  }
}

export class SetNonReentrantCall extends ethereum.Call {
  get inputs(): SetNonReentrantCall__Inputs {
    return new SetNonReentrantCall__Inputs(this);
  }

  get outputs(): SetNonReentrantCall__Outputs {
    return new SetNonReentrantCall__Outputs(this);
  }
}

export class SetNonReentrantCall__Inputs {
  _call: SetNonReentrantCall;

  constructor(call: SetNonReentrantCall) {
    this._call = call;
  }

  get _val(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetNonReentrantCall__Outputs {
  _call: SetNonReentrantCall;

  constructor(call: SetNonReentrantCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get direct(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }

  get renounce(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdatePoolCall extends ethereum.Call {
  get inputs(): UpdatePoolCall__Inputs {
    return new UpdatePoolCall__Inputs(this);
  }

  get outputs(): UpdatePoolCall__Outputs {
    return new UpdatePoolCall__Outputs(this);
  }
}

export class UpdatePoolCall__Inputs {
  _call: UpdatePoolCall;

  constructor(call: UpdatePoolCall) {
    this._call = call;
  }

  get pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdatePoolCall__Outputs {
  _call: UpdatePoolCall;

  constructor(call: UpdatePoolCall) {
    this._call = call;
  }

  get pool(): UpdatePoolCallPoolStruct {
    return changetype<UpdatePoolCallPoolStruct>(
      this._call.outputValues[0].value.toTuple()
    );
  }
}

export class UpdatePoolCallPoolStruct extends ethereum.Tuple {
  get accIchiPerShare(): BigInt {
    return this[0].toBigInt();
  }

  get lastRewardBlock(): BigInt {
    return this[1].toBigInt();
  }

  get allocPoint(): BigInt {
    return this[2].toBigInt();
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

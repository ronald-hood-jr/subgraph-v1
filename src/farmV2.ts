import { BigInt } from "@graphprotocol/graph-ts";
import {
  Deposit as DepositEvent,
  EmergencyWithdraw as EmergencyWithdrawEvent,
  Harvest as HarvestEvent,
  LogPoolAddition as LogPoolAdditionEvent,
  LogSetPool as LogSetPoolEvent,
  LogUpdatePool as LogUpdatePoolEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  SetIchiPerBlock as SetIchiPerBlockEvent,
  Withdraw as WithdrawEvent,
  ichiFarmV2,
} from "../generated/IchiFarmV2/ichiFarmV2";

import {
  FarmDeposit,
  FarmEmergencyWithdraw,
  Farm,
  FarmHarvest,
  FarmLogPoolAddition,
  FarmLogSetPool,
  FarmLogUpdatePool,
  FarmOwnershipTransferred,
  FarmSetIchiPerBlock,
  FarmAccount,
  FarmWithdraw,
  FarmUser,
} from "../generated/schema";
import { erc20 } from "../generated/IchiFarmV2/erc20";

// When a deposit event occurs, farmDeposit and farmAccount entities will be made. A farmUser entity may be made if the deposit that triggered the event is the first transaction that the user has ever made. The Farm entity will be updated to reflect the changes after the event.
export function handleDeposit(event: DepositEvent): void {
  processDepositFarmDepositEntity(event);
  processDepositFarmAccountEntity(event);
  processDepositFarmUserEntity(event);
  processDepositFarmEntity(event);
}

// When an emeregency withdrawal event occurs, the farmEmergencyWithdraw and the farmAccount entities will be made. A farmUser entity may be made if the emergency withdrawal that triggered the event is the first transaction that the user has ever made. The farm entity will be updated to reflect the changes after the event.
export function handleEmergencyWithdraw(event: EmergencyWithdrawEvent): void {
  processEmergencyWithdrawFarmEmergencyWithdrawEntity(event);
  processEmergencyWithdrawFarmAccountEntity(event);
  processEmergencyWithdrawFarmUserEntity(event);
  processEmergencyWithdrawFarmEntity(event);
}

// When a harvest event occurs, the farmHarvest and the farmAccount entities will be made. A farmUser entity may be made if the harvest that triggered the event is the first transaction that the user has ever made. The farm entity will be updated to reflect the changes after the event.
export function handleHarvest(event: HarvestEvent): void {
  processHarvestFarmHarvestEntity(event);
  processHarvestFarmAccountEntity(event);
  processHarvestFarmUserEntity(event);
  processHarvestFarmEntity(event);
}

// When a LogPoolAddition event occurs, the LogPoolAddition event will be made. The farm entity will be updated to reflect the changes after the event.
export function handleLogPoolAddition(event: LogPoolAdditionEvent): void {
  processLogPoolAdditionEntity(event);
  processLogPoolAdditionFarmEntity(event);
}

// When a LogSetPoolevent occurs, the LogSetPool event will be made. The farm entity will be updated to reflect the changes after the event.
export function handleLogSetPool(event: LogSetPoolEvent): void {
  processLogSetPoolEntity(event);
  processLogSetPoolFarmEntity(event);
}

// When a LogUpdatePoolevent occurs, the LogUpdatePool event will be made. The farm entity will be updated to reflect the changes after the event.
export function handleLogUpdatePool(event: LogUpdatePoolEvent): void {
  processLogUpdatePoolEntity(event);
  processLogUpdatePoolFarmEntity(event);
}

// When a OwnershipTransferred event occurs, the OwnershipTransferred event will be made. The farm entity will be updated to reflect the changes after the event.
export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  processOwnershipTransferredEntity(event);
}

// When a SetIchiPerBlock event occurs, the OwnershipTransferred event will be made. The farm entity will be updated to reflect the changes after the event.
export function handleSetIchiPerBlock(event: SetIchiPerBlockEvent): void {
  processSetIchiPerBlockEntity(event);
}

export function handleWithdraw(event: WithdrawEvent): void {
  processWithdrawFarmWithdrawEntity(event);
  processWithdrawFarmAccountEntity(event);
  processWithdrawFarmUserEntity(event);
  processWithdrawFarmEntity(event);
}

function processDepositFarmDepositEntity(event: DepositEvent): void {
  let deposit = new FarmDeposit(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  deposit.user = event.params.user;
  deposit.pid = event.params.pid;
  deposit.amount = event.params.amount;
  deposit.to = event.params.to;
  deposit.timeStamp = event.block.timestamp;
  deposit.save();
}

function processDepositFarmAccountEntity(event: DepositEvent): void {
  let user = event.params.user;
  let pid = event.params.pid;
  let id = user.toHex() + "-" + pid.toString();
  let account = new FarmAccount(id);

  let ichiFarmV2_contract = ichiFarmV2.bind(event.address);
  let userLPBalance = ichiFarmV2_contract.userInfo(pid, user).value0;

  account.pid = pid;
  account.accountLPBalance = userLPBalance;
  account.user = event.params.user.toString();
  account.user = event.params.user.toHexString();
  account.save();
}

function processDepositFarmUserEntity(event: DepositEvent): void {
  let user = FarmUser.load(event.params.user.toHexString());
  if (!user) {
    user = new FarmUser(event.params.user.toHexString());
    user.save();
  }
}

function processDepositFarmEntity(event: DepositEvent): void {
  let id = event.params.pid.toString();
  let farm = Farm.load(id);
  if (farm == null) {
    farm = new Farm(id);
  }
  let pid = event.params.pid;
  let ichiFarmV2_contract = ichiFarmV2.bind(event.address);
  farm.lpToken = ichiFarmV2_contract.lpToken(event.params.pid);
  let lpTokenAddress = ichiFarmV2_contract.lpToken(pid);
  let erc20_contract = erc20.bind(lpTokenAddress);

  farm.lpTokenSymbol = erc20_contract.symbol();
  farm.lpTokenDecimals = BigInt.fromI32(erc20_contract.decimals());
  farm.rewardTokensPerBlock = ichiFarmV2_contract.ichiPerBlock();
  farm.totalAllocPoints = ichiFarmV2_contract.totalAllocPoint();
  farm.totalLPSupply = erc20_contract.totalSupply();
  farm.farmLPSupply = ichiFarmV2_contract.getLPSupply(event.params.pid);
  farm.accIchiPerShare = ichiFarmV2_contract.poolInfo(pid).value0;
  farm.lastRewardBlock = ichiFarmV2_contract.poolInfo(pid).value1;
  farm.allocPoint = ichiFarmV2_contract.poolInfo(pid).value2;
  farm.poolIchiReward = ichiFarmV2_contract.poolIchiReward(pid);
  farm.ichiPerBlock = ichiFarmV2_contract.ichiPerBlock();
  farm.save();
}

function processEmergencyWithdrawFarmEmergencyWithdrawEntity(
  event: EmergencyWithdrawEvent
): void {
  let withdraw = new FarmEmergencyWithdraw(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  withdraw.user = event.params.user;
  withdraw.pid = event.params.pid;
  withdraw.amount = event.params.amount;
  withdraw.to = event.params.to;
  withdraw.timeStamp = event.block.timestamp;
  withdraw.save();
}

function processEmergencyWithdrawFarmAccountEntity(
  event: EmergencyWithdrawEvent
): void {
  let user = event.params.user;
  let pid = event.params.pid;
  let id = user.toHex() + "-" + pid.toString();
  let account = new FarmAccount(id);
  let ichiFarmV2_contract = ichiFarmV2.bind(event.address);
  let userLPBalance = ichiFarmV2_contract.userInfo(pid, user).value0;

  account.pid = pid;
  account.accountLPBalance = userLPBalance;
  account.user = event.params.user.toString();
  account.user = event.params.user.toHexString();
  account.save();
}

function processEmergencyWithdrawFarmUserEntity(
  event: EmergencyWithdrawEvent
): void {
  let user = FarmUser.load(event.params.user.toHexString());
  if (!user) {
    user = new FarmUser(event.params.user.toHexString());
    user.save();
  }
}

function processEmergencyWithdrawFarmEntity(
  event: EmergencyWithdrawEvent
): void {
  let id1 = event.params.pid.toString();
  let farm = Farm.load(id1);
  if (farm == null) {
    farm = new Farm(id1);
  }
  let pid = event.params.pid;
  let ichiFarmV2_contract = ichiFarmV2.bind(event.address);
  farm.lpToken = ichiFarmV2_contract.lpToken(event.params.pid);
  let lpTokenAddress = ichiFarmV2_contract.lpToken(pid);
  let erc20_contract = erc20.bind(lpTokenAddress);

  farm.lpTokenSymbol = erc20_contract.symbol();
  farm.lpTokenDecimals = BigInt.fromI32(erc20_contract.decimals());
  farm.rewardTokensPerBlock = ichiFarmV2_contract.ichiPerBlock();
  farm.totalAllocPoints = ichiFarmV2_contract.totalAllocPoint();
  farm.totalLPSupply = erc20_contract.totalSupply();
  farm.farmLPSupply = ichiFarmV2_contract.getLPSupply(event.params.pid);
  farm.accIchiPerShare = ichiFarmV2_contract.poolInfo(pid).value0;
  farm.lastRewardBlock = ichiFarmV2_contract.poolInfo(pid).value1;
  farm.allocPoint = ichiFarmV2_contract.poolInfo(pid).value2;
  farm.poolIchiReward = ichiFarmV2_contract.poolIchiReward(pid);
  farm.ichiPerBlock = ichiFarmV2_contract.ichiPerBlock();
  farm.save();
}

function processHarvestFarmHarvestEntity(event: HarvestEvent): void {
  let harvest = new FarmHarvest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  harvest.user = event.params.user;
  harvest.pid = event.params.pid;
  harvest.amount = event.params.amount;
  harvest.timeStamp = event.block.timestamp;
  harvest.save();
}

function processHarvestFarmAccountEntity(event: HarvestEvent): void {
  let user = event.params.user;
  let pid = event.params.pid;
  let id = user.toHex() + "-" + pid.toString();
  let account = new FarmAccount(id);
  let ichiFarmV2_contract = ichiFarmV2.bind(event.address);
  let userLPBalance = ichiFarmV2_contract.userInfo(pid, user).value0;

  account.pid = pid;
  account.accountLPBalance = userLPBalance;
  account.user = event.params.user.toString();
  account.user = event.params.user.toHexString();
  account.save();
}

function processHarvestFarmUserEntity(event: HarvestEvent): void {
  let user = FarmUser.load(event.params.user.toHexString());
  if (!user) {
    user = new FarmUser(event.params.user.toHexString());
    user.save();
  }
}

function processHarvestFarmEntity(event: HarvestEvent): void {
  let id1 = event.params.pid.toString();
  let farm = Farm.load(id1);
  if (farm == null) {
    farm = new Farm(id1);
  }
  let pid = event.params.pid;
  let ichiFarmV2_contract = ichiFarmV2.bind(event.address);
  farm.lpToken = ichiFarmV2_contract.lpToken(event.params.pid);
  let lpTokenAddress = ichiFarmV2_contract.lpToken(pid);
  let erc20_contract = erc20.bind(lpTokenAddress);

  farm.lpTokenSymbol = erc20_contract.symbol();
  farm.lpTokenDecimals = BigInt.fromI32(erc20_contract.decimals());
  farm.rewardTokensPerBlock = ichiFarmV2_contract.ichiPerBlock();
  farm.totalAllocPoints = ichiFarmV2_contract.totalAllocPoint();
  farm.totalLPSupply = erc20_contract.totalSupply();
  farm.farmLPSupply = ichiFarmV2_contract.getLPSupply(event.params.pid);
  farm.accIchiPerShare = ichiFarmV2_contract.poolInfo(pid).value0;
  farm.lastRewardBlock = ichiFarmV2_contract.poolInfo(pid).value1;
  farm.allocPoint = ichiFarmV2_contract.poolInfo(pid).value2;
  farm.poolIchiReward = ichiFarmV2_contract.poolIchiReward(pid);
  farm.ichiPerBlock = ichiFarmV2_contract.ichiPerBlock();
  farm.save();
}

function processLogPoolAdditionEntity(event: LogPoolAdditionEvent): void {
  let entity = new FarmLogPoolAddition(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.pid = event.params.pid;
  entity.allocPoint = event.params.allocPoint;
  entity.lpToken = event.params.lpToken;
  entity.save();
}

function processLogPoolAdditionFarmEntity(event: LogPoolAdditionEvent): void {
  let id1 = event.params.pid.toString();
  let farm = Farm.load(id1);
  if (farm == null) {
    farm = new Farm(id1);
  }
  let pid = event.params.pid;
  let ichiFarmV2_contract = ichiFarmV2.bind(event.address);
  farm.lpToken = ichiFarmV2_contract.lpToken(event.params.pid);
  let lpTokenAddress = ichiFarmV2_contract.lpToken(pid);
  let erc20_contract = erc20.bind(lpTokenAddress);

  farm.lpTokenSymbol = erc20_contract.symbol();
  farm.lpTokenDecimals = BigInt.fromI32(erc20_contract.decimals());
  farm.rewardTokensPerBlock = ichiFarmV2_contract.ichiPerBlock();
  farm.totalAllocPoints = ichiFarmV2_contract.totalAllocPoint();
  farm.totalLPSupply = erc20_contract.totalSupply();
  farm.farmLPSupply = ichiFarmV2_contract.getLPSupply(event.params.pid);
  farm.accIchiPerShare = ichiFarmV2_contract.poolInfo(pid).value0;
  farm.lastRewardBlock = ichiFarmV2_contract.poolInfo(pid).value1;
  farm.allocPoint = ichiFarmV2_contract.poolInfo(pid).value2;
  farm.poolIchiReward = ichiFarmV2_contract.poolIchiReward(pid);
  farm.ichiPerBlock = ichiFarmV2_contract.ichiPerBlock();
  farm.save();
}

function processLogSetPoolEntity(event: LogSetPoolEvent): void {
  let entity = new FarmLogSetPool(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.pid = event.params.pid;
  entity.allocPoint = event.params.allocPoint;
  entity.save();
}

function processLogSetPoolFarmEntity(event: LogSetPoolEvent): void {
  let id1 = event.params.pid.toString();
  let farm = Farm.load(id1);
  if (farm == null) {
    farm = new Farm(id1);
  }
  let pid = event.params.pid;
  let ichiFarmV2_contract = ichiFarmV2.bind(event.address);
  farm.lpToken = ichiFarmV2_contract.lpToken(event.params.pid);
  let lpTokenAddress = ichiFarmV2_contract.lpToken(pid);
  let erc20_contract = erc20.bind(lpTokenAddress);

  farm.lpTokenSymbol = erc20_contract.symbol();
  farm.lpTokenDecimals = BigInt.fromI32(erc20_contract.decimals());
  farm.rewardTokensPerBlock = ichiFarmV2_contract.ichiPerBlock();
  farm.totalAllocPoints = ichiFarmV2_contract.totalAllocPoint();
  farm.totalLPSupply = erc20_contract.totalSupply();
  farm.farmLPSupply = ichiFarmV2_contract.getLPSupply(event.params.pid);
  farm.accIchiPerShare = ichiFarmV2_contract.poolInfo(pid).value0;
  farm.lastRewardBlock = ichiFarmV2_contract.poolInfo(pid).value1;
  farm.allocPoint = ichiFarmV2_contract.poolInfo(pid).value2;
  farm.poolIchiReward = ichiFarmV2_contract.poolIchiReward(pid);
  farm.ichiPerBlock = ichiFarmV2_contract.ichiPerBlock();
  farm.save();
}

function processLogUpdatePoolEntity(event: LogUpdatePoolEvent): void {
  let entity = new FarmLogUpdatePool(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.pid = event.params.pid;
  entity.lastRewardBlock = event.params.lastRewardBlock;
  entity.lpSupply = event.params.lpSupply;
  entity.accIchiPerShare = event.params.accIchiPerShare;
  entity.save();
}

function processLogUpdatePoolFarmEntity(event: LogUpdatePoolEvent): void {
  let id1 = event.params.pid.toString();
  let farm = Farm.load(id1);
  if (farm == null) {
    farm = new Farm(id1);
  }
  let pid = event.params.pid;
  let ichiFarmV2_contract = ichiFarmV2.bind(event.address);
  farm.lpToken = ichiFarmV2_contract.lpToken(event.params.pid);
  let lpTokenAddress = ichiFarmV2_contract.lpToken(pid);
  let erc20_contract = erc20.bind(lpTokenAddress);

  farm.lpTokenSymbol = erc20_contract.symbol();
  farm.lpTokenDecimals = BigInt.fromI32(erc20_contract.decimals());
  farm.rewardTokensPerBlock = ichiFarmV2_contract.ichiPerBlock();
  farm.totalAllocPoints = ichiFarmV2_contract.totalAllocPoint();
  farm.totalLPSupply = erc20_contract.totalSupply();
  farm.farmLPSupply = ichiFarmV2_contract.getLPSupply(event.params.pid);
  farm.accIchiPerShare = ichiFarmV2_contract.poolInfo(pid).value0;
  farm.lastRewardBlock = ichiFarmV2_contract.poolInfo(pid).value1;
  farm.allocPoint = ichiFarmV2_contract.poolInfo(pid).value2;
  farm.poolIchiReward = ichiFarmV2_contract.poolIchiReward(pid);
  farm.ichiPerBlock = ichiFarmV2_contract.ichiPerBlock();
  farm.save();
}

function processOwnershipTransferredEntity(
  event: OwnershipTransferredEvent
): void {
  let entity = new FarmOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;
  entity.save();
}

function processSetIchiPerBlockEntity(event: SetIchiPerBlockEvent): void {
  let entity = new FarmSetIchiPerBlock(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.ichiPerBlock = event.params.ichiPerBlock;
  entity.withUpdate = event.params.withUpdate;
  entity.save();
}

function processWithdrawFarmWithdrawEntity(event: WithdrawEvent): void {
  let withdraw = new FarmWithdraw(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  withdraw.user = event.params.user;
  withdraw.pid = event.params.pid;
  withdraw.amount = event.params.amount;
  withdraw.to = event.params.to;
  withdraw.timeStamp = event.block.timestamp;
  withdraw.save();
}

function processWithdrawFarmAccountEntity(event: WithdrawEvent): void {
  let user = event.params.user;
  let pid = event.params.pid;
  let id = user.toHex() + "-" + pid.toString();
  let account = new FarmAccount(id);
  let ichiFarmV2_contract = ichiFarmV2.bind(event.address);
  let userLPBalance = ichiFarmV2_contract.userInfo(pid, user).value0;

  account.pid = pid;
  account.accountLPBalance = userLPBalance;
  account.user = event.params.user.toString();
  account.user = event.params.user.toHexString();
  account.save();
}

function processWithdrawFarmUserEntity(event: WithdrawEvent): void {
  let user = FarmUser.load(event.params.user.toHexString());
  if (!user) {
    user = new FarmUser(event.params.user.toHexString());
    user.save();
  }
}

function processWithdrawFarmEntity(event: WithdrawEvent): void {
  let id1 = event.params.pid.toString();
  let farm = Farm.load(id1);
  if (farm == null) {
    farm = new Farm(id1);
  }
  let pid = event.params.pid;
  let ichiFarmV2_contract = ichiFarmV2.bind(event.address);
  farm.lpToken = ichiFarmV2_contract.lpToken(event.params.pid);
  let lpTokenAddress = ichiFarmV2_contract.lpToken(pid);
  let erc20_contract = erc20.bind(lpTokenAddress);

  farm.lpTokenSymbol = erc20_contract.symbol();
  farm.lpTokenDecimals = BigInt.fromI32(erc20_contract.decimals());
  farm.rewardTokensPerBlock = ichiFarmV2_contract.ichiPerBlock();
  farm.totalAllocPoints = ichiFarmV2_contract.totalAllocPoint();
  farm.totalLPSupply = erc20_contract.totalSupply();
  farm.farmLPSupply = ichiFarmV2_contract.getLPSupply(event.params.pid);
  farm.accIchiPerShare = ichiFarmV2_contract.poolInfo(pid).value0;
  farm.lastRewardBlock = ichiFarmV2_contract.poolInfo(pid).value1;
  farm.allocPoint = ichiFarmV2_contract.poolInfo(pid).value2;
  farm.poolIchiReward = ichiFarmV2_contract.poolIchiReward(pid);
  farm.ichiPerBlock = ichiFarmV2_contract.ichiPerBlock();
  farm.save();
}

import {
  Affiliate as AffiliateEvent,
  Approval as ApprovalEvent,
  DeployICHIVault as DeployICHIVaultEvent,
  Deposit as DepositEvent,
  DepositMax as DepositMaxEvent,
  Hysteresis as HysteresisEvent,
  MaxTotalSupply as MaxTotalSupplyEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Rebalance as RebalanceEvent,
  SetTwapPeriod as SetTwapPeriodEvent,
  Transfer as TransferEvent,
  Withdraw as WithdrawEvent,
  ICHIVault,
} from "../generated/templates/Vault/ICHIVault";
import {
  VaultAffiliate,
  VaultApproval,
  DeployICHIVault,
  VaultDeposit,
  VaultDepositMax,
  VaultHysteresis,
  MaxTotalSupply,
  VaultOwnershipTransferred,
  VaultRebalance,
  VaultSetTwapPeriod,
  VaultTransfer,
  VaultWithdraw,
} from "../generated/schema";
import { UniswapV3Pool } from "../generated/templates/Vault/UniswapV3Pool";

export function handleAffiliate(event: AffiliateEvent): void {
  let affiliate = new VaultAffiliate(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  affiliate.vault = event.address;
  affiliate.sender = event.params.sender;
  affiliate.affiliate = event.params.affiliate;
  affiliate.save();
}

export function handleApproval(event: ApprovalEvent): void {
  let approval = new VaultApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  approval.vault = event.address;
  approval.owner = event.params.owner;
  approval.spender = event.params.spender;
  approval.value = event.params.value;
  approval.save();
}

export function handleDeployICHIVault(event: DeployICHIVaultEvent): void {
  let deployIchiVault = new DeployICHIVault(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  deployIchiVault.vault = event.address.toHexString();
  deployIchiVault.sender = event.params.sender;
  deployIchiVault.pool = event.params.pool;
  deployIchiVault.allowToken0 = event.params.allowToken0;
  deployIchiVault.allowToken1 = event.params.allowToken1;
  deployIchiVault.owner = event.params.owner;
  deployIchiVault.twapPeriod = event.params.twapPeriod;
  deployIchiVault.save();
}

export function handleDeposit(event: DepositEvent): void {
  let deposit = new VaultDeposit(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  deposit.vault = event.address;
  let vaultContract = ICHIVault.bind(event.address);
  let poolAddress = vaultContract.pool();
  let poolContract = UniswapV3Pool.bind(poolAddress);
  let amount0 = event.params.amount0;
  let amount1 = event.params.amount1;
  let totalAmounts = vaultContract.getTotalAmounts();
  let totalAmount0 = totalAmounts.value0;
  let totalAmount1 = totalAmounts.value1;

  deposit.sender = event.params.sender;
  deposit.to = event.params.to;
  deposit.shares = event.params.shares;
  deposit.createdAtTimestamp = event.block.timestamp;

  deposit.sqrtPrice = poolContract.slot0().value0;
  deposit.amount0 = amount0;
  deposit.amount1 = amount1;
  deposit.totalAmount0 = totalAmount0;
  deposit.totalAmount1 = totalAmount1;
  deposit.totalAmount0BeforeEvent = totalAmount0.minus(amount0);
  deposit.totalAmount1BeforeEvent = totalAmount1.minus(amount1);

  deposit.save();
}

export function handleDepositMax(event: DepositMaxEvent): void {
  let depositMax = new VaultDepositMax(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  depositMax.vault = event.address;
  depositMax.sender = event.params.sender;
  depositMax.deposit0Max = event.params.deposit0Max;
  depositMax.deposit1Max = event.params.deposit1Max;
  depositMax.save();
}

export function handleHysteresis(event: HysteresisEvent): void {
  let hysteresis = new VaultHysteresis(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  hysteresis.vault = event.address;
  hysteresis.sender = event.params.sender;
  hysteresis.hysteresis = event.params.hysteresis;
  hysteresis.save();
}

export function handleMaxTotalSupply(event: MaxTotalSupplyEvent): void {
  let maxTotalSupply = new MaxTotalSupply(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  maxTotalSupply.vault = event.address;
  maxTotalSupply.sender = event.params.sender;
  maxTotalSupply.maxTotalSupply = event.params.maxTotalSupply;
  maxTotalSupply.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let ownershipTransferred = new VaultOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  ownershipTransferred.vault = event.address;
  ownershipTransferred.previousOwner = event.params.previousOwner;
  ownershipTransferred.newOwner = event.params.newOwner;
  ownershipTransferred.save();
}

export function handleRebalance(event: RebalanceEvent): void {
  let rebalance = new VaultRebalance(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  rebalance.vault = event.address;
  rebalance.tick = event.params.tick;
  rebalance.totalAmount0 = event.params.totalAmount0;
  rebalance.totalAmount1 = event.params.totalAmount1;
  rebalance.feeAmount0 = event.params.feeAmount0;
  rebalance.feeAmount1 = event.params.feeAmount1;
  rebalance.totalSupply = event.params.totalSupply;
  rebalance.save();
}

export function handleSetTwapPeriod(event: SetTwapPeriodEvent): void {
  let setTwapPeriod = new VaultSetTwapPeriod(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  setTwapPeriod.vault = event.address;
  setTwapPeriod.sender = event.params.sender;
  setTwapPeriod.newTwapPeriod = event.params.newTwapPeriod;
  setTwapPeriod.vault = event.address;
  setTwapPeriod.save();
}

export function handleTransfer(event: TransferEvent): void {
  let transfer = new VaultTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  transfer.vault = event.address;
  transfer.from = event.params.from;
  transfer.to = event.params.to;
  transfer.value = event.params.value;
  transfer.save();
}

export function handleWithdraw(event: WithdrawEvent): void {
  let withdraw = new VaultWithdraw(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  withdraw.vault = event.address;
  let vaultContract = ICHIVault.bind(event.address);
  let poolContract = UniswapV3Pool.bind(vaultContract.pool());
  let amount0 = event.params.amount0;
  let amount1 = event.params.amount1;
  let totalAmounts = vaultContract.getTotalAmounts();
  let totalAmount0 = totalAmounts.value0;
  let totalAmount1 = totalAmounts.value1;

  withdraw.sender = event.params.sender;
  withdraw.to = event.params.to;
  withdraw.shares = event.params.shares;
  withdraw.createdAtTimestamp = event.block.timestamp;
  withdraw.sqrtPrice = poolContract.slot0().value0;
  withdraw.amount0 = amount0;
  withdraw.amount1 = amount1;
  withdraw.totalAmount0 = totalAmount0;
  withdraw.totalAmount1 = totalAmount1;
  withdraw.totalAmount0BeforeEvent = totalAmount0.plus(amount0);
  withdraw.totalAmount1BeforeEvent = totalAmount1.plus(amount1);

  withdraw.save();
}

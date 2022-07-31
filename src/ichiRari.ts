import {
  AccrueInterest as AccrueInterestEvent,
  Approval as ApprovalEvent,
  Borrow as BorrowEvent,
  Failure as FailureEvent,
  LiquidateBorrow as LiquidateBorrowEvent,
  Mint as MintEvent,
  NewAdminFee as NewAdminFeeEvent,
  NewComptroller as NewComptrollerEvent,
  NewFuseFee as NewFuseFeeEvent,
  NewImplementation as NewImplementationEvent,
  NewMarketInterestRateModel as NewMarketInterestRateModelEvent,
  NewReserveFactor as NewReserveFactorEvent,
  Redeem as RedeemEvent,
  RepayBorrow as RepayBorrowEvent,
  ReservesAdded as ReservesAddedEvent,
  ReservesReduced as ReservesReducedEvent,
  Transfer as TransferEvent,
  IchiPool,
} from "../generated/IchiRariPool136/IchiPool";
import { Comptroller } from "../generated/IchiRariPool136/Comptroller";
import {
  IchiRariAccrueInterest,
  IchiRariApproval,
  IchiRariBorrow,
  IchiRariFailure,
  IchiRariLiquidateBorrow,
  IchiRariMint,
  IchiRariNewAdminFee,
  IchiRariNewComptroller,
  IchiRariNewFuseFee,
  IchiRariNewImplementation,
  IchiRariNewMarketInterestRateModel,
  IchiRariNewReserveFactor,
  IchiRariRedeem,
  IchiRariRepayBorrow,
  IchiRariReservesAdded,
  IchiRariReservesReduced,
  IchiRariSupplyThresholdReached,
  IchiRariTransfer,
} from "../generated/schema";
import { BigDecimal } from "@graphprotocol/graph-ts";

export function handleAccrueInterest(event: AccrueInterestEvent): void {
  let entity = new IchiRariAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.cashPrior = event.params.cashPrior;
  entity.interestAccumulated = event.params.interestAccumulated;
  entity.borrowIndex = event.params.borrowIndex;
  entity.totalBorrows = event.params.totalBorrows;
  entity.save();
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new IchiRariApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.owner = event.params.owner;
  entity.spender = event.params.spender;
  entity.amount = event.params.amount;
  entity.save();
}

export function handleBorrow(event: BorrowEvent): void {
  let entity = new IchiRariBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.borrower = event.params.borrower;
  entity.borrowAmount = event.params.borrowAmount;
  entity.accountBorrows = event.params.accountBorrows;
  entity.totalBorrows = event.params.totalBorrows;
  entity.save();
}

export function handleFailure(event: FailureEvent): void {
  let entity = new IchiRariFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.error = event.params.error;
  entity.info = event.params.info;
  entity.detail = event.params.detail;
  entity.save();
}

export function handleLiquidateBorrow(event: LiquidateBorrowEvent): void {
  let entity = new IchiRariLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.liquidator = event.params.liquidator;
  entity.borrower = event.params.borrower;
  entity.repayAmount = event.params.repayAmount;
  entity.cTokenCollateral = event.params.cTokenCollateral;
  entity.seizeTokens = event.params.seizeTokens;
  entity.save();
}

export function handleMint(event: MintEvent): void {
  let entity = new IchiRariMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.minter = event.params.minter;
  entity.mintAmount = event.params.mintAmount;
  entity.mintTokens = event.params.mintTokens;
  entity.save();
}

export function handleNewAdminFee(event: NewAdminFeeEvent): void {
  let entity = new IchiRariNewAdminFee(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.oldAdminFeeMantissa = event.params.oldAdminFeeMantissa;
  entity.newAdminFeeMantissa = event.params.newAdminFeeMantissa;
  entity.save();
}

export function handleNewComptroller(event: NewComptrollerEvent): void {
  let entity = new IchiRariNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.oldComptroller = event.params.oldComptroller;
  entity.newComptroller = event.params.newComptroller;
  entity.save();
}

export function handleNewFuseFee(event: NewFuseFeeEvent): void {
  let entity = new IchiRariNewFuseFee(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.oldFuseFeeMantissa = event.params.oldFuseFeeMantissa;
  entity.newFuseFeeMantissa = event.params.newFuseFeeMantissa;
  entity.save();
}

export function handleNewImplementation(event: NewImplementationEvent): void {
  let entity = new IchiRariNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.oldImplementation = event.params.oldImplementation;
  entity.newImplementation = event.params.newImplementation;
  entity.save();
}

export function handleNewMarketInterestRateModel(
  event: NewMarketInterestRateModelEvent
): void {
  let entity = new IchiRariNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.oldInterestRateModel = event.params.oldInterestRateModel;
  entity.newInterestRateModel = event.params.newInterestRateModel;
  entity.save();
}

export function handleNewReserveFactor(event: NewReserveFactorEvent): void {
  let entity = new IchiRariNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa;
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa;
  entity.save();
}

export function handleRedeem(event: RedeemEvent): void {
  let entity = new IchiRariRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.redeemer = event.params.redeemer;
  entity.redeemAmount = event.params.redeemAmount;
  entity.redeemTokens = event.params.redeemTokens;
  entity.save();
}

export function handleRepayBorrow(event: RepayBorrowEvent): void {
  let entity = new IchiRariRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.payer = event.params.payer;
  entity.borrower = event.params.borrower;
  entity.repayAmount = event.params.repayAmount;
  entity.accountBorrows = event.params.accountBorrows;
  entity.totalBorrows = event.params.totalBorrows;
  entity.save();
}

export function handleReservesAdded(event: ReservesAddedEvent): void {
  let entity = new IchiRariReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.benefactor = event.params.benefactor;
  entity.addAmount = event.params.addAmount;
  entity.newTotalReserves = event.params.newTotalReserves;
  entity.save();
}

export function handleReservesReduced(event: ReservesReducedEvent): void {
  let entity = new IchiRariReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.admin = event.params.admin;
  entity.reduceAmount = event.params.reduceAmount;
  entity.newTotalReserves = event.params.newTotalReserves;
  entity.save();
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new IchiRariTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.amount = event.params.amount;

  let ichi_pool = IchiPool.bind(event.address);
  let comptroller_address = ichi_pool.comptroller();
  let comptroller = Comptroller.bind(comptroller_address);
  let supply_cap = new BigDecimal(comptroller.supplyCaps(event.address));
  let current_balance = new BigDecimal(ichi_pool.getCash());
  if (supply_cap.gt(BigDecimal.fromString("0"))) {
    let current_ratio = current_balance.div(supply_cap);
    let threshold = BigDecimal.fromString("0.9");
    if (current_ratio.ge(threshold)) {
      let supplyThresholdReached = new IchiRariSupplyThresholdReached(
        event.transaction.hash.toHex() + "-" + event.logIndex.toString()
      );
      supplyThresholdReached.currentRatio = current_ratio.toString();
      supplyThresholdReached.supplyIchi = current_balance.toString();
      supplyThresholdReached.supplyCap = supply_cap.toString();
      supplyThresholdReached.timeStamp = event.block.timestamp;
      supplyThresholdReached.save();
    }
  }

  entity.save();
}
/**type SupplyThresholdReached @entity {
  id: ID!
  currentRation: String!
  supplyIchi: BigInt!
  supplyCap: BigInt!
  timeStampe: BigInt!
} */

import {
  AdminChanged as AdminChangedEvent,
  Upgraded as UpgradedEvent,
  Approval as ApprovalEvent,
  AssetAdded as AssetAddedEvent,
  AssetRemoved as AssetRemovedEvent,
  ControllerChanged as ControllerChangedEvent,
  FromStrategy as FromStrategyEvent,
  Initialized as InitializedEvent,
  MintMasterChanged as MintMasterChangedEvent,
  Minted as MintedEvent,
  NewFactory as NewFactoryEvent,
  NewMintingFee as NewMintingFeeEvent,
  NewRedemptionFee as NewRedemptionFeeEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Redeemed as RedeemedEvent,
  StrategyAllowanceDecreased as StrategyAllowanceDecreasedEvent,
  StrategyAllowanceIncreased as StrategyAllowanceIncreasedEvent,
  StrategyClosed as StrategyClosedEvent,
  StrategyExecuted as StrategyExecutedEvent,
  StrategyRemoved as StrategyRemovedEvent,
  StrategySet as StrategySetEvent,
  ToStrategy as ToStrategyEvent,
  Transfer as TransferEvent,
} from "../generated/templates/oneToken/oneToken";
import {
  OneTokenAdminChanged,
  OneTokenUpgraded,
  OneTokenApproval,
  OneTokenAssetAdded,
  OneTokenAssetRemoved,
  OneTokenControllerChanged,
  OneTokenFromStrategy,
  OneTokenInitialized,
  OneTokenMintMasterChanged,
  OneTokenMinted,
  OneTokenNewFactory,
  OneTokenNewMintingFee,
  OneTokenNewRedemptionFee,
  OneTokenOwnershipTransferred,
  OneTokenRedeemed,
  OneTokenStrategyAllowanceDecreased,
  OneTokenStrategyAllowanceIncreased,
  OneTokenStrategyClosed,
  OneTokenStrategyExecuted,
  OneTokenStrategyRemoved,
  OneTokenStrategySet,
  OneTokenToStrategy,
  OneTokenTransfer,
} from "../generated/schema";

export function handleAdminChanged(event: AdminChangedEvent): void {
  let entity = new OneTokenAdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.previousAdmin = event.params.previousAdmin;
  entity.newAdmin = event.params.newAdmin;
  entity.save();
}

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new OneTokenUpgraded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.implementation = event.params.implementation;
  entity.save();
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new OneTokenApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.owner = event.params.owner;
  entity.spender = event.params.spender;
  entity.value = event.params.value;
  entity.save();
}

export function handleAssetAdded(event: AssetAddedEvent): void {
  let entity = new OneTokenAssetAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.token = event.params.token;
  entity.oracle = event.params.oracle;
  entity.save();
}

export function handleAssetRemoved(event: AssetRemovedEvent): void {
  let entity = new OneTokenAssetRemoved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.token = event.params.token;
  entity.save();
}

export function handleControllerChanged(event: ControllerChangedEvent): void {
  let entity = new OneTokenControllerChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.controller = event.params.controller;
  entity.save();
}

export function handleFromStrategy(event: FromStrategyEvent): void {
  let entity = new OneTokenFromStrategy(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.strategy = event.params.strategy;
  entity.token = event.params.token;
  entity.amount = event.params.amount;
  entity.save();
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new OneTokenInitialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.name = event.params.name;
  entity.symbol = event.params.symbol;
  entity.controller = event.params.controller;
  entity.mintMaster = event.params.mintMaster;
  entity.memberToken = event.params.memberToken;
  entity.collateral = event.params.collateral;
  entity.save();
}

export function handleMintMasterChanged(event: MintMasterChangedEvent): void {
  let entity = new OneTokenMintMasterChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.mintMaster = event.params.mintMaster;
  entity.oneTokenOracle = event.params.oneTokenOracle;
  entity.save();
}

export function handleMinted(event: MintedEvent): void {
  let entity = new OneTokenMinted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.collateral = event.params.collateral;
  entity.oneTokens = event.params.oneTokens;
  entity.memberTokens = event.params.memberTokens;
  entity.collateralTokens = event.params.collateralTokens;
  entity.save();
}

export function handleNewFactory(event: NewFactoryEvent): void {
  let entity = new OneTokenNewFactory(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.factory = event.params.factory;
  entity.save();
}

export function handleNewMintingFee(event: NewMintingFeeEvent): void {
  let entity = new OneTokenNewMintingFee(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.fee = event.params.fee;
  entity.save();
}

export function handleNewRedemptionFee(event: NewRedemptionFeeEvent): void {
  let entity = new OneTokenNewRedemptionFee(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.fee = event.params.fee;
  entity.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OneTokenOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;
  entity.save();
}

export function handleRedeemed(event: RedeemedEvent): void {
  let entity = new OneTokenRedeemed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.collateral = event.params.collateral;
  entity.amount = event.params.amount;
  entity.save();
}

export function handleStrategyAllowanceDecreased(
  event: StrategyAllowanceDecreasedEvent
): void {
  let entity = new OneTokenStrategyAllowanceDecreased(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.token = event.params.token;
  entity.strategy = event.params.strategy;
  entity.amount = event.params.amount;
  entity.save();
}

export function handleStrategyAllowanceIncreased(
  event: StrategyAllowanceIncreasedEvent
): void {
  let entity = new OneTokenStrategyAllowanceIncreased(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.token = event.params.token;
  entity.strategy = event.params.strategy;
  entity.amount = event.params.amount;
  entity.save();
}

export function handleStrategyClosed(event: StrategyClosedEvent): void {
  let entity = new OneTokenStrategyClosed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.token = event.params.token;
  entity.strategy = event.params.strategy;
  entity.save();
}

export function handleStrategyExecuted(event: StrategyExecutedEvent): void {
  let entity = new OneTokenStrategyExecuted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.token = event.params.token;
  entity.strategy = event.params.strategy;
  entity.save();
}

export function handleStrategyRemoved(event: StrategyRemovedEvent): void {
  let entity = new OneTokenStrategyRemoved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.token = event.params.token;
  entity.strategy = event.params.strategy;
  entity.save();
}

export function handleStrategySet(event: StrategySetEvent): void {
  let entity = new OneTokenStrategySet(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.token = event.params.token;
  entity.strategy = event.params.strategy;
  entity.allowance = event.params.allowance;
  entity.save();
}

export function handleToStrategy(event: ToStrategyEvent): void {
  let entity = new OneTokenToStrategy(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.strategy = event.params.strategy;
  entity.token = event.params.token;
  entity.amount = event.params.amount;
  entity.save();
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new OneTokenTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.value = event.params.value;
  entity.save();
}

import {
  AddOracle as AddOracleEvent,
  ForeignTokenAdmitted as ForeignTokenAdmittedEvent,
  ForeignTokenRemoved as ForeignTokenRemovedEvent,
  ForeignTokenUpdated as ForeignTokenUpdatedEvent,
  ModuleAdmitted as ModuleAdmittedEvent,
  ModuleRemoved as ModuleRemovedEvent,
  ModuleUpdated as ModuleUpdatedEvent,
  OneTokenAdmin as OneTokenAdminEvent,
  OneTokenDeployed as OneTokenDeployedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RemoveOracle as RemoveOracleEvent,
} from "../generated/OneTokenFactory/OneTokenFactory";
import {
  OneTokenFactoryAddOracle,
  OneTokenFactoryForeignTokenAdmitted,
  OneTokenFactoryForeignTokenRemoved,
  OneTokenFactoryForeignTokenUpdated,
  OneTokenFactoryModuleAdmitted,
  OneTokenFactoryModuleRemoved,
  OneTokenFactoryModuleUpdated,
  OneTokenFactoryOneTokenAdmin,
  OneTokenFactoryOneTokenDeployed,
  OneTokenFactoryOwnershipTransferred,
  OneTokenFactoryRemoveOracle,
} from "../generated/schema";
import { oneToken } from "../generated/templates";

export function handleAddOracle(event: AddOracleEvent): void {
  let entity = new OneTokenFactoryAddOracle(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.foreignToken = event.params.foreignToken;
  entity.oracle = event.params.oracle;
  entity.save();
}

export function handleForeignTokenAdmitted(
  event: ForeignTokenAdmittedEvent
): void {
  let entity = new OneTokenFactoryForeignTokenAdmitted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.foreignToken = event.params.foreignToken;
  entity.isCollateral = event.params.isCollateral;
  entity.oracle = event.params.oracle;
  entity.save();
}

export function handleForeignTokenRemoved(
  event: ForeignTokenRemovedEvent
): void {
  let entity = new OneTokenFactoryForeignTokenRemoved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.foreignToken = event.params.foreignToken;
  entity.save();
}

export function handleForeignTokenUpdated(
  event: ForeignTokenUpdatedEvent
): void {
  let entity = new OneTokenFactoryForeignTokenUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.foreignToken = event.params.foreignToken;
  entity.isCollateral = event.params.isCollateral;
  entity.save();
}

export function handleModuleAdmitted(event: ModuleAdmittedEvent): void {
  let entity = new OneTokenFactoryModuleAdmitted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.module = event.params.module;
  entity.moduleType = event.params.moduleType;
  entity.name = event.params.name;
  entity.url = event.params.url;
  entity.save();
}

export function handleModuleRemoved(event: ModuleRemovedEvent): void {
  let entity = new OneTokenFactoryModuleRemoved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.module = event.params.module;
  entity.save();
}

export function handleModuleUpdated(event: ModuleUpdatedEvent): void {
  let entity = new OneTokenFactoryModuleUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.module = event.params.module;
  entity.name = event.params.name;
  entity.url = event.params.url;
  entity.save();
}

export function handleOneTokenAdmin(event: OneTokenAdminEvent): void {
  let entity = new OneTokenFactoryOneTokenAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.newOneTokenProxy = event.params.newOneTokenProxy;
  entity.proxyAdmin = event.params.proxyAdmin;
  entity.save();
}

export function handleOneTokenDeployed(event: OneTokenDeployedEvent): void {
  let entity = new OneTokenFactoryOneTokenDeployed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.newOneTokenProxy = event.params.newOneTokenProxy;
  entity.name = event.params.name;
  entity.symbol = event.params.symbol;
  entity.governance = event.params.governance;
  entity.version = event.params.version;
  entity.controller = event.params.controller;
  entity.mintMaster = event.params.mintMaster;
  entity.oneTokenOracle = event.params.oneTokenOracle;
  entity.memberToken = event.params.memberToken;
  entity.collateral = event.params.collateral;
  entity.save();
  oneToken.create(event.params.newOneTokenProxy);
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OneTokenFactoryOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;
  entity.save();
}

export function handleRemoveOracle(event: RemoveOracleEvent): void {
  let entity = new OneTokenFactoryRemoveOracle(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.foreignToken = event.params.foreignToken;
  entity.oracle = event.params.oracle;
  entity.save();
}

import { BigInt } from "@graphprotocol/graph-ts";
import { ICHIVaultCreated } from "../generated/ICHIVaultFactory/ICHIVaultFactory";
import { IchiVault } from "../generated/schema";
import { Vault } from "../generated/templates";

export function handleICHIVaultCreated(event: ICHIVaultCreated): void {
  let ichiVault = new IchiVault(event.params.ichiVault.toHexString());
  ichiVault.sender = event.params.sender;
  ichiVault.tokenA = event.params.tokenA;
  ichiVault.allowTokenA = event.params.allowTokenA;
  ichiVault.tokenB = event.params.tokenB;
  ichiVault.allowTokenB = event.params.allowTokenB;
  ichiVault.count = event.params.count;
  ichiVault.fee = BigInt.fromI32(event.params.fee);
  ichiVault.createdAtTimestamp = event.block.timestamp;
  ichiVault.save();
  Vault.create(event.params.ichiVault);
}

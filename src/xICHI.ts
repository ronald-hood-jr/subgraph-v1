import {
  Approval as ApprovalEvent,
  Transfer as TransferEvent,
  xICHI
} from "../generated/xICHI/xICHI"
import {erc20} from "../generated/xICHI/erc20"
import { xICHIApproval, xICHITransfer } from "../generated/schema"
import { Address, BigInt } from '@graphprotocol/graph-ts'
import { BigDecimal } from '@graphprotocol/graph-ts'

export function handleApproval(event: ApprovalEvent): void {
  let entity = new xICHIApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new xICHITransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.timeStamp = event.block.timestamp

  let xICHI_contract = xICHI.bind(event.address)
  let ICHI = erc20.bind(Address.fromString("0x903bEF1736CDdf2A537176cf3C64579C3867A881"));
  let ichiAmount = ICHI.balanceOf(event.address)
  let xICHIAmount = xICHI_contract.totalSupply()
  let delta = BigDecimal.fromString("0")
  if (xICHIAmount.gt(BigInt.fromString("0"))) {
    delta = (new BigDecimal(ichiAmount)).div(new BigDecimal(xICHIAmount)); 
  }
  
  entity.ichiAmount = ichiAmount
  entity.xICHIAmount = xICHIAmount
  entity.delta = delta

  entity.save()
}

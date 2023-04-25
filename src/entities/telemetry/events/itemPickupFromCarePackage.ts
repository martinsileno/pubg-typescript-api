import { ILogItemPickupFromCarePackage } from "../../..";

import { Character } from "../objects/character";
import { Item } from "../objects/item";

import { TelemetryEvent } from "./telemetryEvent";

export class ItemPickupFromCarePackage extends TelemetryEvent {
  private _character: Character;
  private _item: Item;
  private _carePackageUniqueId: number;

  constructor(event: ILogItemPickupFromCarePackage) {
    super(event);
    this._character = new Character(event.character);
    this._item = new Item(event.item);
    this._carePackageUniqueId = event.carePackageUniqueId;
  }

  get character(): Character {
    return this._character;
  }

  get item(): Item {
    return this._item;
  }

  get carePackageUniqueId(): number {
    return this._carePackageUniqueId;
  }
}

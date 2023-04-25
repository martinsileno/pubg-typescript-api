import { ILogItemPutToVehicleTrunk } from "../../..";

import { Character } from "../objects/character";
import { Item } from "../objects/item";
import { Vehicle } from "../objects/vehicle";

import { TelemetryEvent } from "./telemetryEvent";

export class ItemPutToVehicleTrunk extends TelemetryEvent {
  private _character: Character;
  private _item: Item;
  private _vehicle: Vehicle;

  constructor(event: ILogItemPutToVehicleTrunk) {
    super(event);
    this._character = new Character(event.character);
    this._item = new Item(event.item);
    this._vehicle = new Vehicle(event.vehicle);
  }

  get character(): Character {
    return this._character;
  }

  get item(): Item {
    return this._item;
  }

  get vehicle(): Vehicle {
    return this._vehicle;
  }
}

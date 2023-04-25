import { ILogPlayerDestroyBreachableWall } from "../../..";

import { Character } from "../objects/character";
import { Item } from "../objects/item";

import { TelemetryEvent } from "./telemetryEvent";

export class PlayerDestroyBreachableWall extends TelemetryEvent {
  private _attacker: Character;
  private _weapon: Item;

  constructor(event: ILogPlayerDestroyBreachableWall) {
    super(event);
    this._attacker = new Character(event.attacker);
    this._weapon = new Item(event.weapon);
  }

  get attacker(): Character {
    return this._attacker;
  }

  get weapon(): Item {
    return this._weapon;
  }
}

import { ILogPlayerUseThrowable } from "../../..";

import { Character } from "../objects/character";
import { Item } from "../objects/item";

import { TelemetryEvent } from "./telemetryEvent";

export class PlayerUseThrowable extends TelemetryEvent {
  private _attackId: number;
  private _fireWeaponStackCount: number;
  private _attacker: Character;
  private _attackType: string;
  private _weapon: Item;

  constructor(event: ILogPlayerUseThrowable) {
    super(event);
    this._attackId = event.attackId;
    this._fireWeaponStackCount = event.fireWeaponStackCount;
    this._attacker = new Character(event.attacker);
    this._attackType = event.attackType;
    this._weapon = new Item(event.weapon);
  }

  get attackId(): number {
    return this._attackId;
  }

  get fireWeaponStackCount(): number {
    return this._fireWeaponStackCount;
  }

  get attacker(): Character {
    return this._attacker;
  }

  get attackType(): string {
    return this._attackType;
  }

  get weapon(): Item {
    return this._weapon;
  }
}

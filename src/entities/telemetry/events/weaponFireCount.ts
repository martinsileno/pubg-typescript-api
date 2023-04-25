import { ILogWeaponFireCount } from "../../..";

import { Character } from "../objects/character";

import { TelemetryEvent } from "./telemetryEvent";

export class IWeaponFireCount extends TelemetryEvent {
  private _character: Character;
  private _weaponId: string;
  private _fireCount: number; // Increments of 10

  constructor(event: ILogWeaponFireCount) {
    super(event);
    this._character = new Character(event.character);
    this._weaponId = event.weaponId;
    this._fireCount = event.fireCount;
  }

  get character(): Character {
    return this._character;
  }

  get weaponId(): string {
    return this._weaponId;
  }

  get fireCount(): number {
    return this._fireCount;
  }
}

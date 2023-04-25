import { ILogVaultStart } from "../../..";

import { Character } from "../objects/character";

import { TelemetryEvent } from "./telemetryEvent";

export class VaultStart extends TelemetryEvent {
  private _character: Character;
  private _isLedgeGrab: boolean;

  constructor(event: ILogVaultStart) {
    super(event);
    this._character = new Character(event.character);
    this._isLedgeGrab = event.isLedgeGrab;
  }

  get character(): Character {
    return this._character;
  }

  get isLedgeGrab(): boolean {
    return this._isLedgeGrab;
  }
}

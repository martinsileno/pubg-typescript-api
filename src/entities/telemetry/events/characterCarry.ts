import { ILogCharacterCarry } from "../../..";

import { Character } from "../objects/character";

import { TelemetryEvent } from "./telemetryEvent";

export class CharacterCarry extends TelemetryEvent {
  private _character: Character;
  private _carryState: string;

  constructor(event: ILogCharacterCarry) {
    super(event);
    this._character = new Character(event.character);
    this._carryState = event.carryState;
  }

  get character(): Character {
    return this._character;
  }

  get carryState(): string {
    return this._carryState;
  }
}

import { ILogParachuteLanding } from "../../..";

import { Character } from "../objects/character";

import { TelemetryEvent } from "./telemetryEvent";

export class ParachuteLanding extends TelemetryEvent {
  private _character: Character;
  private _distance: number;

  constructor(event: ILogParachuteLanding) {
    super(event);
    this._character = new Character(event.character);
    this._distance = event.distance;
  }

  get character(): Character {
    return this._character;
  }

  get distance(): number {
    return this._distance;
  }
}

import { ILogPlayerRedeploy } from "../../..";

import { Character } from "../objects/character";

import { TelemetryEvent } from "./telemetryEvent";

export class PlayerRedeploy extends TelemetryEvent {
  private _character: Character;

  constructor(event: ILogPlayerRedeploy) {
    super(event);
    this._character = new Character(event.character);
  }

  get character(): Character {
    return this._character;
  }
}

import { ILogPlayerRedeployStart } from "../../..";

import { Character } from "../objects/character";

import { TelemetryEvent } from "./telemetryEvent";

export class PlayerRedeployStart extends TelemetryEvent {
  private _characters: Character[];

  constructor(event: ILogPlayerRedeployStart) {
    super(event);
    this._characters = event.characters.map((c) => new Character(c));
  }

  get characters(): Character[] {
    return this._characters;
  }
}

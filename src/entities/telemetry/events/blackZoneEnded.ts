import { ILogBlackZoneEnded } from "../../..";

import { Character } from "../objects/character";

import { TelemetryEvent } from "./telemetryEvent";

export class BlackZoneEnded extends TelemetryEvent {
  private _survivors: Character[];

  constructor(event: ILogBlackZoneEnded) {
    super(event);
    this._survivors = event.survivors.map((s) => new Character(s));
  }

  get survivors(): Character[] {
    return this._survivors;
  }
}

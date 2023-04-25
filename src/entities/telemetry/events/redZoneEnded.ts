import { ILogRedZoneEnded } from "../../..";

import { Character } from "../objects/character";

import { TelemetryEvent } from "./telemetryEvent";

export class RedZoneEnded extends TelemetryEvent {
  private _drivers: Character[];

  constructor(event: ILogRedZoneEnded) {
    super(event);
    this._drivers = event.drivers.map((d) => new Character(d));
  }

  get drivers(): Character[] {
    return this._drivers;
  }
}

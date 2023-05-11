import { ILogEmPickupLiftOff } from "../../..";

import { Character } from "../objects/character";

import { TelemetryEvent } from "./telemetryEvent";

export class EmPickupLiftOff extends TelemetryEvent {
  private _instigator: Character;
  private _riders: Character[];

  constructor(event: ILogEmPickupLiftOff) {
    super(event);
    this._instigator = new Character(event.instigator);
    this._riders = event.riders.map((r) => new Character(r));
  }

  get instigator(): Character {
    return this._instigator;
  }

  get riders(): Character[] {
    return this._riders;
  }
}

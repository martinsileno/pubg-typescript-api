import { ILogPlayerDestroyProp } from "../../..";

import { Character } from "../objects/character";
import { Location } from "../objects/location";

import { TelemetryEvent } from "./telemetryEvent";

export class PlayerDestroyProp extends TelemetryEvent {
  private _attacker: Character;
  private _objectType: string;
  private _objectLocation: Location;

  constructor(event: ILogPlayerDestroyProp) {
    super(event);
    this._attacker = new Character(event.attacker);
    this._objectType = event.objectType;
    this._objectLocation = new Location(event.objectLocation);
  }

  get character(): Character {
    return this._attacker;
  }

  get objectType(): string {
    return this._objectType;
  }

  get objectLocation(): Location {
    return this._objectLocation;
  }
}

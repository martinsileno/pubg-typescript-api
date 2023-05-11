import { ILogObjectDestroy } from "../../..";

import { Character } from "../objects/character";
import { Location } from "../objects/location";

import { TelemetryEvent } from "./telemetryEvent";

export class ObjectDestroy extends TelemetryEvent {
  private _character: Character;
  private _objectType: string;
  private _objectLocation: Location;

  constructor(event: ILogObjectDestroy) {
    super(event);
    this._character = new Character(event.character);
    this._objectType = event.objectType;
    this._objectLocation = new Location(event.objectLocation);
  }

  get character(): Character {
    return this._character;
  }

  get objectType(): string {
    return this._objectType;
  }

  get objectLocation(): Location {
    return this._objectLocation;
  }
}

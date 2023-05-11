import { ILogObjectInteraction } from "../../..";

import { Character } from "../objects/character";

import { TelemetryEvent } from "./telemetryEvent";

export class ObjectInteraction extends TelemetryEvent {
  private _character: Character;
  private _objectType: string;
  private _objectTypeStatus: string;
  private _objectTypeAdditionalInfo: string;

  constructor(event: ILogObjectInteraction) {
    super(event);
    this._character = new Character(event.character);
    this._objectType = event.objectType;
    this._objectTypeStatus = event.objectTypeStatus;
    this._objectTypeAdditionalInfo = event.objectTypeAdditionalInfo;
  }

  get character(): Character {
    return this._character;
  }

  get objectType(): string {
    return this._objectType;
  }

  get objectTypeStatus(): string {
    return this._objectTypeStatus;
  }

  get objectTypeAdditionalInfo(): string {
    return this._objectTypeAdditionalInfo;
  }
}

import { ILogSwimEnd } from '../../..';

import { Character } from '../objects/character';

import { TelemetryEvent } from './telemetryEvent';


export class SwimEnd extends TelemetryEvent {
  private _character: Character;
  private _swimDistance: number;

  constructor(event: ILogSwimEnd) {
    super(event);
    this._character = new Character(event.character);
    this._swimDistance = event.swimDistance;
  }

  get character(): Character {
    return this._character;
  }

  get swimDistance(): number {
    return this._swimDistance;
  }
}

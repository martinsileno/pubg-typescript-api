import { ILogSwimStart } from '../../..';

import { Character } from '../objects/character';

import { TelemetryEvent } from './telemetryEvent';


export class SwimStart extends TelemetryEvent {
  private _character: Character;

  constructor(event: ILogSwimStart) {
    super(event);
    this._character = new Character(event.character);
  }

  get character(): Character {
    return this._character;
  }
}

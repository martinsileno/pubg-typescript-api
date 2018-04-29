import { ILogPlayerCreate } from '../../..';

import { Character } from '../objects/character';

import { TelemetryEvent } from './telemetryEvent';


export class PlayerCreate extends TelemetryEvent {
  private _character: Character;

  constructor(event: ILogPlayerCreate) {
    super(event);
    this._character = new Character(event.character);
  }

  get character(): Character {
    return this._character;
  }
}

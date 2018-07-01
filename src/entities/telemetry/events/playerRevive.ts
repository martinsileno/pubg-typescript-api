import { ILogPlayerRevive } from '../../..';

import { Character } from '../objects/character';

import { TelemetryEvent } from './telemetryEvent';


export class PlayerRevive extends TelemetryEvent {
  private _reviver: Character;
  private _victim: Character;

  constructor(event: ILogPlayerRevive) {
    super(event);
    this._reviver = new Character(event.reviver);
    this._victim = new Character(event.victim);
  }

  get reviver(): Character {
    return this._reviver;
  }

  get victim(): Character {
    return this._victim;
  }
}

import { ILogPlayerPosition } from '../../..';

import { Character } from '../objects/character';

import { TelemetryEvent } from './telemetryEvent';


export class PlayerPosition extends TelemetryEvent {
  private _character: Character;
  private _elapsedTime: number;
  private _numAlivePlayers: number;

  constructor(event: ILogPlayerPosition) {
    super(event);
    this._character = new Character(event.character);
    this._elapsedTime = event.elapsedTime;
    this._numAlivePlayers = event.numAlivePlayers;
  }

  get character(): Character {
    return this._character;
  }

  get elapsedTime(): number {
    return this._elapsedTime;
  }

  get numAlivePlayers(): number {
    return this._numAlivePlayers;
  }
}

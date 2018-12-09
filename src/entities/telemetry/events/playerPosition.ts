import { ILogPlayerPosition } from '../../..';
import { Vehicle } from '../objects';
import { Character } from '../objects/character';

import { TelemetryEvent } from './telemetryEvent';


export class PlayerPosition extends TelemetryEvent {
  private _character: Character;
  private _elapsedTime: number;
  private _numAlivePlayers: number;
  private _vehicle?: Vehicle;

  constructor(event: ILogPlayerPosition) {
    super(event);
    this._character = new Character(event.character);
    this._elapsedTime = event.elapsedTime;
    this._numAlivePlayers = event.numAlivePlayers;
    if (event.vehicle) {
      this._vehicle = new Vehicle(event.vehicle);
    }
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

  get vehicle(): Vehicle | undefined {
    return this._vehicle;
  }
}

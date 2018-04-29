import { ILogMatchEnd } from '../../..';

import { Character } from '../objects/character';

import { TelemetryEvent } from './telemetryEvent';


export class MatchEnd extends TelemetryEvent {
  private _characters: Character[];

  constructor(event: ILogMatchEnd) {
    super(event);
    this._characters = event.characters.map(e => new Character(e));
  }

  get characters(): Character[] {
    return this._characters;
  }
}

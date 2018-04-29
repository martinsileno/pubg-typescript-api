import { ILogMatchStart } from '../../..';

import { Character } from '../objects/character';

import { TelemetryEvent } from './telemetryEvent';


export class MatchStart extends TelemetryEvent {
  private _mapName: string;
  private _weatherId: string;
  private _characters: Character[];
  private _cameraViewBehaviour: string;
  private _teamSize: number;
  private _blueZoneCustomOptions: string;

  constructor(event: ILogMatchStart) {
    super(event);
    this._mapName = event.mapName;
    this._weatherId = event.weatherId;
    this._characters = event.characters.map(e => new Character(e));
    this._cameraViewBehaviour = event.cameraViewBehaviour;
    this._teamSize = event.teamSize;
    this._blueZoneCustomOptions = event.blueZoneCustomOptions;
  }

  get mapName(): string {
    return this._mapName;
  }

  get weatherId(): string {
    return this._weatherId;
  }

  get characters(): Character[] {
    return this._characters;
  }

  get cameraViewBehaviour(): string {
    return this._cameraViewBehaviour;
  }

  get teamSize(): number {
    return this._teamSize;
  }

  get blueZoneCustomOptions(): string {
    return this._blueZoneCustomOptions;
  }
}

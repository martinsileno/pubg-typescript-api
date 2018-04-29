import { IGameState } from '../../..';

import { Location } from './location';


export class GameState {
  private _elapsedTime: number;
  private _numAliveTeams: number;
  private _numJoinPlayers: number;
  private _numAlivePlayers: number;
  private _safetyZonePosition: Location;
  private _safetyZoneRadius: number;
  private _poisonGasWarningPosition: Location;
  private _poisonGasWarningRadius: number;
  private _redZonePosition: Location;
  private _redZoneRadius: number;

  constructor(gs: IGameState) {
    this._elapsedTime = gs.elapsedTime;
    this._numAliveTeams = gs.numAliveTeams;
    this._numJoinPlayers = gs.numJoinPlayers;
    this._numAlivePlayers = gs.numAlivePlayers;
    this._safetyZonePosition = new Location(gs.safetyZonePosition);
    this._safetyZoneRadius = gs.safetyZoneRadius;
    this._poisonGasWarningPosition = new Location(gs.poisonGasWarningPosition);
    this._poisonGasWarningRadius = gs.poisonGasWarningRadius;
    this._redZonePosition = new Location(gs.redZonePosition);
    this._redZoneRadius = gs.redZoneRadius;
  }

  get elapsedTime(): number {
    return this._elapsedTime;
  }

  get numAliveTeams(): number {
    return this._numAliveTeams;
  }

  get numJoinPlayers(): number {
    return this._numJoinPlayers;
  }

  get numAlivePlayers(): number {
    return this._numAlivePlayers;
  }

  get safetyZonePosition(): Location {
    return this._safetyZonePosition;
  }

  get safetyZoneRadius(): number {
    return this._safetyZoneRadius;
  }

  get poisonGasWarningPosition(): Location {
    return this._poisonGasWarningPosition;
  }

  get poisonGasWarningRadius(): number {
    return this._poisonGasWarningRadius;
  }

  get redZonePosition(): Location {
    return this._redZonePosition;
  }

  get redZoneRadius(): number {
    return this._redZoneRadius;
  }
}

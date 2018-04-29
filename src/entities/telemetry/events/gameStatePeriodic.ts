import { ILogGameStatePeriodic } from '../../..';

import { GameState } from '../objects/gameState';

import { TelemetryEvent } from './telemetryEvent';


export class GameStatePeriodic extends TelemetryEvent {
  private _gameState: GameState;

  constructor(event: ILogGameStatePeriodic) {
    super(event);
    this._gameState = new GameState(event.gameState);
  }

  get gameState(): GameState {
    return this._gameState;
  }
}

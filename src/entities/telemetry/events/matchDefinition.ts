import { ILogMatchDefinition } from '../../..';

import { TelemetryEvent } from './telemetryEvent';


export class MatchDefinition extends TelemetryEvent {
  private _matchId: string;
  private _pingQuality: string;

  constructor(event: ILogMatchDefinition) {
    super(event);
    this._matchId = event.MatchId;
    this._pingQuality = event.PingQuality;
  }

  get matchId(): string {
    return this._matchId;
  }

  get pingQuality(): string {
    return this._pingQuality;
  }
}

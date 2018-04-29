import { ILogPlayerLogout } from '../../..';

import { TelemetryEvent } from './telemetryEvent';


export class PlayerLogout extends TelemetryEvent {
  private _accountId: string;

  constructor(event: ILogPlayerLogout) {
    super(event);
    this._accountId = event.accountId;
  }

  get accountId(): string {
    return this._accountId;
  }
}

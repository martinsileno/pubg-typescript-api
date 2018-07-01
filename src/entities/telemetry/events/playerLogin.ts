import { ILogPlayerLogin } from '../../..';

import { TelemetryEvent } from './telemetryEvent';


export class PlayerLogin extends TelemetryEvent {
  private _accountId: string;

  constructor(event: ILogPlayerLogin) {
    super(event);
    this._accountId = event.accountId;
  }

  get accountId(): string {
    return this._accountId;
  }
}

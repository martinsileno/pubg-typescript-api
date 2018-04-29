import { ILogPlayerLogin } from '../../..';

import { TelemetryEvent } from './telemetryEvent';


export class PlayerLogin extends TelemetryEvent {
  private _result: boolean;
  private _errorMessage: string;
  private _accountId: string;

  constructor(event: ILogPlayerLogin) {
    super(event);
    this._result = event.result;
    this._errorMessage = event.errorMessage;
    this._accountId = event.accountId;
  }

  get result(): boolean {
    return this._result;
  }

  get errorMessage(): string {
    return this._errorMessage;
  }

  get accountId(): string {
    return this._accountId;
  }
}

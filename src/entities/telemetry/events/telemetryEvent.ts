import { IBaseTelemetryEvent } from '../../..';


export abstract class TelemetryEvent {
  private _D: Date;

  protected constructor(event: IBaseTelemetryEvent) {
    this._D = new Date(event._D);
  }

  get dateTime(): Date {
    return this._D;
  }
}

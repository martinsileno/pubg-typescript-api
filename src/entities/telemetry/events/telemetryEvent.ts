import { IBaseTelemetryEvent } from '../../..';


export abstract class TelemetryEvent {
  private _D: Date;
  private _V: number;

  protected constructor(event: IBaseTelemetryEvent) {
    this._D = new Date(event._D);
    this._V = event._V;
  }

  get dateTime(): Date {
    return this._D;
  }

  get version(): number {
    return this._V;
  }
}

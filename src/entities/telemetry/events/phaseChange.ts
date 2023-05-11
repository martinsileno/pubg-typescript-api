import { ILogPhaseChange } from "../../..";

import { TelemetryEvent } from "./telemetryEvent";

export class PhaseChange extends TelemetryEvent {
  private _phase: number;
  private _elapsedTime: number;

  constructor(event: ILogPhaseChange) {
    super(event);
    this._phase = event.phase;
    this._elapsedTime = event.elapsedTime;
  }

  get phase(): number {
    return this._elapsedTime;
  }

  get elapsedTime(): number {
    return this._elapsedTime;
  }
}

import { IStats } from "../../..";

export class Stats {
  private _killCount: number;
  private _distanceOnFoot: number;
  private _distanceOnSwim: number;
  private _distanceOnVehicle: number;
  private _distanceOnParachute: number;
  private _distanceOnFreefall: number;

  constructor(stats: IStats) {
    this._killCount = stats.killCount;
    this._distanceOnFoot = stats.distanceOnFoot;
    this._distanceOnSwim = stats.distanceOnSwim;
    this._distanceOnVehicle = stats.distanceOnVehicle;
    this._distanceOnParachute = stats.distanceOnParachute;
    this._distanceOnFreefall = stats.distanceOnFreefall;
  }

  get killCount() {
    return this._killCount;
  }

  get distanceOnFoot() {
    return this._distanceOnFoot;
  }

  get distanceOnSwim() {
    return this._distanceOnSwim;
  }

  get distanceOnVehicle() {
    return this._distanceOnVehicle;
  }

  get distanceOnParachute() {
    return this._distanceOnParachute;
  }

  get distanceOnFreefall() {
    return this._distanceOnFreefall;
  }
}

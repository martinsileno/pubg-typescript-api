import { IVehicle } from '../../..';


export class Vehicle {
  private _vehicleType: string;
  private _vehicleId: string;
  private _healthPercent: number;
  private _feulPercent: number;  // Typo in api

  constructor(vehicle: IVehicle) {
    this._vehicleType = vehicle.vehicleType;
    this._vehicleId = vehicle.vehicleId;
    this._healthPercent = vehicle.healthPercent;
    this._feulPercent = vehicle.feulPercent;
  }

  get vehicleType(): string {
    return this._vehicleType;
  }

  get vehicleId(): string {
    return this._vehicleId;
  }

  get healthPercent(): number {
    return this._healthPercent;
  }

  get feulPercent(): number {
    return this._feulPercent;
  }
}

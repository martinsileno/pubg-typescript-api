import { ILogVehicleLeave } from '../../..';

import { Character } from '../objects/character';
import { Vehicle } from '../objects/vehicle';

import { TelemetryEvent } from './telemetryEvent';


export class VehicleLeave extends TelemetryEvent {
  private _character: Character;
  private _vehicle: Vehicle;
  private _rideDistance: number;
  private _seatIndex: number;

  constructor(event: ILogVehicleLeave) {
    super(event);
    this._character = new Character(event.character);
    this._vehicle = new Vehicle(event.vehicle);
    this._rideDistance = event.rideDistance;
    this._seatIndex = event.seatIndex;
  }

  get character(): Character {
    return this._character;
  }

  get vehicle(): Vehicle {
    return this._vehicle;
  }

  get rideDistance(): number {
    return this._rideDistance;
  }

  get seatIndex(): number {
    return this._seatIndex;
  }
}

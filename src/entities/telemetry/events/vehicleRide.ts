import { ILogVehicleRide } from '../../..';

import { Character } from '../objects/character';
import { Vehicle } from '../objects/vehicle';

import { TelemetryEvent } from './telemetryEvent';


export class VehicleRide extends TelemetryEvent {
  private _character: Character;
  private _vehicle: Vehicle;

  constructor(event: ILogVehicleRide) {
    super(event);
    this._character = new Character(event.character);
    this._vehicle = new Vehicle(event.vehicle);
  }

  get character(): Character {
    return this._character;
  }

  get vehicle(): Vehicle {
    return this._vehicle;
  }
}

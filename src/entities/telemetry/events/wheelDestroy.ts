import { ILogWheelDestroy } from '../../..';

import { Character } from '../objects/character';
import { Vehicle } from '../objects/vehicle';

import { TelemetryEvent } from './telemetryEvent';


export class WheelDestroy extends TelemetryEvent {
  private _attackId: number;
  private _attacker: Character;
  private _vehicle: Vehicle;
  private _damageTypeCategory: string;
  private _damageCauserName: string;

  constructor(event: ILogWheelDestroy) {
    super(event);
    this._attackId = event.attackId;
    this._attacker = new Character(event.attacker);
    this._vehicle = new Vehicle(event.vehicle);
    this._damageTypeCategory = event.damageTypeCategory;
    this._damageCauserName = event.damageCauserName;
  }

  get attackId(): number {
    return this._attackId;
  }

  get attacker(): Character {
    return this._attacker;
  }

  get vehicle(): Vehicle {
    return this._vehicle;
  }

  get damageTypeCategory(): string {
    return this._damageTypeCategory;
  }

  get damageCauserName(): string {
    return this._damageCauserName;
  }
}

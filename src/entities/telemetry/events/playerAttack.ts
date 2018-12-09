import { ILogPlayerAttack } from '../../..';

import { Character } from '../objects/character';
import { Item } from '../objects/item';
import { Vehicle } from '../objects/vehicle';

import { TelemetryEvent } from './telemetryEvent';


export class PlayerAttack extends TelemetryEvent {
  private _attackId: number;
  private _attacker: Character;
  private _attackType: string;
  private _fireWeaponStackCount: number;
  private _weapon: Item;
  private _vehicle?: Vehicle;

  constructor(event: ILogPlayerAttack) {
    super(event);
    this._attackId = event.attackId;
    this._attacker = new Character(event.attacker);
    this._attackType = event.attackType;
    this._fireWeaponStackCount = event.fireWeaponStackCount;
    this._weapon = new Item(event.weapon);
    if (event.vehicle) {
      this._vehicle = new Vehicle(event.vehicle);
    }
  }

  get attackId(): number {
    return this._attackId;
  }

  get attacker(): Character {
    return this._attacker;
  }

  get attackType(): string {
    return this._attackType;
  }

  get fireWeaponStackCount(): number {
    return this._fireWeaponStackCount;
  }

  get weapon(): Item {
    return this._weapon;
  }

  get vehicle(): Vehicle | undefined {
    return this._vehicle;
  }
}

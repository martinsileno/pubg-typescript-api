import { ILogPlayerMakeGroggy } from '../../..';

import { Character } from '../objects/character';

import { TelemetryEvent } from './telemetryEvent';


export class PlayerMakeGroggy extends TelemetryEvent {
  private _attackId: number;
  private _attacker: Character;
  private _victim: Character;
  private _damageReason: string;
  private _damageTypeCategory: string;
  private _damageCauserName: string;
  private _distance: number;
  private _isAttackerInVehicle: boolean;
  private _dBNOId: number;

  constructor(event: ILogPlayerMakeGroggy) {
    super(event);
    this._attackId = event.attackId;
    this._attacker = new Character(event.attacker);
    this._victim = new Character(event.victim);
    this._damageReason = event.damageReason;
    this._damageTypeCategory = event.damageTypeCategory;
    this._damageCauserName = event.damageCauserName;
    this._distance = event.distance;
    this._isAttackerInVehicle = event.isAttackerInVehicle;
    this._dBNOId = event.dBNOId;
  }

  get attackId(): number {
    return this._attackId;
  }

  get attacker(): Character {
    return this._attacker;
  }

  get victim(): Character {
    return this._victim;
  }

  get damageReason(): string {
    return this._damageReason;
  }

  get damageTypeCategory(): string {
    return this._damageTypeCategory;
  }

  get damageCauserName(): string {
    return this._damageCauserName;
  }

  get distance(): number {
    return this._distance;
  }

  get isAttackerInVehicle(): boolean {
    return this._isAttackerInVehicle;
  }

  get dBNOId(): number {
    return this._dBNOId;
  }
}

import { ILogPlayerKill } from '../../..';

import { Character } from '../objects/character';

import { TelemetryEvent } from './telemetryEvent';


export class PlayerKill extends TelemetryEvent {
  private _attackId: number;
  private _killer: Character;
  private _victim: Character;
  private _damageReason: string;
  private _damageTypeCategory: string;
  private _damageCauserName: string;
  private _distance: number;

  constructor(event: ILogPlayerKill) {
    super(event);
    this._attackId = event.attackId;
    this._killer = new Character(event.killer);
    this._victim = new Character(event.victim);
    this._damageReason = event.damageReason;
    this._damageTypeCategory = event.damageTypeCategory;
    this._damageCauserName = event.damageCauserName;
    this._distance = event.distance;
  }

  get attackId(): number {
    return this._attackId;
  }

  get killer(): Character {
    return this._killer;
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
}

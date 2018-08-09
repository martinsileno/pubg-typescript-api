import { ILogPlayerTakeDamage } from '../../..';

import { Character } from '../objects/character';

import { TelemetryEvent } from './telemetryEvent';


export class PlayerTakeDamage extends TelemetryEvent {
  private _attackId: number;
  private _attacker?: Character;
  private _victim: Character;
  private _damageTypeCategory: string;
  private _damageCauserName: string;
  private _damageReason: string;
  private _damage: number;

  constructor(event: ILogPlayerTakeDamage) {
    super(event);
    this._attackId = event.attackId;
    this._victim = new Character(event.victim);
    this._damageTypeCategory = event.damageTypeCategory;
    this._damageCauserName = event.damageCauserName;
    this._damageReason = event.damageReason;
    this._damage = event.damage;
    if (event.attacker) {
      this._attacker = new Character(event.attacker);
    }
  }

  get attackId(): number {
    return this._attackId;
  }

  get attacker(): Character | undefined {
    return this._attacker;
  }

  get victim(): Character {
    return this._victim;
  }

  get damageTypeCategory(): string {
    return this._damageTypeCategory;
  }

  get damageCauserName(): string {
    return this._damageCauserName;
  }

  get damageReason(): string {
    return this._damageReason;
  }

  get damage(): number {
    return this._damage;
  }
}

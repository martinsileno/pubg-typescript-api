import { ILogArmorDestroy } from '../../..';

import { Character } from '../objects/character';
import { Item } from '../objects/item';

import { TelemetryEvent } from './telemetryEvent';


export class ArmorDestroy extends TelemetryEvent {
  private _attackId: number;
  private _attacker: Character;
  private _victim: Character;
  private _damageTypeCategory: string;
  private _damageReason: string;
  private _damageCauserName: string;
  private _item: Item;
  private _distance: number;

  constructor(event: ILogArmorDestroy) {
    super(event);
    this._attackId = event.attackId;
    this._attacker = new Character(event.attacker);
    this._victim = new Character(event.victim);
    this._damageTypeCategory = event.damageTypeCategory;
    this._damageReason = event.damageReason;
    this._damageCauserName = event.damageCauserName;
    this._item = new Item(event.item);
    this._distance = event.distance;
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

  get damageTypeCategory(): string {
    return this._damageTypeCategory;
  }

  get damageReason(): string {
    return this._damageReason;
  }

  get damageCauserName(): string {
    return this._damageCauserName;
  }

  get item(): Item {
    return this._item;
  }

  get distance(): number {
    return this._distance;
  }
}

import { ILogItemEquip } from '../../..';

import { Character } from '../objects/character';
import { Item } from '../objects/item';

import { TelemetryEvent } from './telemetryEvent';


export class ItemEquip extends TelemetryEvent {
  private _character: Character;
  private _item: Item;

  constructor(event: ILogItemEquip) {
    super(event);
    this._character = new Character(event.character);
    this._item = new Item(event.item);
  }

  get character(): Character {
    return this._character;
  }

  get item(): Item {
    return this._item;
  }
}

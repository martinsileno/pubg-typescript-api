import { ILogItemAttach } from '../../..';

import { Character } from '../objects/character';
import { Item } from '../objects/item';

import { TelemetryEvent } from './telemetryEvent';


export class ItemAttach extends TelemetryEvent {
  private _character: Character;
  private _parentItem: Item;
  private _childItem: Item;

  constructor(event: ILogItemAttach) {
    super(event);
    this._character = new Character(event.character);
    this._parentItem = new Item(event.parentItem);
    this._childItem = new Item(event.childItem);
  }

  get character(): Character {
    return this._character;
  }

  get parentItem(): Item {
    return this._parentItem;
  }

  get childItem(): Item {
    return this._childItem;
  }
}

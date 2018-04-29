import { IItemPackage } from '../../..';

import { Item } from './item';
import { Location } from './location';


export class ItemPackage {
  private _itemPackageId: string;
  private _location: Location;
  private _items: Item[] = [];

  constructor(itemPackage: IItemPackage) {
    this._itemPackageId = itemPackage.itemPackageId;
    this._location = new Location(itemPackage.location);
    this._items = itemPackage.items.map(item => new Item(item));
  }

  get itemPackageId() {
    return this._itemPackageId;
  }

  get location() {
    return this._location;
  }

  get items() {
    return this._items;
  }
}

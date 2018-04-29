import { IItem } from '../../..';


export class Item {
  private _itemId: string;
  private _stackCount: number;
  private _category: string;
  private _subCategory: string;
  private _attachedItems: string[];  // TODO: use list of enum

  constructor(item: IItem) {
    this._itemId = item.itemId;
    this._stackCount = item.stackCount;
    this._category = item.category;
    this._subCategory = item.subCategory;
    this._attachedItems = item.attachedItems;
  }

  get itemId() {
    return this._itemId;
  }

  get stackCount() {
    return this._stackCount;
  }

  get category() {
    return this._category;
  }

  get subCategory() {
    return this._subCategory;
  }

  get attachedItems() {
    return this._attachedItems;
  }
}

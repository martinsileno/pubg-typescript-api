import { ILogCarePackageSpawn } from '../../..';

import { ItemPackage } from '../objects/itemPackage';

import { TelemetryEvent } from './telemetryEvent';


export class CarePackageSpawn extends TelemetryEvent {
  private _itemPackage: ItemPackage;

  constructor(event: ILogCarePackageSpawn) {
    super(event);
    this._itemPackage = new ItemPackage(event.itemPackage);
  }

  get itemPackage() {
    return this._itemPackage;
  }
}

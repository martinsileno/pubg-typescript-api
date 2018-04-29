import { ILogCarePackageLand } from '../../..';

import { ItemPackage } from '../objects/itemPackage';

import { TelemetryEvent } from './telemetryEvent';


export class CarePackageLand extends TelemetryEvent {
  private _itemPackage: ItemPackage;

  constructor(event: ILogCarePackageLand) {
    super(event);
    this._itemPackage = new ItemPackage(event.itemPackage);
  }

  get itemPackage() {
    return this._itemPackage;
  }
}

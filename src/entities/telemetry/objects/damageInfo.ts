import { IDamageInfo } from "../../..";

export class DamageInfo {
  private _damageReason: string;
  private _damageTypeCategory: string;
  private _damageCauserName: string;
  private _additionalInfo: string[];
  private _distance: number;
  private _isThroughPenetrableWall: boolean;

  constructor(info: IDamageInfo) {
    this._damageReason = info.damageReason;
    this._damageTypeCategory = info.damageTypeCategory;
    this._damageCauserName = info.damageCauserName;
    this._additionalInfo = info.additionalInfo;
    this._distance = info.distance;
    this._isThroughPenetrableWall = info.isThroughPenetrableWall;
  }

  get damageReason() {
    return this._damageReason;
  }

  get damageTypeCategory() {
    return this._damageTypeCategory;
  }

  get damageCauserName() {
    return this._damageCauserName;
  }

  get additionalInfo() {
    return this._additionalInfo;
  }

  get distance() {
    return this._distance;
  }

  get isThroughPenetrableWall() {
    return this._isThroughPenetrableWall;
  }
}

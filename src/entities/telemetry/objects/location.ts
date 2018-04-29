import { ILocation } from '../../..';


export class Location {
  private _x: number;
  private _y: number;
  private _z: number;

  constructor(loc: ILocation) {
    this._x = loc.x;
    this._y = loc.y;
    this._z = loc.z;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get z() {
    return this._z;
  }
}

import { IAsset } from '..';

export class Asset {
  private _id: string;
  private _url: string;
  private _dateCreated: Date;

  constructor(asset: IAsset) {
    this._id = asset.id;
    this._url = asset.attributes.URL;
    this._dateCreated = new Date(asset.attributes.createdAt);
  }

  /**
   * Asset ID
   */
  get id() {
    return this._id;
  }

  /**
   * Link to the telemetry.json file
   */
  get url() {
    return this._url;
  }

  /**
   * Time of telemetry creation
   */
  get dateCreated() {
    return this._dateCreated;
  }
}

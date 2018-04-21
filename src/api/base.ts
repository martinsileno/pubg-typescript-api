import axios, { AxiosInstance } from 'axios';

import { PlatformRegion } from '../shared/constants';


export abstract class PubgAPI {
  protected _axios: AxiosInstance;
  private _apiKey: string;
  private _platformRegion: PlatformRegion;

  constructor(apiKey: string, platformRegion: PlatformRegion) {
    this._apiKey = apiKey;
    this._platformRegion = platformRegion;
    this._axios = axios.create({
      baseURL: `https://api.playbattlegrounds.com/shards/${this._platformRegion}/`,
      headers: {
        'Authorization': `Bearer ${this._apiKey}`,
        'Accept': 'application/json',
      },
    });
  }
}

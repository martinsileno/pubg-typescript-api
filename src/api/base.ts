import axios, { AxiosInstance } from 'axios';

import { PlatformRegion } from '../shared/constants';


/**
 * Instances of this class will be used to make authenticated requests to the PUBG API.
 *
 * Instantiate this by providing your API key and the PlatformRegion.
 */
export class PubgAPI {
  private _axios: AxiosInstance;
  private _apiKey: string;
  private _platformRegion: PlatformRegion;

  constructor(apiKey: string, platformRegion: PlatformRegion, useGzip = true) {
    this._apiKey = apiKey;
    this._platformRegion = platformRegion;
    const headers: {[p: string]: string} = {
      'Authorization': `Bearer ${this._apiKey}`,
      'Accept': 'application/json',
    };
    if (useGzip) {
      headers['Accept-Encoding'] = 'gzip';
    }
    this._axios = axios.create({
      baseURL: `https://api.playbattlegrounds.com/shards/${this._platformRegion}/`,
      headers: headers,
    });
  }

  /**
   * The AxiosInstance used to make authenticated API requests.
   */
  get axios() {
    return this._axios;
  }

  /**
   * Platform and Region associated with this API instance.
   */
  get platformRegion() {
    return this._platformRegion;
  }
}


export abstract class PubgAPIEndpoint {
  private _api: PubgAPI;
  constructor(api: PubgAPI) {
    this._api = api;
  }

  get api() {
    return this._api;
  }
}

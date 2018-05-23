import axios, { AxiosInstance } from 'axios';

import { PlatformRegion } from '../shared/constants';


/**
 * Instances of this class will be used to make authenticated requests to the PUBG API.
 *
 * Instantiate this by providing your API key and the PlatformRegion.
 *
 * It accepts an optional `useGzip` option which, if set to true, requests that the server
 * compress its response using gzip. This can improve performance for large responses such as
 * matches.
 * The `useGzip` option must NOT be set to true if using a browser to send requests as it handles
 * the `Accept-Encoding` header by itself.
 */
export class PubgAPI {
  private _axios: AxiosInstance;
  private _apiKey: string;
  private _platformRegion: PlatformRegion;

  constructor(apiKey: string, platformRegion: PlatformRegion, useGzip = false) {
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

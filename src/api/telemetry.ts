import { AxiosPromise } from 'axios';

import { Asset, ITelemetry } from '..';

import { PubgAPIEndpoint } from './base';


export class TelemetryPubgAPI extends PubgAPIEndpoint {

  get(arg: Asset | string): AxiosPromise<ITelemetry> {
    let url: string;
    if (typeof arg === 'string') {
      url = arg;
    } else {
      url = arg.url;
    }

    return this.api.axios.get(url);
  }

}

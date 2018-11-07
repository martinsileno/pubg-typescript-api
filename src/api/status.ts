import { AxiosPromise } from 'axios';

import { IStatus } from '..';

import { PubgAPIEndpoint } from './base';


export class StatusPubgAPI extends PubgAPIEndpoint {

  get(): AxiosPromise<IStatus> {
    return this.api.axios.get(`/status`);
  }

}

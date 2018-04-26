import { AxiosPromise } from 'axios';

import { ISample } from '..';

import { PubgAPIEndpoint } from './base';


export class SamplesPubgAPI extends PubgAPIEndpoint {

  get(dateStart?: Date): AxiosPromise<ISample> {
    if (dateStart) {
      return this.api.axios.get(
        '/samples', {params: {'filter[createdAt-start]': dateStart.toISOString()}});
    } else {
      return this.api.axios.get('/samples');
    }
  }

}

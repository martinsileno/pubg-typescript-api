import { AxiosPromise } from 'axios';

import { ISeasonList } from '..';

import { PubgAPIEndpoint } from './base';


export class SeasonsPubgAPI extends PubgAPIEndpoint {
  list(): AxiosPromise<ISeasonList> {
    return this.api.axios.get(`/seasons`);
  }
}

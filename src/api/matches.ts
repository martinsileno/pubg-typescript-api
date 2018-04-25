import { AxiosPromise } from 'axios';

import { IMatch } from '..';

import { PubgAPIEndpoint } from './base';


export class MatchesPubgAPI extends PubgAPIEndpoint {

  get(id: string): AxiosPromise<IMatch> {
    return this.api.axios.get(`/matches/${id}`);
  }

}

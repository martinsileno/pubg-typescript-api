import { AxiosPromise } from 'axios';

import { PubgAPIEndpoint } from './base';
import { IMatch } from '../interfaces';


export class MatchesPubgAPI extends PubgAPIEndpoint {

  get(id: string): AxiosPromise<IMatch> {
    return this.api.axios.get(`/matches/${id}`);
  }

}

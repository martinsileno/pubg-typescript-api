import { AxiosPromise } from 'axios';

import { PubgAPI } from './base';
import { Match } from '../interfaces';


export class MatchesPubgAPI extends PubgAPI {

  get(id: string): AxiosPromise<Match> {
    return this._axios.get(`/matches/${id}`);
  }

}

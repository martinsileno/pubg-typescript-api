import { AxiosPromise } from 'axios';

import { PubgAPI } from './base';
import { IMatch } from '../interfaces';


export class MatchesPubgAPI extends PubgAPI {

  get(id: string): AxiosPromise<IMatch> {
    return this._axios.get(`/matches/${id}`);
  }

}

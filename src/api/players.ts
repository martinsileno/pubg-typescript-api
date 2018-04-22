import { AxiosPromise } from 'axios';

import { PubgAPI } from './base';
import { IPlayer, IPlayerList } from '../interfaces';


export class PlayersPubgAPI extends PubgAPI {

  get(id: string): AxiosPromise<IPlayer> {
    return this._axios.get(`/players/${id}`);
  }

  listByID(playerIDs: string[]): AxiosPromise<IPlayerList> {
    return this._axios.get('/players', {params: {'filter[playerIds]': playerIDs.join(',')}});
  }

  listByName(playerNames: string[]): AxiosPromise<IPlayerList> {
    return this._axios.get('/players', {params: {'filter[playerNames]': playerNames.join(',')}});
  }

}

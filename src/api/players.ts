import { AxiosPromise } from 'axios';

import { PubgAPI } from './base';
import { Player, PlayerList } from '../interfaces';


export class PlayersPubgAPI extends PubgAPI {

  get(id: string): AxiosPromise<Player> {
    return this._axios.get(`/players/${id}`);
  }

  listByID(playerIDs: string[]): AxiosPromise<PlayerList> {
    return this._axios.get('/players', {params: {'filter[playerIds]': playerIDs.join(',')}});
  }

  listByName(playerNames: string[]): AxiosPromise<PlayerList> {
    return this._axios.get('/players', {params: {'filter[playerNames]': playerNames.join(',')}});
  }

}

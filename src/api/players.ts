import { AxiosPromise } from 'axios';

import { PubgAPIEndpoint } from './base';
import { IPlayer, IPlayerList } from '../interfaces';


export class PlayersPubgAPI extends PubgAPIEndpoint {

  get(id: string): AxiosPromise<IPlayer> {
    return this.api.axios.get(`/players/${id}`);
  }

  listByID(playerIDs: string[]): AxiosPromise<IPlayerList> {
    return this.api.axios.get('/players', {params: {'filter[playerIds]': playerIDs.join(',')}});
  }

  listByName(playerNames: string[]): AxiosPromise<IPlayerList> {
    return this.api.axios.get('/players', {params: {'filter[playerNames]': playerNames.join(',')}});
  }

}

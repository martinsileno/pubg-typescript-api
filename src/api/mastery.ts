import { AxiosPromise } from "axios";

import { IWeaponMastery, ISurvivalMastery } from "..";

import { PubgAPIEndpoint } from "./base";

export class MasteryPubgAPI extends PubgAPIEndpoint {
  getWeaponMastery(id: string): AxiosPromise<IWeaponMastery> {
    return this.api.axios.get(`/players/${id}/weapon_mastery`);
  }

  getSurvivalMastery(id: string): AxiosPromise<ISurvivalMastery> {
    return this.api.axios.get(`/players/${id}/survival_mastery`);
  }
}

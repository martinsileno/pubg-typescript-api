import { IWeaponMastery, ISurvivalMastery, MasteryPubgAPI, PubgAPI } from "..";

type MasteryInfo = {
  XPTotal: number;
  TierCurrent: number;
  LevelCurrent: number;
  OfficialStatsTotal: {
    DamagePlayer: number;
    Defeats: number;
  };
};

export class WeaponMastery {
  private _latestMatchId: string;
  private _platform: string;
  private _masteries: MasteryInfo[] = [];

  constructor(data: IWeaponMastery) {
    this._latestMatchId = data.attributes.latestMatchId;
    this._platform = data.attributes.platform;

    for (const mastery of data.attributes.weaponSummaries) {
      mastery.OfficialStatsTotal.Defeats;
      this._masteries.push({
        XPTotal: mastery.XPTotal,
        TierCurrent: mastery.TierCurrent,
        LevelCurrent: mastery.LevelCurrent,
        OfficialStatsTotal: {
          DamagePlayer: mastery.OfficialStatsTotal.DamagePlayer,
          Defeats: mastery.OfficialStatsTotal.Defeats,
        },
      });
    }
  }

  get Masteries() {
    return this._masteries;
  }

  get Platform() {
    return this._platform;
  }
}

export class Mastery {
  static async getWeaponMastery(api: PubgAPI, playerId: string) {
    const masteryApi = new MasteryPubgAPI(api);
    const masteryData = await masteryApi.getWeaponMastery(playerId);
    return Mastery.weaponFromDetail(masteryData.data);
  }

  /**
   * Create and return a Player instance from an API player detail reply.
   * @param detail Player resource as returned from PUBG API
   */
  static weaponFromDetail(detail: IWeaponMastery): WeaponMastery {
    return new WeaponMastery(detail);
  }
}

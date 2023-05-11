import { IAPIObject, ISimpleAPIObject } from "./common";

export interface IWeaponMastery extends IAPIObject<IWeaponMasteryAttributes> {
  links: {
    self: string;
  };
}

export interface IWeaponMasteryAttributes {
  platform: string;
  weaponSummaries: IWeaponSummary[];
  latestMatchId: string;
}

export interface IWeaponSummary {
  XPTotal: number;
  LevelCurrent: number;
  TierCurrent: number;
  StatsTotal: IStatsTotal;
  OfficialStatsTotal: ISpecificStatsTotal;
  CompetitiveStatsTotal: ISpecificStatsTotal;
}

export interface IStatsTotal {
  MostDefeatsInAGame: number;
  Defeats: number;
  MostDamagePlayerInAGame: number;
  DamagePlayer: number;
  MostHeadShotsInAGame: number;
  HeadShots: number;
  LongestDefeat: number;
  LongRangeDefeats: number;
  Kills: number;
  MostKillsInAGame: number;
  Groggies: number;
  MostGroggiesInAGame: number;
}

export interface ISpecificStatsTotal {
  MostDefeatsInAGame: number;
  Defeats: number;
  DamagePlayer: number;
  HeadShots: number;
  Kills: number;
  MostKillsInAGame: number;
  Groggies: number;
  LongestKill: number;
}

export interface ISurvivalMastery
  extends IAPIObject<ISurvivalMasteryAttributes> {
  links: {
    self: string;
  };
}

export interface ISurvivalMasteryAttributes {
  xp: number;
  level: number;
  latestMatchesPlayed: number;
  stats: ISurvivalMasteryStats[];
}

export interface ISurvivalMasteryStats {
  statid: string;
  total: number;
  average: number;
  careerBest: number;
  lastMatchValue: number;
}

import { IAPIObject, ISimpleAPIObject } from './common';


export interface IPlayerAttributes {
  name: string;
  shardId: string;
  stats: null;
  createdAt: string;
  patchVersion: string;
  titleId: string;
  updatedAt: string;
}

export interface IPlayerRelationships {
  assets: {};
  matches: {
    data: ISimpleAPIObject[];
  };
}

export interface IPlayerObject extends IAPIObject<IPlayerAttributes, IPlayerRelationships> {
  links: {
    schema: string;
    self: string;
  };
}

export interface IGameModeStats {
  assists: number;
  boosts: number;
  dBNOs: number;
  dailyKills: number;
  damageDealt: number;
  days: number;
  headshotKills: number;
  heals: number;
  killPoints: number;  // not in docs?
  kills: number;
  longestKill: number;
  longestTimeSurvived: number;
  losses: number;
  maxKillStreaks: number;
  mostSurvivalTime: number;
  revives: number;
  rideDistance: number;
  roadKills: number;
  roundMostKills: number;
  roundsPlayed: number;
  suicides: number;
  teamKills: number;
  timeSurvived: number;
  top10s: number;
  vehicleDestroys: number;
  walkDistance: number;
  weaponsAcquired: number;  // weaponAcquired in docs?
  weeklyKills: number;
  winPoints: number;
  // winRatio: number;  // doesn't exist?
  wins: number;
}

export interface IPlayerSeason {
  data: {
    type: 'playerSeason';
    attributes: {
      gameModeStats: {
        duo: IGameModeStats;
        'duo-fpp': IGameModeStats;
        solo: IGameModeStats;
        'solo-fpp': IGameModeStats;
        squad: IGameModeStats;
        'squad-fpp': IGameModeStats;
      }
    };
    relationships: {
      // these are Match IDs
      matchesDuo: {
        data: {type: 'match'; id: string}[];
      };
      matchesDuoFPP: {
        data: {type: 'match'; id: string}[];
      };
      matchesSolo: {
        data: {type: 'match'; id: string}[];
      };
      matchesSoloFPP: {
        data: {type: 'match'; id: string}[];
      };
      matchesSquad: {
        data: {type: 'match'; id: string}[];
      };
      matchesSquadFPP: {
        data: {type: 'match'; id: string}[];
      };
      player: {
        data: {
          type: 'player';
          id: string;
        };
      };
      season: {
        data: {
          type: 'season';
          id: string;
        };
      };
    };
  };
  links: {
    self: string;
  };
  meta: {};
}

/**
 * Player objects contain aggregated lifetime information about each player.
 */
export interface IPlayer {
  data: IPlayerObject;
  links: {
    self: string;
  };
  meta: {};
}

/**
 * Player objects contain aggregated lifetime information about each player.
 */
export interface IPlayerList {
  data: IPlayerObject[];
  links: {
    self: string;
  };
  meta: {};
}

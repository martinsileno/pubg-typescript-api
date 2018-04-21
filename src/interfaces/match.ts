import { DeathType, MapName, GameMode } from '../shared/constants';
import { APIObject, SimpleAPIObject } from './common';


export interface RosterAttributes {
  shardId: string;
  stats: {
    rank: number;
    teamId: number;
  };
  won: string;
}

export interface RosterRelationships {
  participants: {
    data: SimpleAPIObject[];
  };
  team: {
    data: null;
  };
}

/**
 * Rosters track the scores of each opposing group of participants. Rosters can have one or many 
 * participants depending on the game mode. Roster objects are only meaningful within the context 
 * of a match and are not exposed as a standalone resource.
 */
export interface Roster extends APIObject<RosterAttributes, RosterRelationships> { }


export interface ParticipantAttributes {
  actor: string;
  shardId: string;
  stats: {
    DBNOs: number;
    assists: number;
    boosts: number;
    damageDealt: number;
    deathType: DeathType;
    headshotKills: number;
    heals: number;
    killPlace: number;
    killPoints: number;
    killPointsDelta: number;
    killStreaks: number;
    kills: number;
    lastKillPoints: number;
    lastWinPoints: number;
    longestKill: number;
    mostDamage: number;
    name: string;
    playerId: string;
    revives: number;
    rideDistance: number;
    roadKills: number;
    teamKills: number;
    timeSurvived: number;
    vehicleDestroys: number;
    walkDistance: number;
    weaponsAcquired: number;
    winPlace: number;
    winPoints: number;
    winPointsDelta: number;
  };
}

/**
 * Participant objects represent each player in the context of a match. 
 * Participant objects are only meaningful within the context of a match and are not exposed as a 
 * standalone resource.
 */
export interface Participant extends APIObject<ParticipantAttributes> { }


export interface AssetAttributes {
  URL: string;
  createdAt: Date;
  description: string;
  name: string;
}

/**
 * Asset objects contain a URL string that links to a telemetry.json file, which will contain 
 * an array of event objects that provide further insight into a match.
 */
export interface Asset extends APIObject<AssetAttributes> { }

/**
 * Match objects contain the results of a completed match such as the game mode played, duration, 
 * and which players participated
 */
export interface Match {
  data: {
    type: string;
    id: string;
    attributes: {
      createdAt: Date;
      duration: number;
      gameMode: GameMode;
      mapName?: MapName;  // XXX: sometimes not returned?
      patchVersion?: '';
      shardId: string;
      stats: null;
      tags: null;
      titleId: string;
    };
    relationships: {
      assets: {
        data: SimpleAPIObject[];
      };
      rosters: {
        data: SimpleAPIObject[];
      };
      rounds?: {};
      spectators?: {};
    };
    links: {
      schema: string;
      self: string;
    };
  };
  included: (Asset | Participant | Roster)[];
  links: {
    self: string;
  };
  meta: {};
}

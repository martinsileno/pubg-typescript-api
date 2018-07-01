import { IAPIObject, ISimpleAPIObject } from './common';


export interface IRosterAttributes {
  shardId: string;
  stats: {
    rank: number;
    teamId: number;
  };
  won: string;
}

export interface IRosterRelationships {
  participants: {
    data: ISimpleAPIObject[];
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
export interface IRoster extends IAPIObject<IRosterAttributes, IRosterRelationships> { }


export interface IParticipantAttributes {
  actor: string;
  shardId: string;
  stats: {
    DBNOs: number;
    assists: number;
    boosts: number;
    damageDealt: number;
    deathType: string;
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
    swimDistance: number;
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
export interface IParticipant extends IAPIObject<IParticipantAttributes> { }


export interface IAssetAttributes {
  URL: string;
  createdAt: string;
  description: string;
  name: string;
}

/**
 * Asset objects contain a URL string that links to a telemetry.json file, which will contain
 * an array of event objects that provide further insight into a match.
 */
export interface IAsset extends IAPIObject<IAssetAttributes> { }

/**
 * Match objects contain the results of a completed match such as the game mode played, duration,
 * and which players participated
 */
export interface IMatch {
  data: {
    type: string;
    id: string;
    attributes: {
      createdAt: string;
      duration: number;
      gameMode: string;
      isCustomMatch: boolean;
      mapName: string;  // XXX: sometimes not returned?
      patchVersion?: '';  // XXX: sometimes not returned?
      shardId: string;
      stats: null;
      tags: null;
      titleId: string;
    };
    relationships: {
      assets: {
        data: ISimpleAPIObject[];
      };
      rosters: {
        data: ISimpleAPIObject[];
      };
      rounds?: {};
      spectators?: {};
    };
    links: {
      schema: string;
      self: string;
    };
  };
  included: (IAsset | IParticipant | IRoster)[];
  links: {
    self: string;
  };
  meta: {};
}

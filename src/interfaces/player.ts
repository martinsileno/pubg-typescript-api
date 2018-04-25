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

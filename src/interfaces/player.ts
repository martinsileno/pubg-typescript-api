import { APIObject, SimpleAPIObject } from './common';


export interface PlayerAttributes {
  name: string;
  shardId: string;
  createdAt: Date;
  patchVersion: string;
  titleId: string;
}

export interface PlayerRelationships {
  assets: {};
  matches: {
    data: SimpleAPIObject[];
  };
}

export interface PlayerObject extends APIObject<PlayerAttributes, PlayerRelationships> {
  links: {
    schema: string;
    self: string;
  };
}

/**
 * Player objects contain aggregated lifetime information about each player.
 */
export interface Player {
  data: PlayerObject;
  links: {
    self: string;
  };
  meta: {};
}

/**
 * Player objects contain aggregated lifetime information about each player.
 */
export interface PlayerList {
  data: PlayerObject[];
  links: {
    self: string;
  };
  meta: {};
}

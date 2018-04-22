import 'mocha';
import { expect } from 'chai';
import { mock, instance } from 'ts-mockito';
import { Player } from './player';
import { IPlayer } from '../interfaces/player';

/* tslint:disable */
const API_DETAIL_RESPONSE: IPlayer = {
  "data": {
    "type": "player",
    "id": "account.a540a32a49784025939a975b45e86bfe",
    "attributes": {
      "createdAt": "2018-04-05T20:06:36Z",
      "name": "martinsileno",
      "patchVersion": "",
      "shardId": "pc-eu",
      "stats": null,
      "titleId": "bluehole-pubg",
      "updatedAt": "2018-04-05T20:06:36Z"
    },
    "relationships": {
      "assets": {
        "data": []
      },
      "matches": {
        "data": [
          {
            "type": "match",
            "id": "a6d8d8f7-a3c4-4b1c-9947-8df40c144283"
          },
          {
            "type": "match",
            "id": "65e16eb9-0c29-495f-97ad-e693faff6135"
          },
          {
            "type": "match",
            "id": "2271eef0-d6cf-44bd-a281-660857844c9e"
          }
        ]
      }
    },
    "links": {
      "schema": "",
      "self": "https://api.playbattlegrounds.com/shards/pc-eu/players/account.a540a32a49784025939a975b45e86bfe"
    }
  },
  "links": {
    "self": "https://api.playbattlegrounds.com/shards/pc-eu/players/account.a540a32a49784025939a975b45e86bfe"
  },
  "meta": {}
}
const API_LIST_RESPONSE = {
  "data": [
    {
      "type": "player",
      "id": "account.cda9cb29e8ce4146a9ad46d5a0da508b",
      "attributes": {
        "createdAt": "2018-04-05T20:06:36Z",
        "name": "zaku6652",
        "patchVersion": "",
        "shardId": "pc-eu",
        "stats": null,
        "titleId": "bluehole-pubg",
        "updatedAt": "2018-04-05T20:06:36Z"
      },
      "relationships": {
        "assets": {
          "data": []
        },
        "matches": {
          "data": [
            {
              "type": "match",
              "id": "a6d8d8f7-a3c4-4b1c-9947-8df40c144283"
            },
            {
              "type": "match",
              "id": "65e16eb9-0c29-495f-97ad-e693faff6135"
            },
            {
              "type": "match",
              "id": "2271eef0-d6cf-44bd-a281-660857844c9e"
            }
          ]
        }
      },
      "links": {
        "schema": "",
        "self": "https://api.playbattlegrounds.com/shards/pc-eu/players/account.cda9cb29e8ce4146a9ad46d5a0da508b"
      }
    },
    {
      "type": "player",
      "id": "account.a540a32a49784025939a975b45e86bfe",
      "attributes": {
        "createdAt": "2018-04-05T20:06:36Z",
        "name": "martinsileno",
        "patchVersion": "",
        "shardId": "pc-eu",
        "stats": null,
        "titleId": "bluehole-pubg",
        "updatedAt": "2018-04-05T20:06:36Z"
      },
      "relationships": {
        "assets": {
          "data": []
        },
        "matches": {
          "data": [
            {
              "type": "match",
              "id": "a6d8d8f7-a3c4-4b1c-9947-8df40c144283"
            },
            {
              "type": "match",
              "id": "65e16eb9-0c29-495f-97ad-e693faff6135"
            },
            {
              "type": "match",
              "id": "2271eef0-d6cf-44bd-a281-660857844c9e"
            }
          ]
        }
      },
      "links": {
        "schema": "",
        "self": "https://api.playbattlegrounds.com/shards/pc-eu/players/account.a540a32a49784025939a975b45e86bfe"
      }
    }
  ],
  "links": {
    "self": "https://api.playbattlegrounds.com/shards/pc-eu/players?filter[playerNames]=martinsileno,zaku6652"
  },
  "meta": {}
}
/* tslint:enable */

describe('Player entity', () => {

  it('should initialize a Player from API detail response', () => {
    const player = Player.fromDetail(API_DETAIL_RESPONSE);
    expect(player.id).to.equal('account.a540a32a49784025939a975b45e86bfe');
    expect(player.name).to.equal('martinsileno');
  });

  it('should initialize a list of Player from API list response', () => {
    const players = Player.fromList(API_LIST_RESPONSE);
    expect(players).to.be.an('Array');
    expect(players).to.have.length(2);
    const [p1, p2] = players;
    expect(p1.id).to.equal('account.cda9cb29e8ce4146a9ad46d5a0da508b');
    expect(p1.name).to.equal('zaku6652');
    expect(p2.id).to.equal('account.a540a32a49784025939a975b45e86bfe');
    expect(p2.name).to.equal('martinsileno');
  });

});

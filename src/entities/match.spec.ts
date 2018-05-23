import { expect } from 'chai';
import 'mocha';

import { DeathType, GameMode, IMatch, MapName, PlatformRegion } from '..';

import { Asset } from './asset';
import { Match } from './match';
import { Participant } from './participant';


//#region SETUP STUFF
/* tslint:disable */
const API_RESPONSE: IMatch = {
  "data": {
    "type": "match",
    "id": "a6d8d8f7-a3c4-4b1c-9947-8df40c144283",
    "attributes": {
      "createdAt": "2018-04-21T22:33:20Z",
      "duration": 1892,
      "gameMode": "duo-fpp",
      "mapName": "Desert_Main",
      "shardId": "pc-eu",
      "stats": null,
      "tags": null,
      "titleId": "bluehole-pubg"
    },
    "relationships": {
      "assets": {
        "data": [
          {
            "type": "asset",
            "id": "a63b97bd-45b8-11e8-8433-0a58646e130b"
          }
        ]
      },
      "rosters": {
        "data": [
          {
            "type": "roster",
            "id": "38461e8d-379a-41ff-8fda-1efbf84847ed"
          },
          {
            "type": "roster",
            "id": "2b551a10-2256-4c98-9f82-82e115dbffec"
          },
          {
            "type": "roster",
            "id": "cd1be289-0bd8-4e9a-89a0-2217d1153c74"
          }
        ]
      }
    },
    "links": {
      "schema": "",
      "self": "https://api.playbattlegrounds.com/shards/pc-eu/matches/a6d8d8f7-a3c4-4b1c-9947-8df40c144283"
    }
  },
  "included": [
    {
      "type": "participant",
      "id": "3ff014d0-6e81-446f-93c2-1dda7333297f",
      "attributes": {
        "actor": "",
        "shardId": "pc-eu",
        "stats": {
          "DBNOs": 0,
          "assists": 0,
          "boosts": 2,
          "damageDealt": 0,
          "deathType": "byplayer",
          "headshotKills": 0,
          "heals": 6,
          "killPlace": 39,
          "killPoints": 1278,
          "killPointsDelta": 3.161043,
          "killStreaks": 0,
          "kills": 0,
          "lastKillPoints": 0,
          "lastWinPoints": 0,
          "longestKill": 0,
          "mostDamage": 0,
          "name": "NixdaDieHard",
          "playerId": "account.0125807c8de4461198c0de300092ca34",
          "revives": 0,
          "rideDistance": 304.687073,
          "roadKills": 0,
          "teamKills": 0,
          "timeSurvived": 1881,
          "vehicleDestroys": 0,
          "walkDistance": 4652.759,
          "weaponsAcquired": 0,
          "winPlace": 2,
          "winPoints": 1393,
          "winPointsDelta": 31.835619
        }
      }
    },
    {
      "type": "roster",
      "id": "38461e8d-379a-41ff-8fda-1efbf84847ed",
      "attributes": {
        "shardId": "pc-eu",
        "stats": {
          "rank": 2,
          "teamId": 30
        },
        "won": "false"
      },
      "relationships": {
        "participants": {
          "data": [
            {
              "type": "participant",
              "id": "3ff014d0-6e81-446f-93c2-1dda7333297f"
            },
            {
              "type": "participant",
              "id": "ab84ed56-da51-4f9e-b649-f8a7f37604e4"
            }
          ]
        },
        "team": {
          "data": null
        }
      }
    },
    {
      "type": "asset",
      "id": "a63b97bd-45b8-11e8-8433-0a58646e130b",
      "attributes": {
        "URL": "https://telemetry-cdn.playbattlegrounds.com/bluehole-pubg/pc-eu/2018/04/21/23/06/a63b97bd-45b8-11e8-8433-0a58646e130b-telemetry.json",
        "createdAt": "2018-04-21T23:06:40Z",
        "description": "",
        "name": "telemetry"
      }
    },
    {
      "type": "participant",
      "id": "99f81c8b-edbd-452c-b8bb-666270b370d3",
      "attributes": {
        "actor": "",
        "shardId": "pc-eu",
        "stats": {
          "DBNOs": 0,
          "assists": 0,
          "boosts": 3,
          "damageDealt": 98.22,
          "deathType": "alive",
          "headshotKills": 0,
          "heals": 3,
          "killPlace": 15,
          "killPoints": 1039,
          "killPointsDelta": 36.707058,
          "killStreaks": 0,
          "kills": 2,
          "lastKillPoints": 0,
          "lastWinPoints": 0,
          "longestKill": 46,
          "mostDamage": 0,
          "name": "zaku6652",
          "playerId": "account.cda9cb29e8ce4146a9ad46d5a0da508b",
          "revives": 0,
          "rideDistance": 0,
          "roadKills": 0,
          "teamKills": 0,
          "timeSurvived": 1892,
          "vehicleDestroys": 0,
          "walkDistance": 3566.60132,
          "weaponsAcquired": 0,
          "winPlace": 1,
          "winPoints": 1121,
          "winPointsDelta": 140.555817
        }
      }
    },
    {
      "type": "participant",
      "id": "ab84ed56-da51-4f9e-b649-f8a7f37604e4",
      "attributes": {
        "actor": "",
        "shardId": "pc-eu",
        "stats": {
          "DBNOs": 1,
          "assists": 0,
          "boosts": 3,
          "damageDealt": 99.99999,
          "deathType": "byplayer",
          "headshotKills": 0,
          "heals": 4,
          "killPlace": 38,
          "killPoints": 1232,
          "killPointsDelta": 6.263594,
          "killStreaks": 0,
          "kills": 0,
          "lastKillPoints": 0,
          "lastWinPoints": 0,
          "longestKill": 0,
          "mostDamage": 0,
          "name": "Hartensteiner",
          "playerId": "account.0ad732bf9c344743baae060ca139df03",
          "revives": 0,
          "rideDistance": 306.4264,
          "roadKills": 0,
          "teamKills": 0,
          "timeSurvived": 1892,
          "vehicleDestroys": 0,
          "walkDistance": 4455.29053,
          "weaponsAcquired": 0,
          "winPlace": 2,
          "winPoints": 1383,
          "winPointsDelta": 36.43944
        }
      }
    },
    {
      "type": "participant",
      "id": "5f470019-5b98-4f8f-9603-eb312c4df5a1",
      "attributes": {
        "actor": "",
        "shardId": "pc-eu",
        "stats": {
          "DBNOs": 0,
          "assists": 0,
          "boosts": 3,
          "damageDealt": 69.22771,
          "deathType": "byplayer",
          "headshotKills": 0,
          "heals": 2,
          "killPlace": 24,
          "killPoints": 1314,
          "killPointsDelta": 13.5154753,
          "killStreaks": 0,
          "kills": 1,
          "lastKillPoints": 0,
          "lastWinPoints": 0,
          "longestKill": 20,
          "mostDamage": 0,
          "name": "saiitek",
          "playerId": "account.09293a024365480594d1b745884d8d5c",
          "revives": 1,
          "rideDistance": 0,
          "roadKills": 0,
          "teamKills": 0,
          "timeSurvived": 1831,
          "vehicleDestroys": 0,
          "walkDistance": 3744.01758,
          "weaponsAcquired": 0,
          "winPlace": 4,
          "winPoints": 1466,
          "winPointsDelta": 19.91042
        }
      }
    },
    {
      "type": "roster",
      "id": "2b551a10-2256-4c98-9f82-82e115dbffec",
      "attributes": {
        "shardId": "pc-eu",
        "stats": {
          "rank": 1,
          "teamId": 12
        },
        "won": "true"
      },
      "relationships": {
        "participants": {
          "data": [
            {
              "type": "participant",
              "id": "5f1d13e3-a837-498a-b354-ec25976a65f0"
            },
            {
              "type": "participant",
              "id": "99f81c8b-edbd-452c-b8bb-666270b370d3"
            }
          ]
        },
        "team": {
          "data": null
        }
      }
    },
    {
      "type": "participant",
      "id": "2dab6c73-eb40-4658-ade5-0d177adeba66",
      "attributes": {
        "actor": "",
        "shardId": "pc-eu",
        "stats": {
          "DBNOs": 2,
          "assists": 0,
          "boosts": 1,
          "damageDealt": 213.859985,
          "deathType": "byplayer",
          "headshotKills": 0,
          "heals": 5,
          "killPlace": 8,
          "killPoints": 1102,
          "killPointsDelta": 45.4683075,
          "killStreaks": 0,
          "kills": 3,
          "lastKillPoints": 0,
          "lastWinPoints": 0,
          "longestKill": 289,
          "mostDamage": 0,
          "name": "Robination",
          "playerId": "account.92c94880c9a146c1b60691ff9492a2fd",
          "revives": 0,
          "rideDistance": 2138.24683,
          "roadKills": 0,
          "teamKills": 0,
          "timeSurvived": 1831,
          "vehicleDestroys": 0,
          "walkDistance": 3120.68,
          "weaponsAcquired": 0,
          "winPlace": 4,
          "winPoints": 1209,
          "winPointsDelta": 34.0894928
        }
      }
    },
    {
      "type": "participant",
      "id": "5f1d13e3-a837-498a-b354-ec25976a65f0",
      "attributes": {
        "actor": "",
        "shardId": "pc-eu",
        "stats": {
          "DBNOs": 2,
          "assists": 3,
          "boosts": 4,
          "damageDealt": 376.501,
          "deathType": "alive",
          "headshotKills": 1,
          "heals": 1,
          "killPlace": 16,
          "killPoints": 1077,
          "killPointsDelta": 33.6085434,
          "killStreaks": 0,
          "kills": 2,
          "lastKillPoints": 0,
          "lastWinPoints": 0,
          "longestKill": 19,
          "mostDamage": 0,
          "name": "martinsileno",
          "playerId": "account.a540a32a49784025939a975b45e86bfe",
          "revives": 0,
          "rideDistance": 0,
          "roadKills": 0,
          "teamKills": 0,
          "timeSurvived": 1892,
          "vehicleDestroys": 0,
          "walkDistance": 3915.62,
          "weaponsAcquired": 0,
          "winPlace": 1,
          "winPoints": 1114,
          "winPointsDelta": 78.83802
        }
      }
    },
    {
      "type": "roster",
      "id": "cd1be289-0bd8-4e9a-89a0-2217d1153c74",
      "attributes": {
        "shardId": "pc-eu",
        "stats": {
          "rank": 4,
          "teamId": 5
        },
        "won": "false"
      },
      "relationships": {
        "participants": {
          "data": [
            {
              "type": "participant",
              "id": "2dab6c73-eb40-4658-ade5-0d177adeba66"
            },
            {
              "type": "participant",
              "id": "5f470019-5b98-4f8f-9603-eb312c4df5a1"
            }
          ]
        },
        "team": {
          "data": null
        }
      }
    }
  ],
  "links": {
    "self": "https://api.playbattlegrounds.com/shards/pc-na/matches/a6d8d8f7-a3c4-4b1c-9947-8df40c144283"
  },
  "meta": {}
}
/* tslint:enable */


interface ExpectedParticipant {
  id: string;
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
}

const participantNix: ExpectedParticipant = {
  id: '3ff014d0-6e81-446f-93c2-1dda7333297f',
  DBNOs: 0,
  assists: 0,
  boosts: 2,
  damageDealt: 0,
  deathType: DeathType.BY_PLAYER,
  headshotKills: 0,
  heals: 6,
  killPlace: 39,
  killPoints: 1278,
  killPointsDelta: 3.161043,
  killStreaks: 0,
  kills: 0,
  lastKillPoints: 0,
  lastWinPoints: 0,
  longestKill: 0,
  mostDamage: 0,
  name: 'NixdaDieHard',
  playerId: 'account.0125807c8de4461198c0de300092ca34',
  revives: 0,
  rideDistance: 304.687073,
  roadKills: 0,
  teamKills: 0,
  timeSurvived: 1881,
  vehicleDestroys: 0,
  walkDistance: 4652.759,
  weaponsAcquired: 0,
  winPlace: 2,
  winPoints: 1393,
  winPointsDelta: 31.835619,
};

const participantZakuro: ExpectedParticipant = {
  id: '99f81c8b-edbd-452c-b8bb-666270b370d3',
  DBNOs: 0,
  assists: 0,
  boosts: 3,
  damageDealt: 98.22,
  deathType: DeathType.ALIVE,
  headshotKills: 0,
  heals: 3,
  killPlace: 15,
  killPoints: 1039,
  killPointsDelta: 36.707058,
  killStreaks: 0,
  kills: 2,
  lastKillPoints: 0,
  lastWinPoints: 0,
  longestKill: 46,
  mostDamage: 0,
  name: 'zaku6652',
  playerId: 'account.cda9cb29e8ce4146a9ad46d5a0da508b',
  revives: 0,
  rideDistance: 0,
  roadKills: 0,
  teamKills: 0,
  timeSurvived: 1892,
  vehicleDestroys: 0,
  walkDistance: 3566.60132,
  weaponsAcquired: 0,
  winPlace: 1,
  winPoints: 1121,
  winPointsDelta: 140.555817,
};

const participantHart: ExpectedParticipant = {
  id: 'ab84ed56-da51-4f9e-b649-f8a7f37604e4',
  DBNOs: 1,
  assists: 0,
  boosts: 3,
  damageDealt: 99.99999,
  deathType: DeathType.BY_PLAYER,
  headshotKills: 0,
  heals: 4,
  killPlace: 38,
  killPoints: 1232,
  killPointsDelta: 6.263594,
  killStreaks: 0,
  kills: 0,
  lastKillPoints: 0,
  lastWinPoints: 0,
  longestKill: 0,
  mostDamage: 0,
  name: 'Hartensteiner',
  playerId: 'account.0ad732bf9c344743baae060ca139df03',
  revives: 0,
  rideDistance: 306.4264,
  roadKills: 0,
  teamKills: 0,
  timeSurvived: 1892,
  vehicleDestroys: 0,
  walkDistance: 4455.29053,
  weaponsAcquired: 0,
  winPlace: 2,
  winPoints: 1383,
  winPointsDelta: 36.43944,
};

const participantSaiitek: ExpectedParticipant = {
  id: '5f470019-5b98-4f8f-9603-eb312c4df5a1',
  DBNOs: 0,
  assists: 0,
  boosts: 3,
  damageDealt: 69.22771,
  deathType: DeathType.BY_PLAYER,
  headshotKills: 0,
  heals: 2,
  killPlace: 24,
  killPoints: 1314,
  killPointsDelta: 13.5154753,
  killStreaks: 0,
  kills: 1,
  lastKillPoints: 0,
  lastWinPoints: 0,
  longestKill: 20,
  mostDamage: 0,
  name: 'saiitek',
  playerId: 'account.09293a024365480594d1b745884d8d5c',
  revives: 1,
  rideDistance: 0,
  roadKills: 0,
  teamKills: 0,
  timeSurvived: 1831,
  vehicleDestroys: 0,
  walkDistance: 3744.01758,
  weaponsAcquired: 0,
  winPlace: 4,
  winPoints: 1466,
  winPointsDelta: 19.91042,
};

const participantRobi: ExpectedParticipant = {
  id: '2dab6c73-eb40-4658-ade5-0d177adeba66',
  DBNOs: 2,
  assists: 0,
  boosts: 1,
  damageDealt: 213.859985,
  deathType: DeathType.BY_PLAYER,
  headshotKills: 0,
  heals: 5,
  killPlace: 8,
  killPoints: 1102,
  killPointsDelta: 45.4683075,
  killStreaks: 0,
  kills: 3,
  lastKillPoints: 0,
  lastWinPoints: 0,
  longestKill: 289,
  mostDamage: 0,
  name: 'Robination',
  playerId: 'account.92c94880c9a146c1b60691ff9492a2fd',
  revives: 0,
  rideDistance: 2138.24683,
  roadKills: 0,
  teamKills: 0,
  timeSurvived: 1831,
  vehicleDestroys: 0,
  walkDistance: 3120.68,
  weaponsAcquired: 0,
  winPlace: 4,
  winPoints: 1209,
  winPointsDelta: 34.0894928,
};

const participantMartin: ExpectedParticipant = {
  id: '5f1d13e3-a837-498a-b354-ec25976a65f0',
  DBNOs: 2,
  assists: 3,
  boosts: 4,
  damageDealt: 376.501,
  deathType: DeathType.ALIVE,
  headshotKills: 1,
  heals: 1,
  killPlace: 16,
  killPoints: 1077,
  killPointsDelta: 33.6085434,
  killStreaks: 0,
  kills: 2,
  lastKillPoints: 0,
  lastWinPoints: 0,
  longestKill: 19,
  mostDamage: 0,
  name: 'martinsileno',
  playerId: 'account.a540a32a49784025939a975b45e86bfe',
  revives: 0,
  rideDistance: 0,
  roadKills: 0,
  teamKills: 0,
  timeSurvived: 1892,
  vehicleDestroys: 0,
  walkDistance: 3915.62,
  weaponsAcquired: 0,
  winPlace: 1,
  winPoints: 1114,
  winPointsDelta: 78.83802,
};
//#endregion


describe('Match entity', () => {

  function compareParticipant(p: Participant | undefined, expected: ExpectedParticipant): void {
    if (!p) {
      expect.fail();
      return;
    }
    expect(p.id).to.equal(expected.id);
    expect(p.DBNOs).to.equal(expected.DBNOs);
    expect(p.assists).to.equal(expected.assists);
    expect(p.boosts).to.equal(expected.boosts);
    expect(p.damageDealt).to.equal(expected.damageDealt);
    expect(p.deathType).to.equal(expected.deathType);
    expect(p.headshotKills).to.equal(expected.headshotKills);
    expect(p.heals).to.equal(expected.heals);
    expect(p.killPlace).to.equal(expected.killPlace);
    expect(p.killPoints).to.equal(expected.killPoints);
    expect(p.killPointsDelta).to.equal(expected.killPointsDelta);
    expect(p.killStreaks).to.equal(expected.killStreaks);
    expect(p.kills).to.equal(expected.kills);
    expect(p.lastKillPoints).to.equal(expected.lastKillPoints);
    expect(p.lastWinPoints).to.equal(expected.lastWinPoints);
    expect(p.longestKill).to.equal(expected.longestKill);
    expect(p.mostDamage).to.equal(expected.mostDamage);
    expect(p.name).to.equal(expected.name);
    expect(p.playerId).to.equal(expected.playerId);
    expect(p.revives).to.equal(expected.revives);
    expect(p.rideDistance).to.equal(expected.rideDistance);
    expect(p.roadKills).to.equal(expected.roadKills);
    expect(p.teamKills).to.equal(expected.teamKills);
    expect(p.timeSurvived).to.equal(expected.timeSurvived);
    expect(p.vehicleDestroys).to.equal(expected.vehicleDestroys);
    expect(p.walkDistance).to.equal(expected.walkDistance);
    expect(p.weaponsAcquired).to.equal(expected.weaponsAcquired);
    expect(p.winPlace).to.equal(expected.winPlace);
    expect(p.winPoints).to.equal(expected.winPoints);
    expect(p.winPointsDelta).to.equal(expected.winPointsDelta);
  }

  it('should initialize Match from API response', () => {
    const match = Match.fromDetail(API_RESPONSE);
    expect(match.id).to.equal('a6d8d8f7-a3c4-4b1c-9947-8df40c144283');
    expect(match.dateCreated).to.deep.equal(new Date('2018-04-21T22:33:20Z'));
    expect(match.duration).to.equal(1892);
    expect(match.gameMode).to.equal(GameMode.DUO_FPP);
    expect(match.map).to.equal(MapName.DESERT_MAIN);
    expect(match.patchVersion).to.be.an('undefined');
    expect(match.shardId).to.equal(PlatformRegion.PC_EU);
  });

  it('should initialize Participant list from API response', () => {
    const match = Match.fromDetail(API_RESPONSE);
    const participants = match.participants;
    expect(participants).to.have.length(6);
    const [nix, zakuro, hart, saiitek, robi, martin] = participants;
    compareParticipant(nix, participantNix);
    compareParticipant(zakuro, participantZakuro);
    compareParticipant(hart, participantHart);
    compareParticipant(saiitek, participantSaiitek);
    compareParticipant(robi, participantRobi);
    compareParticipant(martin, participantMartin);
  });

  it('should initialize Roster list from API response', () => {
    const match = Match.fromDetail(API_RESPONSE);
    const rosters = match.rosters;
    expect(rosters).to.have.length(3);
    const [r1, r2, r3] = rosters;
    expect(r1.id).to.equal('38461e8d-379a-41ff-8fda-1efbf84847ed');
    expect(r1.hasWon).to.be.false;
    expect(r1.rank).to.equal(2);
    expect(r1.teamId).to.equal(30);
    expect(r1.participants).to.have.length(2);
    const [nix, hart] = r1.participants;
    compareParticipant(nix, participantNix);
    compareParticipant(hart, participantHart);
    expect(r2.id).to.equal('2b551a10-2256-4c98-9f82-82e115dbffec');
    expect(r2.hasWon).to.be.true;
    expect(r2.rank).to.equal(1);
    expect(r2.teamId).to.equal(12);
    const [martin, zakuro] = r2.participants;
    compareParticipant(martin, participantMartin);
    compareParticipant(zakuro, participantZakuro);
    expect(r3.id).to.equal('cd1be289-0bd8-4e9a-89a0-2217d1153c74');
    expect(r3.hasWon).to.be.false;
    expect(r3.rank).to.equal(4);
    expect(r3.teamId).to.equal(5);
    const [robi, saiitek] = r3.participants;
    compareParticipant(robi, participantRobi);
    compareParticipant(saiitek, participantSaiitek);
  });

  it('should initialize Asset from API response', () => {
    const match = Match.fromDetail(API_RESPONSE);
    expect(match.asset).to.not.be.undefined;
    const asset = match.asset as Asset;
    expect(asset.id).to.equal('a63b97bd-45b8-11e8-8433-0a58646e130b');
    /* tslint:disable-next-line:max-line-length */
    expect(asset.url).to.equal('https://telemetry-cdn.playbattlegrounds.com/bluehole-pubg/pc-eu/2018/04/21/23/06/a63b97bd-45b8-11e8-8433-0a58646e130b-telemetry.json');
    expect(asset.dateCreated).to.deep.equal(new Date('2018-04-21T23:06:40Z'));
  });

  it('should find player by ID', () => {
    const match = Match.fromDetail(API_RESPONSE);
    const participant = match.getParticipantById('99f81c8b-edbd-452c-b8bb-666270b370d3');
    compareParticipant(participant, participantZakuro);
  });

  it('should find player by name', () => {
    const match = Match.fromDetail(API_RESPONSE);
    const participant = match.getParticipantByName('martinsileno');
    compareParticipant(participant, participantMartin);
  });

  it('should return undefined if trying to find player by non-existing ID', () => {
    const match = Match.fromDetail(API_RESPONSE);
    const participant = match.getParticipantById('123456');
    expect(participant).to.be.undefined;
  });

  it('should return undefined if trying to find player by non-existing name', () => {
    const match = Match.fromDetail(API_RESPONSE);
    const participant = match.getParticipantByName('pippo');
    expect(participant).to.be.undefined;
  });

  it('should find match winner(s)', () => {
    const match = Match.fromDetail(API_RESPONSE);
    const winners = match.getWinners();
    expect(winners).to.have.length(2);
    compareParticipant(winners[0], participantZakuro);
    compareParticipant(winners[1], participantMartin);
  });

});

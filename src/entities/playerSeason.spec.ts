import { expect } from 'chai';
import 'mocha';

import { IPlayerSeason, PlayerSeason } from '..';


/* tslint:disable */
const API_RESPONSE: IPlayerSeason = {
  "data": {
    "type": "playerSeason",
    "attributes": {
      "gameModeStats": {
        "duo": {
          "assists": 0,
          "bestRankPoint": 0,
          "boosts": 0,
          "dBNOs": 0,
          "dailyKills": 0,
          "dailyWins": 0,
          "damageDealt": 0,
          "days": 0,
          "headshotKills": 0,
          "heals": 0,
          "killPoints": 0,
          "kills": 0,
          "longestKill": 0,
          "longestTimeSurvived": 0,
          "losses": 0,
          "maxKillStreaks": 0,
          "mostSurvivalTime": 0,
          "rankPoints": 0,
          "revives": 0,
          "rideDistance": 0,
          "roadKills": 0,
          "roundMostKills": 0,
          "roundsPlayed": 0,
          "suicides": 0,
          "swimDistance" : 0,
          "teamKills": 0,
          "timeSurvived": 0,
          "top10s": 0,
          "vehicleDestroys": 0,
          "walkDistance": 0,
          "weaponsAcquired": 0,
          "weeklyKills": 0,
          "weeklyWins": 0,
          "winPoints": 0,
          "wins": 0
        },
        "duo-fpp": {
          "assists": 8,
          "bestRankPoint": 0,
          "boosts": 31,
          "dBNOs": 10,
          "dailyKills": 2,
          "dailyWins": 0,
          "damageDealt": 2730.9536,
          "days": 5,
          "headshotKills": 5,
          "heals": 25,
          "killPoints": 1180.1758,
          "kills": 15,
          "longestKill": 323.9015,
          "longestTimeSurvived": 1892.233,
          "losses": 23,
          "maxKillStreaks": 2,
          "mostSurvivalTime": 1892.233,
          "rankPoints": 0,
          "revives": 3,
          "rideDistance": 46569.055,
          "roadKills": 0,
          "roundMostKills": 4,
          "roundsPlayed": 24,
          "suicides": 1,
          "swimDistance" : 0,
          "teamKills": 2,
          "timeSurvived": 22971.379,
          "top10s": 8,
          "vehicleDestroys": 1,
          "walkDistance": 45455.348,
          "weaponsAcquired": 83,
          "weeklyKills": 6,
          "weeklyWins": 0,
          "winPoints": 1280.7273,
          "wins": 1
        },
        "solo": {
          "assists": 0,
          "bestRankPoint": 0,
          "boosts": 0,
          "dBNOs": 0,
          "dailyKills": 0,
          "dailyWins": 0,
          "damageDealt": 0,
          "days": 0,
          "headshotKills": 0,
          "heals": 0,
          "killPoints": 0,
          "kills": 0,
          "longestKill": 0,
          "longestTimeSurvived": 0,
          "losses": 0,
          "maxKillStreaks": 0,
          "mostSurvivalTime": 0,
          "rankPoints": 0,
          "revives": 0,
          "rideDistance": 0,
          "roadKills": 0,
          "roundMostKills": 0,
          "roundsPlayed": 0,
          "suicides": 0,
          "swimDistance" : 0,
          "teamKills": 0,
          "timeSurvived": 0,
          "top10s": 0,
          "vehicleDestroys": 0,
          "walkDistance": 0,
          "weaponsAcquired": 0,
          "weeklyKills": 0,
          "weeklyWins": 0,
          "winPoints": 0,
          "wins": 0
        },
        "solo-fpp": {
          "assists": 0,
          "bestRankPoint": 0,
          "boosts": 0,
          "dBNOs": 0,
          "dailyKills": 0,
          "dailyWins": 0,
          "damageDealt": 0,
          "days": 0,
          "headshotKills": 0,
          "heals": 0,
          "killPoints": 0,
          "kills": 0,
          "longestKill": 0,
          "longestTimeSurvived": 0,
          "losses": 0,
          "maxKillStreaks": 0,
          "mostSurvivalTime": 0,
          "rankPoints": 0,
          "revives": 0,
          "rideDistance": 0,
          "roadKills": 0,
          "roundMostKills": 0,
          "roundsPlayed": 0,
          "suicides": 0,
          "swimDistance" : 0,
          "teamKills": 0,
          "timeSurvived": 0,
          "top10s": 0,
          "vehicleDestroys": 0,
          "walkDistance": 0,
          "weaponsAcquired": 0,
          "weeklyKills": 0,
          "weeklyWins": 0,
          "winPoints": 0,
          "wins": 0
        },
        "squad": {
          "assists": 0,
          "bestRankPoint": 0,
          "boosts": 0,
          "dBNOs": 0,
          "dailyKills": 0,
          "dailyWins": 0,
          "damageDealt": 0,
          "days": 0,
          "headshotKills": 0,
          "heals": 0,
          "killPoints": 0,
          "kills": 0,
          "longestKill": 0,
          "longestTimeSurvived": 0,
          "losses": 0,
          "maxKillStreaks": 0,
          "mostSurvivalTime": 0,
          "rankPoints": 0,
          "revives": 0,
          "rideDistance": 0,
          "roadKills": 0,
          "roundMostKills": 0,
          "roundsPlayed": 0,
          "suicides": 0,
          "swimDistance" : 0,
          "teamKills": 0,
          "timeSurvived": 0,
          "top10s": 0,
          "vehicleDestroys": 0,
          "walkDistance": 0,
          "weaponsAcquired": 0,
          "weeklyKills": 0,
          "weeklyWins": 0,
          "winPoints": 0,
          "wins": 0
        },
        "squad-fpp": {
          "assists": 26,
          "bestRankPoint": 0,
          "boosts": 139,
          "dBNOs": 60,
          "dailyKills": 4,
          "dailyWins": 0,
          "damageDealt": 11883.432,
          "days": 18,
          "headshotKills": 12,
          "heals": 209,
          "killPoints": 1385.5311,
          "kills": 61,
          "longestKill": 249.45906,
          "longestTimeSurvived": 1935.326,
          "losses": 107,
          "maxKillStreaks": 4,
          "mostSurvivalTime": 1935.326,
          "rankPoints": 0,
          "revives": 20,
          "rideDistance": 240468.52,
          "roadKills": 2,
          "roundMostKills": 4,
          "roundsPlayed": 108,
          "suicides": 0,
          "swimDistance" : 0,
          "teamKills": 0,
          "timeSurvived": 110515.695,
          "top10s": 53,
          "vehicleDestroys": 1,
          "walkDistance": 208484.62,
          "weaponsAcquired": 381,
          "weeklyKills": 4,
          "weeklyWins": 0,
          "winPoints": 1519.7654,
          "wins": 1
        }
      }
    },
    "relationships": {
      "matchesSquadFPP": {
        "data": [
          {
            "type": "match",
            "id": "be4aa1ae-07a8-4511-99a6-eb81f7230a67"
          },
          {
            "type": "match",
            "id": "0f13a919-0f9b-46bb-b7a6-809248f0455a"
          }
        ]
      },
      "season": {
        "data": {
          "type": "season",
          "id": "division.bro.official.2018-04"
        }
      },
      "player": {
        "data": {
          "type": "player",
          "id": "account.a540a32a49784025939a975b45e86bfe"
        }
      },
      "matchesSolo": {
        "data": []
      },
      "matchesSoloFPP": {
        "data": []
      },
      "matchesDuo": {
        "data": []
      },
      "matchesDuoFPP": {
        "data": [
          {
            "type": "match",
            "id": "dcc06c80-0216-47c8-8a68-935edff50e7f"
          },
          {
            "type": "match",
            "id": "05c1bd64-323d-44e9-8b99-5dac92996964"
          }
        ]
      },
      "matchesSquad": {
        "data": []
      }
    }
  },
  "links": {
    "self": "https://api.playbattlegrounds.com/shards/pc-eu/players/account.a540a32a49784025939a975b45e86bfe/seasons/division.bro.official.2018-04"
  },
  "meta": {}
}
/* tslint:enable */

describe('PlayerSeason entity', () => {
  it('should initialize a PlayerSeason from API response', () => {
    const playerSeason = PlayerSeason.fromSeasonData(API_RESPONSE);
    expect(playerSeason.playerId).to.eq('account.a540a32a49784025939a975b45e86bfe');
    expect(playerSeason.seasonId).to.eq('division.bro.official.2018-04');

    expect(playerSeason.duoFPPMatchIds).to.eql([
      'dcc06c80-0216-47c8-8a68-935edff50e7f',
      '05c1bd64-323d-44e9-8b99-5dac92996964',
    ]);
    expect(playerSeason.duoMatchIds).to.eql([]);
    expect(playerSeason.soloFPPMatchIds).to.eql([]);
    expect(playerSeason.soloMatchIds).to.eql([]);
    expect(playerSeason.squadFPPMatchIds).to.eql([
      'be4aa1ae-07a8-4511-99a6-eb81f7230a67',
      '0f13a919-0f9b-46bb-b7a6-809248f0455a',
    ]);
    expect(playerSeason.squadMatchIds).to.eql([]);

    expect(playerSeason.duoFPPStats.assists).to.eq(8);
    expect(playerSeason.duoFPPStats.bestRankPoint).to.eq(0);
    expect(playerSeason.duoFPPStats.boosts).to.eq(31);
    expect(playerSeason.duoFPPStats.dBNOs).to.eq(10);
    expect(playerSeason.duoFPPStats.dailyKills).to.eq(2);
    expect(playerSeason.squadFPPStats.dailyWins).to.eq(0);
    expect(playerSeason.duoFPPStats.damageDealt).to.eq(2730.9536);
    expect(playerSeason.duoFPPStats.days).to.eq(5);
    expect(playerSeason.duoFPPStats.headshotKills).to.eq(5);
    expect(playerSeason.duoFPPStats.heals).to.eq(25);
    expect(playerSeason.duoFPPStats.killPoints).to.eq(1180.1758);
    expect(playerSeason.duoFPPStats.kills).to.eq(15);
    expect(playerSeason.duoFPPStats.longestKill).to.eq(323.9015);
    expect(playerSeason.duoFPPStats.longestTimeSurvived).to.eq(1892.233);
    expect(playerSeason.duoFPPStats.losses).to.eq(23);
    expect(playerSeason.duoFPPStats.maxKillStreaks).to.eq(2);
    expect(playerSeason.duoFPPStats.mostSurvivalTime).to.eq(1892.233);
    expect(playerSeason.duoFPPStats.rankPoints).to.eq(0);
    expect(playerSeason.duoFPPStats.revives).to.eq(3);
    expect(playerSeason.duoFPPStats.rideDistance).to.eq(46569.055);
    expect(playerSeason.duoFPPStats.roadKills).to.eq(0);
    expect(playerSeason.duoFPPStats.roundMostKills).to.eq(4);
    expect(playerSeason.duoFPPStats.roundsPlayed).to.eq(24);
    expect(playerSeason.duoFPPStats.suicides).to.eq(1);
    expect(playerSeason.duoFPPStats.swimDistance).to.eq(0);
    expect(playerSeason.duoFPPStats.teamKills).to.eq(2);
    expect(playerSeason.duoFPPStats.timeSurvived).to.eq(22971.379);
    expect(playerSeason.duoFPPStats.top10s).to.eq(8);
    expect(playerSeason.duoFPPStats.vehicleDestroys).to.eq(1);
    expect(playerSeason.duoFPPStats.walkDistance).to.eq(45455.348);
    expect(playerSeason.duoFPPStats.weaponsAcquired).to.eq(83);
    expect(playerSeason.duoFPPStats.weeklyKills).to.eq(6);
    expect(playerSeason.duoFPPStats.weeklyWins).to.eq(0);
    expect(playerSeason.duoFPPStats.winPoints).to.eq(1280.7273);
    expect(playerSeason.duoFPPStats.wins).to.eq(1);

    expect(playerSeason.duoStats.assists).to.eq(0);
    expect(playerSeason.duoStats.bestRankPoint).to.eq(0);
    expect(playerSeason.duoStats.boosts).to.eq(0);
    expect(playerSeason.duoStats.dBNOs).to.eq(0);
    expect(playerSeason.duoStats.dailyKills).to.eq(0);
    expect(playerSeason.duoStats.dailyWins).to.eq(0);
    expect(playerSeason.duoStats.damageDealt).to.eq(0);
    expect(playerSeason.duoStats.days).to.eq(0);
    expect(playerSeason.duoStats.headshotKills).to.eq(0);
    expect(playerSeason.duoStats.heals).to.eq(0);
    expect(playerSeason.duoStats.killPoints).to.eq(0);
    expect(playerSeason.duoStats.kills).to.eq(0);
    expect(playerSeason.duoStats.longestKill).to.eq(0);
    expect(playerSeason.duoStats.longestTimeSurvived).to.eq(0);
    expect(playerSeason.duoStats.losses).to.eq(0);
    expect(playerSeason.duoStats.maxKillStreaks).to.eq(0);
    expect(playerSeason.duoStats.mostSurvivalTime).to.eq(0);
    expect(playerSeason.duoStats.rankPoints).to.eq(0);
    expect(playerSeason.duoStats.revives).to.eq(0);
    expect(playerSeason.duoStats.rideDistance).to.eq(0);
    expect(playerSeason.duoStats.roadKills).to.eq(0);
    expect(playerSeason.duoStats.roundMostKills).to.eq(0);
    expect(playerSeason.duoStats.roundsPlayed).to.eq(0);
    expect(playerSeason.duoStats.suicides).to.eq(0);
    expect(playerSeason.duoStats.swimDistance).to.eq(0);
    expect(playerSeason.duoStats.teamKills).to.eq(0);
    expect(playerSeason.duoStats.timeSurvived).to.eq(0);
    expect(playerSeason.duoStats.top10s).to.eq(0);
    expect(playerSeason.duoStats.vehicleDestroys).to.eq(0);
    expect(playerSeason.duoStats.walkDistance).to.eq(0);
    expect(playerSeason.duoStats.weaponsAcquired).to.eq(0);
    expect(playerSeason.duoStats.weeklyKills).to.eq(0);
    expect(playerSeason.duoStats.weeklyWins).to.eq(0);
    expect(playerSeason.duoStats.winPoints).to.eq(0);
    expect(playerSeason.duoStats.wins).to.eq(0);

    expect(playerSeason.soloStats.assists).to.eq(0);
    expect(playerSeason.soloStats.bestRankPoint).to.eq(0);
    expect(playerSeason.soloStats.boosts).to.eq(0);
    expect(playerSeason.soloStats.dBNOs).to.eq(0);
    expect(playerSeason.soloStats.dailyKills).to.eq(0);
    expect(playerSeason.soloStats.dailyWins).to.eq(0);
    expect(playerSeason.soloStats.damageDealt).to.eq(0);
    expect(playerSeason.soloStats.days).to.eq(0);
    expect(playerSeason.soloStats.headshotKills).to.eq(0);
    expect(playerSeason.soloStats.heals).to.eq(0);
    expect(playerSeason.soloStats.killPoints).to.eq(0);
    expect(playerSeason.soloStats.kills).to.eq(0);
    expect(playerSeason.soloStats.longestKill).to.eq(0);
    expect(playerSeason.soloStats.longestTimeSurvived).to.eq(0);
    expect(playerSeason.soloStats.losses).to.eq(0);
    expect(playerSeason.soloStats.maxKillStreaks).to.eq(0);
    expect(playerSeason.soloStats.mostSurvivalTime).to.eq(0);
    expect(playerSeason.soloStats.rankPoints).to.eq(0);
    expect(playerSeason.soloStats.revives).to.eq(0);
    expect(playerSeason.soloStats.rideDistance).to.eq(0);
    expect(playerSeason.soloStats.roadKills).to.eq(0);
    expect(playerSeason.soloStats.roundMostKills).to.eq(0);
    expect(playerSeason.soloStats.roundsPlayed).to.eq(0);
    expect(playerSeason.soloStats.suicides).to.eq(0);
    expect(playerSeason.soloStats.swimDistance).to.eq(0);
    expect(playerSeason.soloStats.teamKills).to.eq(0);
    expect(playerSeason.soloStats.timeSurvived).to.eq(0);
    expect(playerSeason.soloStats.top10s).to.eq(0);
    expect(playerSeason.soloStats.vehicleDestroys).to.eq(0);
    expect(playerSeason.soloStats.walkDistance).to.eq(0);
    expect(playerSeason.soloStats.weaponsAcquired).to.eq(0);
    expect(playerSeason.soloStats.weeklyKills).to.eq(0);
    expect(playerSeason.soloStats.weeklyWins).to.eq(0);
    expect(playerSeason.soloStats.winPoints).to.eq(0);
    expect(playerSeason.soloStats.wins).to.eq(0);

    expect(playerSeason.soloFPPStats.assists).to.eq(0);
    expect(playerSeason.soloFPPStats.bestRankPoint).to.eq(0);
    expect(playerSeason.soloFPPStats.boosts).to.eq(0);
    expect(playerSeason.soloFPPStats.dBNOs).to.eq(0);
    expect(playerSeason.soloFPPStats.dailyKills).to.eq(0);
    expect(playerSeason.soloFPPStats.dailyWins).to.eq(0);
    expect(playerSeason.soloFPPStats.damageDealt).to.eq(0);
    expect(playerSeason.soloFPPStats.days).to.eq(0);
    expect(playerSeason.soloFPPStats.headshotKills).to.eq(0);
    expect(playerSeason.soloFPPStats.heals).to.eq(0);
    expect(playerSeason.soloFPPStats.killPoints).to.eq(0);
    expect(playerSeason.soloFPPStats.kills).to.eq(0);
    expect(playerSeason.soloFPPStats.longestKill).to.eq(0);
    expect(playerSeason.soloFPPStats.longestTimeSurvived).to.eq(0);
    expect(playerSeason.soloFPPStats.losses).to.eq(0);
    expect(playerSeason.soloFPPStats.maxKillStreaks).to.eq(0);
    expect(playerSeason.soloFPPStats.mostSurvivalTime).to.eq(0);
    expect(playerSeason.soloFPPStats.rankPoints).to.eq(0);
    expect(playerSeason.soloFPPStats.revives).to.eq(0);
    expect(playerSeason.soloFPPStats.rideDistance).to.eq(0);
    expect(playerSeason.soloFPPStats.roadKills).to.eq(0);
    expect(playerSeason.soloFPPStats.roundMostKills).to.eq(0);
    expect(playerSeason.soloFPPStats.roundsPlayed).to.eq(0);
    expect(playerSeason.soloFPPStats.suicides).to.eq(0);
    expect(playerSeason.soloFPPStats.swimDistance).to.eq(0);
    expect(playerSeason.soloFPPStats.teamKills).to.eq(0);
    expect(playerSeason.soloFPPStats.timeSurvived).to.eq(0);
    expect(playerSeason.soloFPPStats.top10s).to.eq(0);
    expect(playerSeason.soloFPPStats.vehicleDestroys).to.eq(0);
    expect(playerSeason.soloFPPStats.walkDistance).to.eq(0);
    expect(playerSeason.soloFPPStats.weaponsAcquired).to.eq(0);
    expect(playerSeason.soloFPPStats.weeklyKills).to.eq(0);
    expect(playerSeason.soloFPPStats.weeklyWins).to.eq(0);
    expect(playerSeason.soloFPPStats.winPoints).to.eq(0);
    expect(playerSeason.soloFPPStats.wins).to.eq(0);

    expect(playerSeason.squadStats.assists).to.eq(0);
    expect(playerSeason.squadStats.bestRankPoint).to.eq(0);
    expect(playerSeason.squadStats.boosts).to.eq(0);
    expect(playerSeason.squadStats.dBNOs).to.eq(0);
    expect(playerSeason.squadStats.dailyKills).to.eq(0);
    expect(playerSeason.squadStats.dailyWins).to.eq(0);
    expect(playerSeason.squadStats.damageDealt).to.eq(0);
    expect(playerSeason.squadStats.days).to.eq(0);
    expect(playerSeason.squadStats.headshotKills).to.eq(0);
    expect(playerSeason.squadStats.heals).to.eq(0);
    expect(playerSeason.squadStats.killPoints).to.eq(0);
    expect(playerSeason.squadStats.kills).to.eq(0);
    expect(playerSeason.squadStats.longestKill).to.eq(0);
    expect(playerSeason.squadStats.longestTimeSurvived).to.eq(0);
    expect(playerSeason.squadStats.losses).to.eq(0);
    expect(playerSeason.squadStats.maxKillStreaks).to.eq(0);
    expect(playerSeason.squadStats.mostSurvivalTime).to.eq(0);
    expect(playerSeason.squadStats.rankPoints).to.eq(0);
    expect(playerSeason.squadStats.revives).to.eq(0);
    expect(playerSeason.squadStats.rideDistance).to.eq(0);
    expect(playerSeason.squadStats.roadKills).to.eq(0);
    expect(playerSeason.squadStats.roundMostKills).to.eq(0);
    expect(playerSeason.squadStats.roundsPlayed).to.eq(0);
    expect(playerSeason.squadStats.suicides).to.eq(0);
    expect(playerSeason.squadStats.swimDistance).to.eq(0);
    expect(playerSeason.squadStats.teamKills).to.eq(0);
    expect(playerSeason.squadStats.timeSurvived).to.eq(0);
    expect(playerSeason.squadStats.top10s).to.eq(0);
    expect(playerSeason.squadStats.vehicleDestroys).to.eq(0);
    expect(playerSeason.squadStats.walkDistance).to.eq(0);
    expect(playerSeason.squadStats.weaponsAcquired).to.eq(0);
    expect(playerSeason.squadStats.weeklyKills).to.eq(0);
    expect(playerSeason.squadStats.weeklyWins).to.eq(0);
    expect(playerSeason.squadStats.winPoints).to.eq(0);
    expect(playerSeason.squadStats.wins).to.eq(0);

    expect(playerSeason.squadFPPStats.assists).to.eq(26);
    expect(playerSeason.squadFPPStats.bestRankPoint).to.eq(0);
    expect(playerSeason.squadFPPStats.boosts).to.eq(139);
    expect(playerSeason.squadFPPStats.dBNOs).to.eq(60);
    expect(playerSeason.squadFPPStats.dailyKills).to.eq(4);
    expect(playerSeason.squadFPPStats.dailyWins).to.eq(0);
    expect(playerSeason.squadFPPStats.damageDealt).to.eq(11883.432);
    expect(playerSeason.squadFPPStats.days).to.eq(18);
    expect(playerSeason.squadFPPStats.headshotKills).to.eq(12);
    expect(playerSeason.squadFPPStats.heals).to.eq(209);
    expect(playerSeason.squadFPPStats.killPoints).to.eq(1385.5311);
    expect(playerSeason.squadFPPStats.kills).to.eq(61);
    expect(playerSeason.squadFPPStats.longestKill).to.eq(249.45906);
    expect(playerSeason.squadFPPStats.longestTimeSurvived).to.eq(1935.326);
    expect(playerSeason.squadFPPStats.losses).to.eq(107);
    expect(playerSeason.squadFPPStats.maxKillStreaks).to.eq(4);
    expect(playerSeason.squadFPPStats.mostSurvivalTime).to.eq(1935.326);
    expect(playerSeason.squadFPPStats.rankPoints).to.eq(0);
    expect(playerSeason.squadFPPStats.revives).to.eq(20);
    expect(playerSeason.squadFPPStats.rideDistance).to.eq(240468.52);
    expect(playerSeason.squadFPPStats.roadKills).to.eq(2);
    expect(playerSeason.squadFPPStats.roundMostKills).to.eq(4);
    expect(playerSeason.squadFPPStats.roundsPlayed).to.eq(108);
    expect(playerSeason.squadFPPStats.suicides).to.eq(0);
    expect(playerSeason.squadFPPStats.swimDistance).to.eq(0);
    expect(playerSeason.squadFPPStats.teamKills).to.eq(0);
    expect(playerSeason.squadFPPStats.timeSurvived).to.eq(110515.695);
    expect(playerSeason.squadFPPStats.top10s).to.eq(53);
    expect(playerSeason.squadFPPStats.vehicleDestroys).to.eq(1);
    expect(playerSeason.squadFPPStats.walkDistance).to.eq(208484.62);
    expect(playerSeason.squadFPPStats.weaponsAcquired).to.eq(381);
    expect(playerSeason.squadFPPStats.weeklyKills).to.eq(4);
    expect(playerSeason.squadFPPStats.weeklyWins).to.eq(0);
    expect(playerSeason.squadFPPStats.winPoints).to.eq(1519.7654);
    expect(playerSeason.squadFPPStats.wins).to.eq(1);
  });
});

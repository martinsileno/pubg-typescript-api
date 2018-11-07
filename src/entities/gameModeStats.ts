import { IGameModeStats } from '..';


/**
 * Statistics for a player in a game mode (solo, solo fpp etc.) in given season.
 */
export class GameModeStats {
  private _assists: number;
  private _bestRankPoint: number;
  private _boosts: number;
  private _dBNOs: number;
  private _dailyKills: number;
  private _dailyWins: number;
  private _damageDealt: number;
  private _days: number;
  private _headshotKills: number;
  private _heals: number;
  private _killPoints: number;  // undocumented?
  private _kills: number;
  private _longestKill: number;
  private _longestTimeSurvived: number;
  private _losses: number;
  private _maxKillStreaks: number;
  private _mostSurvivalTime: number;
  private _rankPoints: number;
  private _revives: number;
  private _rideDistance: number;
  private _roadKills: number;
  private _roundMostKills: number;
  private _roundsPlayed: number;
  private _suicides: number;
  private _swimDistance: number;
  private _teamKills: number;
  private _timeSurvived: number;
  private _top10s: number;
  private _vehicleDestroys: number;
  private _walkDistance: number;
  private _weaponsAcquired: number;
  private _weeklyKills: number;
  private _weeklyWins: number;
  private _winPoints: number;
  // private _winRatio: number;
  private _wins: number;

  constructor(playerSeason: IGameModeStats) {
    this._assists = playerSeason.assists;
    this._bestRankPoint = playerSeason.bestRankPoint;
    this._boosts = playerSeason.boosts;
    this._dBNOs = playerSeason.dBNOs;
    this._dailyKills = playerSeason.dailyKills;
    this._dailyWins = playerSeason.dailyWins;
    this._damageDealt = playerSeason.damageDealt;
    this._days = playerSeason.days;
    this._headshotKills = playerSeason.headshotKills;
    this._heals = playerSeason.heals;
    this._killPoints = playerSeason.killPoints;
    this._kills = playerSeason.kills;
    this._longestKill = playerSeason.longestKill;
    this._longestTimeSurvived = playerSeason.longestTimeSurvived;
    this._losses = playerSeason.losses;
    this._maxKillStreaks = playerSeason.maxKillStreaks;
    this._mostSurvivalTime = playerSeason.mostSurvivalTime;
    this._rankPoints = playerSeason.rankPoints;
    this._revives = playerSeason.revives;
    this._rideDistance = playerSeason.rideDistance;
    this._roadKills = playerSeason.roadKills;
    this._roundMostKills = playerSeason.roundMostKills;
    this._roundsPlayed = playerSeason.roundsPlayed;
    this._suicides = playerSeason.suicides;
    this._swimDistance = playerSeason.swimDistance;
    this._teamKills = playerSeason.teamKills;
    this._timeSurvived = playerSeason.timeSurvived;
    this._top10s = playerSeason.top10s;
    this._vehicleDestroys = playerSeason.vehicleDestroys;
    this._walkDistance = playerSeason.walkDistance;
    this._weaponsAcquired = playerSeason.weaponsAcquired;
    this._weeklyKills = playerSeason.weeklyKills;
    this._weeklyWins = playerSeason.weeklyWins;
    this._winPoints = playerSeason.winPoints;
    this._wins = playerSeason.wins;
  }

  get assists(): number {
    return this._assists;
  }

  get bestRankPoint(): number {
    return this._bestRankPoint;
  }

  get boosts(): number {
    return this._boosts;
  }

  get dBNOs(): number {
    return this._dBNOs;
  }

  get dailyKills(): number {
    return this._dailyKills;
  }

  get dailyWins(): number {
    return this._dailyWins;
  }

  get damageDealt(): number {
    return this._damageDealt;
  }

  get days(): number {
    return this._days;
  }

  get headshotKills(): number {
    return this._headshotKills;
  }

  get heals(): number {
    return this._heals;
  }

  get killPoints(): number {
    return this._killPoints;
  }

  get kills(): number {
    return this._kills;
  }

  get longestKill(): number {
    return this._longestKill;
  }

  get longestTimeSurvived(): number {
    return this._longestTimeSurvived;
  }

  get losses(): number {
    return this._losses;
  }

  get maxKillStreaks(): number {
    return this._maxKillStreaks;
  }

  get mostSurvivalTime(): number {
    return this._mostSurvivalTime;
  }

  get rankPoints(): number {
    return this._rankPoints;
  }

  get revives(): number {
    return this._revives;
  }

  get rideDistance(): number {
    return this._rideDistance;
  }

  get roadKills(): number {
    return this._roadKills;
  }

  get roundMostKills(): number {
    return this._roundMostKills;
  }

  get roundsPlayed(): number {
    return this._roundsPlayed;
  }

  get suicides(): number {
    return this._suicides;
  }

  get swimDistance(): number {
    return this._swimDistance;
  }

  get teamKills(): number {
    return this._teamKills;
  }

  get timeSurvived(): number {
    return this._timeSurvived;
  }

  get top10s(): number {
    return this._top10s;
  }

  get vehicleDestroys(): number {
    return this._vehicleDestroys;
  }

  get walkDistance(): number {
    return this._walkDistance;
  }

  get weaponsAcquired(): number {
    return this._weaponsAcquired;
  }

  get weeklyKills(): number {
    return this._weeklyKills;
  }

  get weeklyWins(): number {
    return this._weeklyWins;
  }

  get winPoints(): number {
    return this._winPoints;
  }

  get wins(): number {
    return this._wins;
  }
}

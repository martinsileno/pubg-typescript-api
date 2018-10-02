import { DeathType, IParticipant } from '..';

export class Participant {
  private _id: string;
  private _DBNOs: number;
  private _assists: number;
  private _boosts: number;
  private _damageDealt: number;
  private _deathType: DeathType;
  private _headshotKills: number;
  private _heals: number;
  private _killPlace: number;
  private _killPoints?: number;
  private _killPointsDelta?: number;
  private _killStreaks: number;
  private _kills: number;
  private _lastKillPoints: number;
  private _lastWinPoints: number;
  private _longestKill: number;
  private _mostDamage: number;
  private _name: string;
  private _playerId: string;
  private _revives: number;
  private _rideDistance: number;
  private _roadKills: number;
  private _swimDistance: number;
  private _teamKills: number;
  private _timeSurvived: number;
  private _vehicleDestroys: number;
  private _walkDistance: number;
  private _weaponsAcquired: number;
  private _winPlace: number;
  private _winPoints?: number;
  private _winPointsDelta?: number;

  constructor(participant: IParticipant) {
    this._id = participant.id;
    const stats = participant.attributes.stats;
    this._DBNOs = stats.DBNOs;
    this._assists = stats.assists;
    this._boosts = stats.boosts;
    this._damageDealt = stats.damageDealt;
    this._deathType = stats.deathType as DeathType;
    this._headshotKills = stats.headshotKills;
    this._heals = stats.heals;
    this._killPlace = stats.killPlace;
    this._killPoints = stats.killPoints;
    this._killPointsDelta = stats.killPointsDelta;
    this._killStreaks = stats.killStreaks;
    this._kills = stats.kills;
    this._lastKillPoints = stats.lastKillPoints;
    this._lastWinPoints = stats.lastWinPoints;
    this._longestKill = stats.longestKill;
    this._mostDamage = stats.mostDamage;
    this._name = stats.name;
    this._playerId = stats.playerId;
    this._revives = stats.revives;
    this._rideDistance = stats.rideDistance;
    this._roadKills = stats.roadKills;
    this._swimDistance = stats.swimDistance;
    this._teamKills = stats.teamKills;
    this._timeSurvived = stats.timeSurvived;
    this._vehicleDestroys = stats.vehicleDestroys;
    this._walkDistance = stats.walkDistance;
    this._weaponsAcquired = stats.weaponsAcquired;
    this._winPlace = stats.winPlace;
    this._winPoints = stats.winPoints;
    this._winPointsDelta = stats.winPointsDelta;
  }

  //#region GETTERS
  get id() {
    return this._id;
  }

  /**
   * Number of times this participant was downed
   */
  get DBNOs() {
    return this._DBNOs;
  }

  get assists() {
    return this._assists;
  }

  /**
   * Total number of boost items used
   */
  get boosts() {
    return this._boosts;
  }

  get damageDealt() {
    return this._damageDealt;
  }

  get deathType() {
    return this._deathType;
  }

  get headshotKills() {
    return this._headshotKills;
  }

  /**
   * Number of healing items used
   */
  get heals() {
    return this._heals;
  }

  get killPlace() {
    return this._killPlace;
  }

  get killPoints() {
    return this._killPoints;
  }

  /**
   * Change in kill points
   */
  get killPointsDelta() {
    return this._killPointsDelta;
  }

  /**
   * Total number of kill streaks
   */
  get killStreaks() {
    return this._killStreaks;
  }

  get kills() {
    return this._kills;
  }

  get lastKillPoints() {
    return this._lastKillPoints;
  }

  get lastWinPoints() {
    return this._lastWinPoints;
  }

  get longestKill() {
    return this._longestKill;
  }

  /**
   * Highest amount of damage dealt with a single attack
   */
  get mostDamage() {
    return this._mostDamage;
  }

  /**
   * Username of the player associated with this participant
   */
  get name() {
    return this._name;
  }

  /**
   * Account ID of the player associated with this participant
   */
  get playerId() {
    return this._playerId;
  }

  /**
   * Number of times this participant revived others
   */
  get revives() {
    return this._revives;
  }

  /**
   * Total distance traveled in vehicles
   */
  get rideDistance() {
    return this._rideDistance;
  }

  /**
   * Number of kills while in a vehicle
   */
  get roadKills() {
    return this._roadKills;
  }

  /**
   * Total distance traveled while swimming measured in meters
   */
  get swimDistance() {
    return this._swimDistance;
  }

  get teamKills() {
    return this._teamKills;
  }

  get timeSurvived() {
    return this._timeSurvived;
  }

  get vehicleDestroys() {
    return this._vehicleDestroys;
  }

  get walkDistance() {
    return this._walkDistance;
  }

  get weaponsAcquired() {
    return this._weaponsAcquired;
  }

  get winPlace() {
    return this._winPlace;
  }

  get winPoints() {
    return this._winPoints;
  }

  get winPointsDelta() {
    return this._winPointsDelta;
  }
  //#endregion

  // composite getters
  get totalDistance() {
    return this._rideDistance + this._walkDistance;
  }
}

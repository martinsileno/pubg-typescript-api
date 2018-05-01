import { GameModeStats, IPlayerSeason, PlayersPubgAPI, PubgAPI } from '..';


/**
 * Statistics for a player in a given season.
 *
 * Initialize this by calling the `get` method with an instance of `PubgAPI`, a player ID and
 * a season ID.
 *
 * The returned instance of this class will contain, for each game mode, the stats and a list of
 * Match IDs.
 */
export class PlayerSeason {
  private _playerId: string;
  private _seasonId: string;

  private _duoFPPStats: GameModeStats;
  private _duoStats: GameModeStats;
  private _duoMatchIds: string[];
  private _duoFPPMatchIds: string[];

  private _soloFPPStats: GameModeStats;
  private _soloStats: GameModeStats;
  private _soloMatchIds: string[];
  private _soloFPPMatchIds: string[];

  private _squadFPPStats: GameModeStats;
  private _squadStats: GameModeStats;
  private _squadMatchIds: string[];
  private _squadFPPMatchIds: string[];

  private constructor(playerSeason: IPlayerSeason) {
    const relationships = playerSeason.data.relationships;
    this._playerId = relationships.player.data.id;
    this._seasonId = relationships.season.data.id;

    const gameModesStats = playerSeason.data.attributes.gameModeStats;
    this._duoStats = new GameModeStats(gameModesStats.duo);
    this._duoFPPStats = new GameModeStats(gameModesStats['duo-fpp']);
    this._duoMatchIds = relationships.matchesDuo.data.map(elem => elem.id);
    this._duoFPPMatchIds = relationships.matchesDuoFPP.data.map(elem => elem.id);

    this._soloStats = new GameModeStats(gameModesStats.solo);
    this._soloFPPStats = new GameModeStats(gameModesStats['solo-fpp']);
    this._soloMatchIds = relationships.matchesSolo.data.map(elem => elem.id);
    this._soloFPPMatchIds = relationships.matchesSoloFPP.data.map(elem => elem.id);

    this._squadStats = new GameModeStats(gameModesStats.squad);
    this._squadFPPStats = new GameModeStats(gameModesStats['squad-fpp']);
    this._squadMatchIds = relationships.matchesSquad.data.map(elem => elem.id);
    this._squadFPPMatchIds = relationships.matchesSquadFPP.data.map(elem => elem.id);
  }

  static async get(api: PubgAPI, playerId: string, seasonId: string) {
    const playerAPI = new PlayersPubgAPI(api);
    const seasonData = await playerAPI.getSeasonStats(playerId, seasonId);
    return PlayerSeason.fromSeasonData(seasonData.data);
  }

  static fromSeasonData(seasonData: IPlayerSeason) {
    return new PlayerSeason(seasonData);
  }

  get playerId(): string {
    return this._playerId;
  }

  get seasonId(): string {
    return this._seasonId;
  }

  get duoFPPStats(): GameModeStats {
    return this._duoFPPStats;
  }

  get duoStats(): GameModeStats {
    return this._duoStats;
  }

  get duoMatchIds(): string[] {
    return this._duoMatchIds;
  }

  get duoFPPMatchIds(): string[] {
    return this._duoFPPMatchIds;
  }

  get soloFPPStats(): GameModeStats {
    return this._soloFPPStats;
  }

  get soloStats(): GameModeStats {
    return this._soloStats;
  }

  get soloMatchIds(): string[] {
    return this._soloMatchIds;
  }

  get soloFPPMatchIds(): string[] {
    return this._soloFPPMatchIds;
  }

  get squadFPPStats(): GameModeStats {
    return this._squadFPPStats;
  }

  get squadStats(): GameModeStats {
    return this._squadStats;
  }

  get squadMatchIds(): string[] {
    return this._squadMatchIds;
  }

  get squadFPPMatchIds(): string[] {
    return this._squadFPPMatchIds;
  }
}

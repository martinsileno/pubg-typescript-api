import { ISeason, ISeasonList, PubgAPI, SeasonsPubgAPI } from '..';


/**
 * A PUBG Season.
 *
 * Contains ID and info on a Season. The season has an ID and two boolean values that indicate
 * whether or not it is the current season or if it is off-season.
 *
 * Use the `list` static method to get a list of all the seasons.
 */
export class Season {
  private _id: string;
  private _isCurrentSeason: boolean;
  private _isOffSeason: boolean;

  private constructor(season: ISeason) {
    this._id = season.id;
    this._isCurrentSeason = season.attributes.isCurrentSeason;
    this._isOffSeason = season.attributes.isOffseason;
  }

  /**
   * Return a complete list of Season objects from PUBG API.
   *
   * @param api instance of `PubgAPI` that will be used to make the API request
   */
  static async list(api: PubgAPI) {
    const seasonsAPI = new SeasonsPubgAPI(api);
    const seasonsData = await seasonsAPI.list();
    return Season.fromList(seasonsData.data);
  }

  static fromList(seasonList: ISeasonList): Season[] {
    const seasons: Season[] = [];
    seasonList.data.forEach(season => {
      seasons.push(new Season(season));
    });

    return seasons;
  }

  get id() {
    return this._id;
  }

  /**
   * Indicates if the season is active.
   */
  get isCurrentSeason() {
    return this._isCurrentSeason;
  }

  /**
   * Indicates if the season is not active.
   */
  get isOffSeason() {
    return this._isOffSeason;
  }
}

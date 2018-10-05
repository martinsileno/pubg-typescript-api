import {
  Asset,
  GameMode,
  IAsset,
  IMatch,
  IParticipant,
  IRoster,
  MapName,
  MatchesPubgAPI,
  Participant,
  PlatformRegion,
  PubgAPI,
  Roster,
  SeasonState,
  Telemetry,
  TelemetryPubgAPI,
} from '..';


/**
 * A PUBG Match.
 *
 * Contains information and statistics on a Match, such as date, duration, map, participants
 * and teams.
 */
export class Match {
  private _id: string;
  private _dateCreated: Date;
  private _duration: number;
  private _gameMode: GameMode;
  private _isCustomMatch: boolean;
  private _map: MapName;
  private _patchVersion: string | undefined;
  private _seasonState: SeasonState;
  private _shardId: PlatformRegion;

  private _participants: Participant[];
  private _rosters: Roster[];
  private _asset?: Asset;  // should never be undefined as an error would be thrown in constructor

  private constructor(matchDetail: IMatch) {
    this._id = matchDetail.data.id;
    this._dateCreated = new Date(matchDetail.data.attributes.createdAt);
    this._duration = matchDetail.data.attributes.duration;
    this._gameMode = matchDetail.data.attributes.gameMode as GameMode;
    this._isCustomMatch = matchDetail.data.attributes.isCustomMatch;
    this._map = matchDetail.data.attributes.mapName as MapName;
    this._patchVersion = matchDetail.data.attributes.patchVersion;
    this._seasonState = matchDetail.data.attributes.seasonState as SeasonState;
    this._shardId = matchDetail.data.attributes.shardId as PlatformRegion;

    const participantsMap = new Map<string, Participant>();  // maps participant id to Participant
    const rosterContentsMap = new Map<string, string[]>();  // maps roster id to participant id list
    const participants: Participant[] = [];
    const rosters: Roster[] = [];
    matchDetail.included.forEach(obj => {
      switch (obj.type) {
        case 'asset':
          if (this._asset) {
            throw new Error('Multiple Asset objects found');
          }
          this._asset = new Asset(obj as IAsset);
          break;
        case 'participant':
          const participant = new Participant(obj as IParticipant);
          participantsMap.set(participant.id, participant);
          participants.push(participant);
          break;
        case 'roster':
          const rosterInput = obj as IRoster;
          rosterContentsMap.set(
            rosterInput.id, rosterInput.relationships!.participants.data.map(pData => pData.id));
          const roster = new Roster(rosterInput);
          rosters.push(roster);
          break;
        default:
          throw new Error(`Unexpected object type in match included: ${obj.type}`);
      }
    });

    rosters.forEach(r => {
      const members = rosterContentsMap.get(r.id)!;
      members.forEach(m => {
        const p = participantsMap.get(m)!;
        r.participants.push(p);
      });
    });

    this._participants = participants;
    this._rosters = rosters;
  }

  static async get(api: PubgAPI, matchId: string) {
    const matchesAPI = new MatchesPubgAPI(api);
    const matchData = await matchesAPI.get(matchId);
    return Match.fromDetail(matchData.data);
  }

  static fromDetail(matchDetail: IMatch): Match {
    return new Match(matchDetail);
  }

  //#region getters
  /**
   * Match ID
   */
  get id() {
    return this._id;
  }

  /**
   * Time this match object was stored in the API
   */
  get dateCreated() {
    return this._dateCreated;
  }

  /**
   * Length of the match
   */
  get duration() {
    return this._duration;
  }

  /**
   * Game mode played
   */
  get gameMode() {
    return this._gameMode;
  }

  get isCustomMatch() {
    return this._isCustomMatch;
  }

  get map() {
    return this._map;
  }

  get patchVersion() {
    return this._patchVersion;
  }

  get seasonState() {
    return this._seasonState;
  }

  get shardId() {
    return this._shardId;
  }

  /**
   * The Asset object linked to this Match. Contains the URL for telemetry data.
   */
  get asset(): Asset {
    return this._asset!;
  }

  /**
   * A list of `Participant` objects, one for each player that took part in the Match.
   */
  get participants() {
    return this._participants;
  }

  /**
   * A list of `Roster` objects, one for each team that played the Match.
   */
  get rosters() {
    return  this._rosters;
  }
  //#endregion

  /**
   * Return the Participant object with the given ID or undefined if not found.
   * @param id ID of the player to search
   */
  getParticipantById(id: string) {
    return this._participants.find(p => p.id === id);
  }

  /**
   * Return the Participant object with the given name or undefined if not found.
   * @param name name of the player to search
   */
  getParticipantByName(name: string) {
    return this._participants.find(p => p.name === name);
  }

  /**
   * Return a list of the Participants that won this match.
   */
  getWinners() {
    return this._participants.filter(p => p.winPlace === 1);
  }

  async getTelemetry(api: PubgAPI) {
    const telemetryAPI = new TelemetryPubgAPI(api);
    const response = await telemetryAPI.get(this._asset!);
    const telemetry = new Telemetry(response.data);
    return telemetry;
  }

}

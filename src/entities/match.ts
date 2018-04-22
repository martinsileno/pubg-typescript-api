import { GameMode, MapName, IMatch, IAsset, IParticipant, IRoster, PlatformRegion } from '..';
import { Asset } from './asset';
import { Participant } from './participant';
import { Roster } from './roster';

export class Match {
  private _id: string;
  private _dateCreated: Date;
  private _duration: number;
  private _gameMode: GameMode;
  private _map: MapName;
  private _patchVersion: string | undefined;
  private _shardId: PlatformRegion;

  private _participants: Participant[];
  private _rosters: Roster[];
  private _asset?: Asset;  // should never be undefined as an error would be thrown in constructor

  private constructor(matchDetail: IMatch) {
    this._id = matchDetail.data.id;
    this._dateCreated = new Date(matchDetail.data.attributes.createdAt);
    this._duration = matchDetail.data.attributes.duration;
    this._gameMode = matchDetail.data.attributes.gameMode as GameMode;
    this._map = matchDetail.data.attributes.mapName as MapName;
    this._patchVersion = matchDetail.data.attributes.patchVersion;
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

  static fromDetail(matchDetail: IMatch): Match {
    return new Match(matchDetail);
  }

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

  get map() {
    return this._map;
  }

  get patchVersion() {
    return this._patchVersion;
  }

  get shardId() {
    return this._shardId;
  }

  get participants() {
    return this._participants;
  }

  get rosters() {
    return  this._rosters;
  }

  get asset() {
    return this._asset;
  }
}

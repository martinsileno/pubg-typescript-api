import { ISample, PlatformRegion, PubgAPI, SamplesPubgAPI } from '..';


/**
 * A list of sample match IDs.
 */
export class Sample {
  private _id: string;
  private _dateCreated: Date;
  private _shardId: PlatformRegion;

  private _matchIds: string[];

  private constructor(sampleData: ISample) {
    this._id = sampleData.data.id;
    this._dateCreated = new Date(sampleData.data.attributes.createdAt);
    this._shardId = sampleData.data.attributes.shardId as PlatformRegion;
    const matchIds: string[] = [];
    sampleData.data.relationships.matches.data.forEach(matchData => {
      matchIds.push(matchData.id);
    });
    this._matchIds = matchIds;
  }

  static async get(api: PubgAPI, fromDate?: Date) {
    const samplesAPI = new SamplesPubgAPI(api);
    const samplesData = await samplesAPI.get(fromDate);
    return Sample.fromDetail(samplesData.data);
  }

  static fromDetail(matchDetail: ISample): Sample {
    return new Sample(matchDetail);
  }

  get id() {
    return this._id;
  }

  get dateCreated() {
    return this._dateCreated;
  }

  get shardId() {
    return this._shardId;
  }

  get matchIds() {
    return this._matchIds;
  }
}

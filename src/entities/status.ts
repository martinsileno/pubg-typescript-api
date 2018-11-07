import { IStatus, PubgAPI, StatusPubgAPI } from '..';


/**
 * The status of the api
 */
export class Status {
  private _id: string;
  private _ping: number;
  private _type: string;

  private constructor(statusData: IStatus) {
    this._id = statusData.data.id;
    this._ping = statusData.data.ping;
    this._type = statusData.data.type;
  }

  static async get(api: PubgAPI): Promise<Status> {
    const statusAPI: StatusPubgAPI = new StatusPubgAPI(api);
    const startDate: Date = new Date();

    const statusData = await statusAPI.get();
    const ping: number = (new Date().getTime() - startDate.getTime());
    statusData.data.data.ping = ping;

    return Status.fromDetail(statusData.data);
  }

  static fromDetail(statusDetail: IStatus): Status {
    return new Status(statusDetail);
  }

  get id(): string {
    return this._id;
  }

  get ping(): number {
    return this._ping;
  }

  get type(): string {
    return this._type;
  }

}

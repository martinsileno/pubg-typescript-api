import { IGameResult } from "../../..";
import { Stats } from "./stats";

export class GameResult {
  private _rank: number;
  private _gameResult: string;
  private _teamId: number;
  private _stats: Stats;
  private _accountId: string;

  constructor(result: IGameResult) {
    this._rank = result.rank;
    this._gameResult = result.gameResult;
    this._teamId = result.teamId;
    this._stats = new Stats(result.stats);
    this._accountId = result.accountId;
  }

  get rank() {
    return this._rank;
  }

  get gameResult() {
    return this._gameResult;
  }

  get teamId() {
    return this._teamId;
  }

  get stats() {
    return this._stats;
  }

  get accountId() {
    return this._accountId;
  }
}

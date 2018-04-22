import { IPlayer, IPlayerList, IPlayerObject } from '../interfaces/player';


/**
 * 
 */
export class Player {
  private _id: string;
  private _name: string;
  private _shardId: string;
  // private _matches: Match[] | undefined;

  private constructor(player: IPlayerObject) {
    this._id = player.id;
    this._name = player.attributes.name;
    this._shardId = player.attributes.shardId;
    // this._matches = undefined;
  }

  /**
   * 
   * @param playerDetail 
   */
  static fromDetail(playerDetail: IPlayer): Player {
    return new Player(playerDetail.data);
  }

  /**
   * 
   * @param playerList 
   */
  static fromList(playerList: IPlayerList): Player[] {
    const players: Player[] = [];
    playerList.data.forEach(playerData => {
      const player = new Player(playerData);
      players.push(player);
    });
    return players;
  }

  /**
   * 
   */
  get id() {
    return this._id;
  }

  /**
   * 
   */
  get name() {
    return this._name;
  }

  /**
   * 
   */
  // getMatches() {
  //   if (this._matches !== undefined) {
  //     return this._matches;
  //   }
  //   // TODO:
  // }

}

import { ICharacter } from '../../..';

import { Location } from './location';


export class Character {
  private _name: string;
  private _teamId: number;
  private _health: number;
  private _location: Location;
  private _ranking: number;
  private _accountId: string;

  constructor(character: ICharacter) {
    this._name = character.name;
    this._teamId = character.teamId;
    this._health = character.health;
    this._location = new Location(character.location);
    this._ranking = character.ranking;
    this._accountId = character.accountId;
  }

  get name(): string {
    return this._name;
  }

  get teamId(): number {
    return this._teamId;
  }

  get health(): number {
    return this._health;
  }

  get location(): Location {
    return this._location;
  }

  get ranking(): number {
    return this._ranking;
  }

  get accountId(): string {
    return this._accountId;
  }
}

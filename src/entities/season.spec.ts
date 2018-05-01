import { expect } from 'chai';
import 'mocha';

import { ISeasonList } from '..';

import { Season } from './season';


/* tslint:disable */
const API_RESPONSE: ISeasonList = {
  "data": [
    {
      "type": "season",
      "id": "division.bro.official.2018-03",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.2018-04",
      "attributes": {
        "isCurrentSeason": true,
        "isOffseason": false
      }
    }
  ],
  "links": {
    "self": "https://api.playbattlegrounds.com/shards/pc-eu/seasons"
  },
  "meta": {}
}
/* tslint:enable */

describe('Season entity', () => {
  it('should initialize a list of Season from API list response', () => {
    const seasons = Season.fromList(API_RESPONSE);
    expect(seasons).to.be.an('Array');
    expect(seasons).to.have.length(2);
    const [s1, s2] = seasons;
    expect(s1.id).to.eq('division.bro.official.2018-03');
    expect(s1.isCurrentSeason).to.be.false;
    expect(s1.isOffSeason).to.be.false;
    expect(s2.isCurrentSeason).to.be.true;
    expect(s2.isOffSeason).to.be.false;
  });
});

import { expect } from 'chai';
import 'mocha';

import { ISample, PlatformRegion } from '..';

import { Sample } from './sample';


/* tslint:disable */
const API_RESPONSE: ISample = {
  "data": {
    "type": "sample",
    "id": "258d93e8-9250-467b-84e0-13444d3e4080",
    "attributes": {
      "createdAt": "2018-04-25T23:57:50Z",
      "titleId": "bluehole-pubg",
      "shardId": "pc-na"
    },
    "relationships": {
      "matches": {
        "data": [
          {
            "type": "match",
            "id": "83f01a5f-9664-4e4d-be60-f6a5ba332f40"
          },
          {
            "type": "match",
            "id": "81dff04f-115c-4edd-b2ef-ba9eafeb683d"
          },
          {
            "type": "match",
            "id": "db4c21ef-84c7-4bdb-97a4-2f4a6f40361a"
          }
          // *snip*
        ]
      }
    }
  }
}
/* tslint:enable */

describe('Sample entity', () => {

  it('should initialize Sample object from response', () => {
    const sample = Sample.fromDetail(API_RESPONSE);
    expect(sample.id).to.equal('258d93e8-9250-467b-84e0-13444d3e4080');
    expect(sample.dateCreated).to.deep.equal(new Date('2018-04-25T23:57:50Z'));
    expect(sample.shardId).to.equal(PlatformRegion.PC_NA);
    expect(sample.matchIds).to.eql([
      '83f01a5f-9664-4e4d-be60-f6a5ba332f40',
      '81dff04f-115c-4edd-b2ef-ba9eafeb683d',
      'db4c21ef-84c7-4bdb-97a4-2f4a6f40361a',
    ]);
  });

});

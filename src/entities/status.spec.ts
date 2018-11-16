import { expect } from 'chai';
import 'mocha';

import { IStatus, Status } from '..';


/* tslint:disable */
const API_RESPONSE: IStatus = {
  "data": {
    "type": "status",
    "id": "pubg-api",
    "ping": 20
  }
}
/* tslint:enable */

describe('Status entity', () => {

  it('should initialize Status object from response', () => {
    const status: Status = Status.fromDetail(API_RESPONSE);
    expect(status.id).to.equal('pubg-api');
    expect(status.type).to.equal('status');
    expect(status.ping).to.equal(20);
  });

});

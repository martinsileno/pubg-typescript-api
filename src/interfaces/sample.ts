import { ISimpleAPIObject } from './common';


/**
 * A list of sampled Match IDs
 */
export interface ISample {
  data: {
    type: 'sample';
    id: string;
    attributes: {
      createdAt: string;
      shardId: string;
      titleId: string;
    };
    relationships: {
      matches: {
        data: ISimpleAPIObject[];
      }
    };
  };
}

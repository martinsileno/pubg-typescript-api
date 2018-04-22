export interface ISimpleAPIObject {
  type: string;
  id: string;
}

export interface IAPIObject<T, R = void> extends ISimpleAPIObject {
  attributes: T;
  relationships?: R;
}

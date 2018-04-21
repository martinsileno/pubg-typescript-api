export interface SimpleAPIObject {
  type: string;
  id: string;
}

export interface APIObject<T, R = void> extends SimpleAPIObject {
  attributes: T;
  relationships?: R;
}

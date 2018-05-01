export interface ISeason {
  type: 'season';
  id: string;
  attributes: {
    isCurrentSeason: boolean;
    isOffseason: boolean;
  };
}

export interface ISeasonList {
  data: ISeason[];
  links: {
    self: string;
  };
  meta: {};
}

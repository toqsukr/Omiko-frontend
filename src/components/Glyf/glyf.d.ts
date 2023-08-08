export interface IGlyf {
  type: GlyfType | string;
}

export enum GlyfType {
  ADVANTAGE = 'advantage',
  DELIVERY = 'delivery',
  ABOUT = 'about',
  NONE = 'none',
}

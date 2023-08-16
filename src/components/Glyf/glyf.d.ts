export interface IClickGlyf extends IStaticGlyf {
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

export interface IStaticGlyf {
  glyfStyleID?: string;
}

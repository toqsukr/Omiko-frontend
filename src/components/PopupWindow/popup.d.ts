export interface IPopupWindow {
  windowVisualization: IShow;
  windowStyleID?: string;
}

export interface IShow {
  isShow: boolean;
  setShow: (value: boolean) => void;
}

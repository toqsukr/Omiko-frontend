export interface IPopupWindow {
  windowVisualization: IShow;
  windowStyle: string;
}

export interface IShow {
  isShow: boolean;
  setShow: (value: boolean) => void;
}

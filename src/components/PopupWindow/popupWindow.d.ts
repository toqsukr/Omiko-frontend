export interface IPopupWindow extends IShow {
  windowStyleID?: string;
}

export interface IShow {
  isShow: boolean;
  setShow: (value: boolean) => void;
}

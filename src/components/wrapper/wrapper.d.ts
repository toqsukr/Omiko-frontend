import { IPopupWindow } from '../popupWindow/popup';

interface IWrapper extends IPopupWindow {
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

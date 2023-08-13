import { IPopupWindow } from '../popupWindow/popupWindow';

interface IWrapper extends IPopupWindow {
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

import css from './PopupWindow.module.css';
import classnames from 'classnames';
import { ReactSVG } from 'react-svg';
import DeliveryDetail from '../DeliveryDetail/DeliveryDetail';

interface IPopupWindow {
  isShow: boolean;
  setShow: (value: boolean) => void;
}

export default function PopupWindow({ isShow, setShow }: IPopupWindow) {
  return (
    <>
      <div
        className={classnames({
          [css.mainSideContainer]: true,
          [css.locked]: isShow,
        })}
        onClick={() => setShow(false)}
      ></div>
      <div className={css.mainSideWindow}>
        <DeliveryDetail />
        <ReactSVG
          id={css.close}
          src='icons/close.svg'
          onClick={() => setShow(false)}
        />
      </div>
    </>
  );
}

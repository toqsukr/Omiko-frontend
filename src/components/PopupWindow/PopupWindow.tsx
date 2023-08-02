import css from './PopupWindow.module.css';
import { useTransition, animated } from 'react-spring';
import { ReactSVG } from 'react-svg';
import DeliveryDetail from '../DeliveryDetail/DeliveryDetail';
interface IPopupWindow {
  isShow: boolean;
  setShow: (value: boolean) => void;
}

export default function PopupWindow({ isShow, setShow }: IPopupWindow) {
  const transition = useTransition(isShow, {
    from: {
      scale: 0,
      opacity: 0,
    },
    enter: {
      scale: 1,
      opacity: 1,
      transform: 'translateY(30%)',
    },
    leave: {
      scale: 0,
      opacity: 0,
      transform: 'translateY(0)',
    },
  });
  return (
    <>
      {transition(
        (style, isShow) =>
          isShow && (
            <>
              <animated.div
                className={css.mainSideContainer}
                style={{ opacity: style.opacity }}
                onClick={() => setShow(false)}
              ></animated.div>
              <animated.div style={style} className={css.mainSideWindow}>
                <DeliveryDetail />
                <ReactSVG
                  id={css.close}
                  src='icons/close.svg'
                  onClick={() => setShow(false)}
                />
              </animated.div>
            </>
          )
      )}
    </>
  );
}

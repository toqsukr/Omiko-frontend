import { FC, PropsWithChildren } from 'react';
import { useTransition, animated } from 'react-spring';
import { ReactSVG } from 'react-svg';
import { popupAnimation } from './popupWindow.animation';
import type { IPopupWindow } from './popupWindow';
import css from './PopupWindow.module.css';

const PopupWindow: FC<PropsWithChildren<IPopupWindow>> = ({ isShow, setShow, windowStyleID, children }) => {
  const transition = useTransition(isShow, popupAnimation);
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
              <animated.div style={style} id={windowStyleID}>
                {children}
                <ReactSVG id={css.close} src="icons/close.svg" onClick={() => setShow(false)} />
              </animated.div>
            </>
          )
      )}
    </>
  );
};

export default PopupWindow;

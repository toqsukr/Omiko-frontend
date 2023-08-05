import css from './PopupWindow.module.css';
import { ReactNode } from 'react';
import { useTransition, animated } from 'react-spring';
import { ReactSVG } from 'react-svg';

interface IPopupWindow {
  isShow: boolean;
  setShow: (value: boolean) => void;
  windowStyle: string;
  children: ReactNode;
}

export default function PopupWindow({
  isShow,
  setShow,
  children,
  windowStyle,
}: IPopupWindow) {
  const transition = useTransition(isShow, {
    from: {
      scale: 0,
      opacity: 0,
      transform: 'translateY(-50%)',
    },
    enter: {
      scale: 1,
      opacity: 1,
    },
    leave: {
      scale: 0,
      opacity: 0,
      transform: 'translateY(-50%)',
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
              <animated.div style={style} className={windowStyle}>
                {children}
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

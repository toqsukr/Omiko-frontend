import { FC, PropsWithChildren } from 'react';
import { useTransition, animated } from 'react-spring';
import { ReactSVG } from 'react-svg';

import type { IPopupWindow } from './popup';
import css from './PopupWindow.module.css';

const PopupWindow: FC<PropsWithChildren<IPopupWindow>> = ({
  windowVisualization,
  windowStyleID,
  children,
}) => {
  const { isShow, setShow } = windowVisualization;

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
              <animated.div style={style} id={windowStyleID}>
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
};

export default PopupWindow;

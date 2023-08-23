import CloseIcon from '@components/ui/icons/CloseIcon.component';
import { forwardRef, PropsWithChildren } from 'react';
import { animated, useTransition } from 'react-spring';
import { IPopupWindow } from './popupWindow';
import { popupAnimation } from './popupWindow.animation';
import css from './PopupWindow.module.css';

const PopupWindow = forwardRef<HTMLDivElement, PropsWithChildren<IPopupWindow>>(
  ({ isShow, setShow, windowStyleID, children }, ref) => {
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
                <animated.div ref={ref} style={style} id={windowStyleID}>
                  {children}
                  <CloseIcon id={css.close} onClick={() => setShow(false)} />
                </animated.div>
              </>
            )
        )}
      </>
    );
  }
);
export default PopupWindow;

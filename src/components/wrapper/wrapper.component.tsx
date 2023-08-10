import { FC, PropsWithChildren } from 'react';
import { useTransition, animated } from 'react-spring';
import { IPopupWindow } from '../popupWindow/popup';

import css from './wrapper.module.css';

const Wrapper: FC<PropsWithChildren<IPopupWindow>> = ({
  windowVisualization,
  windowStyleID,
  children,
}) => {
  const { isShow, setShow } = windowVisualization;
  const wrapperTransition = useTransition(isShow, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
    config: {
      duration: 200,
    },
  });
  return (
    <>
      {wrapperTransition(
        (style, isShow) =>
          isShow && (
            <animated.div
              className={css.wrapper}
              id={windowStyleID}
              onMouseLeave={() => setShow(false)}
              style={style}
            >
              {children}
            </animated.div>
          )
      )}
    </>
  );
};

export default Wrapper;

import { FC, PropsWithChildren } from 'react';
import { useTransition, animated } from 'react-spring';

import css from './wrapper.module.css';
import { IWrapper } from './wrapper';

const Wrapper: FC<PropsWithChildren<IWrapper>> = ({
  isShow,
  windowStyleID,
  onMouseLeave,
  children,
}) => {
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
              onMouseLeave={onMouseLeave}
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

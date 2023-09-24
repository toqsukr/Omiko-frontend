import { forwardRef, memo, PropsWithChildren } from 'react';
import { animated, useTransition } from 'react-spring';
import { wrapperAnimation } from './wrapper.animation';

import { IWrapper } from './wrapper';
import css from './wrapper.module.css';

const Wrapper = forwardRef<HTMLDivElement, PropsWithChildren<IWrapper>>(
  ({ isShow, windowStyleID, onMouseLeave, children }, ref) => {
    const wrapperTransition = useTransition(isShow, wrapperAnimation);
    return (
      <>
        {wrapperTransition(
          (style, isShow) =>
            isShow && (
              <animated.div
                ref={ref}
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
  }
);

export default memo(Wrapper);

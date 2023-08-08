import { FC, PropsWithChildren } from 'react';
import classnames from 'classnames';
import { scroller } from 'react-scroll';
import css from './Glyf.module.css';

export interface IGlyf {
  type: GlyfType | string;
}

export enum GlyfType {
  ADVANTAGE = 'advantage',
  DELIVERY = 'delivery',
  ABOUT = 'about',
  NONE = 'none',
}

function handleClick(type: string | undefined) {
  switch (type) {
    case GlyfType.ADVANTAGE:
      scroller.scrollTo(GlyfType.ADVANTAGE, {
        offset: -70,
        duration: 800,
        smooth: 'easeInOutQuart',
      });
      break;
    case GlyfType.DELIVERY:
      scroller.scrollTo(GlyfType.DELIVERY, {
        offset: -80,
        duration: 800,
        smooth: 'easeInOutQuart',
      });
      break;
    case GlyfType.ABOUT:
      scroller.scrollTo(GlyfType.ABOUT, {
        offset: -25,
        duration: 800,
        smooth: 'easeInOutQuart',
      });
      break;
  }
}

const Glyf: FC<PropsWithChildren<{ glyfInfo?: IGlyf }>> = ({
  glyfInfo,
  children,
}) => {
  const type = glyfInfo ? glyfInfo.type : GlyfType.NONE;
  return (
    <div
      className={classnames({
        [css.mainContainer]: true,
        [css.clickable]:
          type === GlyfType.ADVANTAGE ||
          type === GlyfType.DELIVERY ||
          type === GlyfType.ABOUT,
      })}
      onClick={() => handleClick(type)}
    >
      {children}
    </div>
  );
};

export default Glyf;

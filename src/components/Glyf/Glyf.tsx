import { ReactNode } from 'react';
import classnames from 'classnames';
import { scroller } from 'react-scroll';
import css from './Glyf.module.css';

export interface IGlyf {
  children?: ReactNode;
  type?: string;
}

function handleClick(type: string | undefined) {
  switch (type) {
    case 'advantage':
      scroller.scrollTo('advantage', {
        offset: -70,
        duration: 800,
        smooth: 'easeInOutQuart',
      });
      break;
    case 'delivery':
      scroller.scrollTo('delivery', {
        offset: -80,
        duration: 800,
        smooth: 'easeInOutQuart',
      });
      break;
    case 'about':
      scroller.scrollTo('about', {
        offset: -25,
        duration: 800,
        smooth: 'easeInOutQuart',
      });
      break;
  }
}

export default function Glyf({ type, children }: IGlyf) {
  return (
    <div
      className={classnames({
        [css.mainContainer]: true,
        [css.clickable]:
          type === 'advantage' || type === 'delivery' || type === 'about',
      })}
      onClick={() => handleClick(type)}
    >
      {children}
    </div>
  );
}

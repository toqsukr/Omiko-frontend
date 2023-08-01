import { ReactNode } from 'react';
import classnames from 'classnames';
import css from './Glyf.module.css';

export interface IGlyf {
  children?: ReactNode;
  type?: string;
  title?: string;
  description?: string;
}

function handleClick(type: string | undefined) {
  switch (type) {
    case 'advantage':
      console.log('scroll to advantage');
      break;
    case 'delivery':
      console.log('scroll to delivery');
      break;
    case 'about':
      console.log('scroll to about');
      break;
  }
}

export default function Glyf({ type, title, description }: IGlyf) {
  return (
    <div
      className={classnames({
        [css.mainContainer]: true,
        [css.clickable]:
          type === 'advantage' || type === 'delivery' || type === 'about',
      })}
      onClick={() => handleClick(type)}
    >
      {title && <h1 className={css.title}>{title}</h1>}
      <div className={css.descriptionContainer}>
        {description && <p className={css.description}>{description}</p>}
      </div>
    </div>
  );
}

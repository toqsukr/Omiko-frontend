import { ReactNode } from 'react';
import css from './Glyf.module.css';

export interface IGlyf {
  children?: ReactNode;
  title?: string;
  description?: string;
}

export default function Glyf({ title, description }: IGlyf) {
  return (
    <div className={css.mainContainer}>
      {title && <h1 className={css.title}>{title}</h1>}
      <div className={css.descriptionContainer}>
        {description && <p className={css.description}>{description}</p>}
      </div>
    </div>
  );
}

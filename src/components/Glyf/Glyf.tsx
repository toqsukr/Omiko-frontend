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
      <h1 className={css.title}>{title ? title : ''}</h1>
      <div className={css.descriptionContainer}>
        <p className={css.description}>{description ? description : ''}</p>
      </div>
    </div>
  );
}

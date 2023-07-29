import { ReactNode } from 'react';
import css from './Glyf.module.css';

interface IGlyf {
  children: ReactNode;
}

export default function Glyf({ children }: IGlyf) {
  return <div className={css.mainContainer}>{children}</div>;
}

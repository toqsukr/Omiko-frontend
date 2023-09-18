import { FC, PropsWithChildren } from 'react';
import css from './BarLayout.module.css';

const BarLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className={css.mainContainer}>{children}</div>;
};

export default BarLayout;

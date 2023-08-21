import { FC, PropsWithChildren } from 'react';
import css from './Icon.module.css';

const Icon: FC<PropsWithChildren> = ({ children }) => {
  return <span className={css.iconContainer}>{children}</span>;
};

export default Icon;

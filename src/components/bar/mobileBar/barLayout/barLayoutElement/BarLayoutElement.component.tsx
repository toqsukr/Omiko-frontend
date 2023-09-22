import { FC, PropsWithChildren } from 'react';
import css from './BarLayoutElement.module.css';

const BarLayoutElement: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={css.elementContainer}>
      <p className={css.elementText}>{children}</p>
    </div>
  );
};

export default BarLayoutElement;

import { FC, PropsWithChildren } from 'react';
import { IGlyf } from './glyf.d';

import css from './Glyf.module.css';

const Glyf: FC<PropsWithChildren<IGlyf>> = ({
  glyfStyleID,
  onClick,
  children,
}) => {
  return (
    <div className={css.mainContainer} onClick={onClick} id={glyfStyleID}>
      {children}
    </div>
  );
};

export default Glyf;

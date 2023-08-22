import { FC, PropsWithChildren } from 'react';
import { IGlyf } from './glyf';

import css from './Glyf.module.css';

const Glyf: FC<PropsWithChildren<IGlyf>> = ({ id, onClick, children }) => {
  return (
    <div className={css.mainContainer} onClick={onClick} id={id}>
      {children}
    </div>
  );
};

export default Glyf;

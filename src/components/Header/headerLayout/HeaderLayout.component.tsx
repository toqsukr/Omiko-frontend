import { FC, PropsWithChildren } from 'react';

import css from './HeaderLayout.module.css';

const HeaderLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header className={css.headerContainer}>
        <div className={css.headerInnerContainer}>{children}</div>
      </header>
    </>
  );
};

export default HeaderLayout;

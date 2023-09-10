import { FC, PropsWithChildren } from 'react';

import css from './Header.module.css';

const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header className={css.headerContainer}>
        <div className={css.headerInnerContainer}>{children}</div>
      </header>
    </>
  );
};

export default Header;

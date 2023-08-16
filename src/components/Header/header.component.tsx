import { FC, useContext } from 'react';
import ContactInfo from './contactInfo/contactInfo.component';
import Sign from '@components/sign/sign.component';
import LogoNav from './nav/logoNav/logoNav.component';
import Profile from './profile/profile.component';
import Location from './location/location.component';
import { SignShowContext } from '@providers/showProviders/SignShowProvider';
import HeaderShowProvider from '@providers/showProviders/unitProviders/HeaderShowProvider';

import css from './Header.module.css';

const Header: FC = () => {
  const { sign, setSign } = useContext(SignShowContext);
  return (
    <HeaderShowProvider>
      <header className={css.headerContainer}>
        <div className={css.headerInnerContainer}>
          <div className={css.headerUpperContainer}>
            <Location />
            <ContactInfo />
            <Profile isShow={sign} setShow={setSign} />
          </div>
          <LogoNav />
        </div>
      </header>
      <Sign isShow={sign} setShow={setSign} />
    </HeaderShowProvider>
  );
};

export default Header;

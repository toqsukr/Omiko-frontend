import Sign from '@components/sign/sign.component';
import { SignShowContext } from '@providers/showProviders/SignShowProvider';
import { FC, useContext } from 'react';
import ContactInfo from './contactInfo/contactInfo.component';
import Location from './location/location.component';
import LogoNav from './nav/logoNav/logoNav.component';
import Profile from './profile/profile.component';

import css from './Header.module.css';

const Header: FC = () => {
  const { sign, setSign } = useContext(SignShowContext);
  return (
    <>
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
    </>
  );
};

export default Header;

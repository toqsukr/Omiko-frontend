import 'typeface-inter';
import { FC } from 'react';
import ContactInfo from '../contactInfo/contactInfo.component';
import LogoNav from '../nav/logoNav/logoNav.component';
import LocationWrapper from '../locationWrapper/locationWrapper.component';
import Profile from '../profile/profile.component';
import Sign from '../sign/sign.component';
import Location from '../location/location.component';

import type { IShow } from '../popupWindow/popup';
import css from './Header.module.css';

const Header: FC<IShow> = ({ isShow, setShow }) => {
  return (
    <>
      <header className={css.headerContainer}>
        <div className={css.headerInnerContainer}>
          <div className={css.headerUpperContainer}>
            <Location />
            <ContactInfo />
            <Profile isShow={isShow} setShow={setShow} />
          </div>
          <LogoNav />
          <LocationWrapper />
        </div>
      </header>
      <Sign isShow={isShow} setShow={setShow} />
    </>
  );
};

export default Header;

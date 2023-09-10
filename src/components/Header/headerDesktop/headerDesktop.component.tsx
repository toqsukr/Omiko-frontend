import Sign from '@components/sign/sign.component';
import { SignShowContext } from '@providers/showProviders/SignShowProvider';
import { FC, useContext } from 'react';
import ContactInfo from '../contactInfo/contactInfo.component';
import Header from '../header.component';
import Location from '../location/location.component';
import LogoNav from '../nav/logoNav/logoNav.component';
import Profile from '../profile/profile.component';
import css from './headerDesktop.module.css';

const HeaderDesktop: FC = () => {
  const { sign, setSign } = useContext(SignShowContext);
  return (
    <>
      <Header>
        <div className={css.headerUpperContainer}>
          <Location />
          <ContactInfo />
          <Profile isShow={sign} setShow={setSign} />
        </div>
        <LogoNav />
      </Header>
      <Sign isShow={sign} setShow={setSign} />
    </>
  );
};

export default HeaderDesktop;

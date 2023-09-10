import LogoMobile from '@components/ui/icons/logoMobile.component';
import { FC } from 'react';
import { scroller } from 'react-scroll';
import Header from '../header.component';
import Location from '../location/location.component';
import { mobileTopScrollAnimation } from './header.animation';
import css from './headerMobile.module.css';

const HeaderMobile: FC = () => {
  return (
    <Header>
      <div id={css.headerMobile}>
        <div id={css.logoMobileContainer}>
          <LogoMobile
            id={css.logoMobile}
            onClick={() => scroller.scrollTo('top', mobileTopScrollAnimation)}
          />
        </div>
        <div id={css.locationMobileContainer}>
          <Location />
        </div>
      </div>
    </Header>
  );
};

export default HeaderMobile;

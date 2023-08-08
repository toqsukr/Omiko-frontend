import 'typeface-inter';
import { FC } from 'react';
import { useScroll } from '../../hooks/useScroll.hook';
import ContactInfo from '../contactInfo/contactInfo.component';
import LogoNav from '../nav/logoNav/logoNav.component';
import LocationWrapper from '../locationWrapper/locationWrapper.component';
import classnames from 'classnames';
import { ReactSVG } from 'react-svg';
import { scroller } from 'react-scroll';
import Profile from '../profile/profile.component';
import Sign from '../sign/sign.component';
import Location from '../location/location.component';

import type { ISign } from '../sign/sign';
import css from './Header.module.css';

const Header: FC<ISign> = ({ sign, setSign }) => {
  const scrollDirection = useScroll();
  return (
    <>
      <header className={css.headerContainer}>
        <div
          className={classnames({
            [css.headerInnerContainer]: scrollDirection === 'up',
            [css.headerInnerContainerHide]: scrollDirection === 'down',
          })}
        >
          {scrollDirection === 'down' && (
            <>
              <Location />
              <ReactSVG
                id={css.logo}
                src='icons/fulllogo.svg'
                onClick={() =>
                  scroller.scrollTo('top', {
                    offset: -124,
                    duration: 800,
                    smooth: 'easeInOutQuart',
                  })
                }
              />
              <Profile sign={sign} setSign={setSign} />
            </>
          )}

          {scrollDirection === 'up' && (
            <>
              <div className={css.headerUpperContainer}>
                <Location />
                <ContactInfo />
                <Profile sign={sign} setSign={setSign} />
              </div>
              <LogoNav />
              <LocationWrapper />
            </>
          )}
        </div>
      </header>
      <Sign sign={sign} setSign={setSign} />
    </>
  );
};

export default Header;

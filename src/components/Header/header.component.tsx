import css from './Header.module.css';
import 'typeface-inter';
import { FC } from 'react';
import { useScroll } from '../../hooks/useScroll.hook';
import ContactInfo from '../ContactInfo/ContactInfo';
import LogoNav from '../Nav/LogoNav/LogoNav';
import LocationWrapper from '../LocationWrapper/LocationWrapper';
import classnames from 'classnames';
import { ReactSVG } from 'react-svg';
import { scroller } from 'react-scroll';
import Profile from '../Profile/Profile';
import Sign from '../Sign/Sign';
import { ISign } from '../Sign/Sign';
import Location from '../Location/Location';

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

import css from './Header.module.css';
import 'typeface-inter';
import { useScroll } from '../../hooks/useScroll.hook';
import ContactInfo from '../ContactInfo/ContactInfo';
import LogoNav from '../Nav/LogoNav/LogoNav';
import LocationWrapper from '../LocationWrapper/LocationWrapper';
import classnames from 'classnames';
import { ReactSVG } from 'react-svg';
import { scroller } from 'react-scroll';
import Profile from '../Profile/Profile';
import Location from '../Location/Location';

export default function Header() {
  const scrollDirection = useScroll();
  return (
    <>
      <div className={css.headerContainer}>
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
                src='icons/fullicon.svg'
                onClick={() =>
                  scroller.scrollTo('top', {
                    offset: -124,
                    duration: 800,
                    smooth: 'easeInOutQuart',
                  })
                }
              />
              <Profile />
            </>
          )}

          {scrollDirection === 'up' && (
            <>
              <div className={css.headerUpperContainer}>
                <Location />
                <ContactInfo />
                <Profile />
              </div>
              <LogoNav />
              <LocationWrapper />
            </>
          )}
        </div>
      </div>
    </>
  );
}

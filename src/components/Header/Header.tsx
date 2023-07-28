import css from './Header.module.css';
import 'typeface-inter';
import { useContext } from 'react';
import { LocationContext } from '../../providers/LocationProvider';
import ContactInfo from '../ContactInfo/ContactInfo';
import LogoNav from '../Nav/LogoNav/LogoNav';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Location from '../Location/Location';

export default function Header() {
  const { location, setIsHide } = useContext(LocationContext);

  return (
    <>
      <div className={css.iconContainer}>
        <div className={css.headerContainer}>
          <div
            className={css.headerInnerContainer}
            onMouseLeave={() => setIsHide(true)}
          >
            <Location />
            <ContactInfo>{location.phoneNumbers[0]}</ContactInfo>
            <ShoppingCart />
          </div>
          <LogoNav />
        </div>
      </div>
    </>
  );
}

import css from './Header.module.css';
import 'typeface-inter';
import { useContext } from 'react';
import { LocationContext } from '../../providers/LocationProvider';
import ContactInfo from '../ContactInfo/ContactInfo';
import LogoNav from '../Nav/LogoNav/LogoNav';
import LocationWrapper from '../LocationWrapper/LocationWrapper';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Location from '../Location/Location';

// interface IHeader {
//   scrolledDown: boolean;
// }

export default function Header() {
  const { location } = useContext(LocationContext);

  return (
    <>
      <div className={css.headerContainer}>
        <div className={css.headerInnerContainer}>
          <div className={css.headerUpperContainer}>
            <Location />
            <ContactInfo>{location.phoneNumbers[0]}</ContactInfo>
            <ShoppingCart />
          </div>
          <LocationWrapper />
          <LogoNav />
        </div>
      </div>
    </>
  );
}

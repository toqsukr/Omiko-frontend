import css from './Header.module.css';
import 'typeface-inter';
import ContactInfo from '../ContactInfo/ContactInfo';
import LogoNav from '../Nav/LogoNav/LogoNav';
import LocationWrapper from '../LocationWrapper/LocationWrapper';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Location from '../Location/Location';

export default function Header() {
  return (
    <>
      <div className={css.headerContainer}>
        <div className={css.headerInnerContainer}>
          <div className={css.headerUpperContainer}>
            <Location />
            <ContactInfo />
            <ShoppingCart />
          </div>
          <LocationWrapper />
          <LogoNav />
        </div>
      </div>
    </>
  );
}

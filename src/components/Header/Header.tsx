import css from './Header.module.css';
import 'typeface-inter';
import { useContext } from 'react';
import { LocationContext } from '../../providers/LocationProvider';
import ContactInfo from '../ContactInfo/ContactInfo';
import LogoNav from '../Nav/LogoNav/LogoNav';
import LocationWrapper from '../LocationWrapper/LocationWrapper';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Location from '../Location/Location';

interface IHeader {
  scrolledDown: boolean;
}

export default function Header({ scrolledDown }: IHeader) {
  const { location, isHide } = useContext(LocationContext);

  return (
    <>
      <div
        className={
          scrolledDown ? css.headerContainerHidden : css.headerContainer
        }
      >
        <div className={css.headerInnerContainer}>
          <div className={css.headerUpperContainer}>
            <Location />
            <ContactInfo>{location.phoneNumbers[0]}</ContactInfo>
            <ShoppingCart />
          </div>
          {isHide || <LocationWrapper />}
          <LogoNav />
        </div>
      </div>
    </>
  );
}

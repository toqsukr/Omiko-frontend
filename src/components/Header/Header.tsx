import css from './Header.module.css';
import 'typeface-inter';
import { useContext } from 'react';
import { LocationContext } from '../../providers/LocationProvider';
import ContactInfo from '../ContactInfo/ContactInfo';
import LogoNav from '../Nav/LogoNav/LogoNav';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Location from '../Location/Location';

interface IHeader {
  scrolledDown: boolean;
}

export default function Header({ scrolledDown }: IHeader) {
  const { location, setIsHide } = useContext(LocationContext);

  return (
    <>
      <div
        className={
          scrolledDown ? css.headerContainerHidden : css.headerContainer
        }
      >
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
    </>
  );
}

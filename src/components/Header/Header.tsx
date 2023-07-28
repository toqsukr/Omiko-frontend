import css from './Header.module.css';
import 'typeface-inter';
import { useContext } from 'react';
import { LocationContext } from '../../providers/LocationProvider';
import { ReactSVG } from 'react-svg';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Location from '../Location/Location';

export default function Header() {
  const { setIsHide } = useContext(LocationContext);

  return (
    <>
      {/* <ReactSVG id={css.icon} src='icons/fullicon.svg'></ReactSVG> */}
      <div className={css.iconContainer}>
        <div className={css.headerContainer}>
          <div
            className={css.headerInnerContainer}
            onMouseLeave={() => setIsHide(true)}
          >
            <Location />
            <ShoppingCart />
          </div>
        </div>
        {/* <div className={css.iconInnerContainer}></div> */}
      </div>
    </>
  );
}

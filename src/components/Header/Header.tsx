import css from './Header.module.css';
import 'typeface-inter';
import { ReactSVG } from 'react-svg';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Location from '../Location/Location';

export default function Header() {
  return (
    <>
      {/* <ReactSVG id={css.icon} src='icons/fullicon.svg'></ReactSVG> */}
      <div className={css.iconContainer}>
        <div className={css.headerContainer}>
          <div className={css.headerInnerContainer}>
            <Location />
            <ShoppingCart />
          </div>
        </div>
        <div className={css.iconInnerContainer}></div>
      </div>
    </>
  );
}

import css from './Header.module.css';
import 'typeface-inter';
import { ReactSVG } from 'react-svg';

export default function Header() {
  return (
    <div className={css.headerContainer}>
      <div className={css.locationContainer}>
        <ReactSVG id={css.locationPoint} src='icons/location.svg' />
        <p>Санкт-Петербург</p>
      </div>
      <div className={css.iconContainer}>
        <ReactSVG id={css.icon} src='icons/fullicon.svg'></ReactSVG>
      </div>
      <div className={css.shoppingCartContainer}>
        <ReactSVG id={css.shoppingCart} src='icons/shoppingcart.svg' />
      </div>
    </div>
  );
}

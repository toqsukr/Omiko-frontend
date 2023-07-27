import { ReactSVG } from 'react-svg';
import css from './ShoppingCart.module.css';

export default function ShoppingCart() {
  return (
    <div className={css.shoppingCartContainer}>
      <ReactSVG id={css.shoppingCart} src='icons/shoppingcart.svg' />
    </div>
  );
}

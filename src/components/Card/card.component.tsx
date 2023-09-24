import { FC } from 'react';

import { useActions } from '@hooks/useActions.hook';
import { useCart } from '@hooks/useCart.hook';
import { trimString } from '@utils/function';
import css from './Card.module.css';
import type { ICard } from './card';

const Card: FC<ICard> = ({ id, price, title, url }) => {
  const { addToCart, removeFromCart } = useActions();
  const { cart, isAtCart } = useCart();
  return (
    <div className={css.cardContainer}>
      <div className={css.imageContainer}>
        <img id={css.image} src={url ? url : ''} alt="" />
      </div>
      <div className={css.cardInfo}>
        <p id={css.price}>{price ? price : 'Цена'}</p>
        <p id={css.title} title={title}>
          {title ? trimString(title, 28) : 'Название'}
        </p>
      </div>
      <div className={css.toCartContainer}>
        <a
          type="button"
          className={css.toCartButton}
          onClick={() => (isAtCart(cart, id) ? removeFromCart(id) : addToCart({ id, price, title, url }))}
        >
          {isAtCart(cart, id) ? 'Удалить из корзины' : 'В корзину'}
        </a>
      </div>
    </div>
  );
};

export default Card;

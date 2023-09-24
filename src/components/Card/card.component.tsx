import { FC } from 'react';

import { useActions } from '@hooks/useActions.hook';
import { useCart } from '@hooks/useCart.hook';
import { trimString } from '@utils/function';
import classNames from 'classnames';
import css from './Card.module.css';
import type { ICard } from './card';
import CardImage from './cardImage/CardImage.component';

const Card: FC<ICard> = ({ id, price, title, url }) => {
  const { addToCart, removeFromCart } = useActions();
  const { cart, isAtCart } = useCart();
  return (
    <div className={css.cardContainer}>
      <CardImage url={url} />
      <div className={css.cardInfo}>
        <p id={css.price}>{price ? price : 'Цена'}</p>
        <p id={css.title} title={title}>
          {title ? trimString(title, 28) : 'Название'}
        </p>
      </div>
      <div className={css.toCartContainer}>
        <a
          type="button"
          className={classNames({ [css.toCartButton]: true, [css.isAtCartButton]: isAtCart(cart, id) })}
          onClick={() => (isAtCart(cart, id) ? removeFromCart(id) : addToCart({ id, price, title, url }))}
        >
          {isAtCart(cart, id) ? 'В корзине' : 'В корзину'}
        </a>
      </div>
    </div>
  );
};

export default Card;

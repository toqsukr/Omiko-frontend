import WishIcon from '@components/ui/icons/wishIcon/WishIcon.component';
import { useActions } from '@hooks/useActions.hook';
import { useCart } from '@hooks/useCart.hook';
import { trimString } from '@utils/function';
import classNames from 'classnames';
import { FC } from 'react';
import css from './Card.module.css';
import type { ICard } from './card';
import CardImage from './cardImage/CardImage.component';

const Card: FC<ICard> = ({ id, price, title, url }) => {
  const { addToCart, removeFromCart } = useActions();
  const { isAtCart } = useCart();
  return (
    <div className={css.cardContainer}>
      <CardImage id={css.imageContainer} url={url} />
      <div className={css.cardInfo}>
        <p id={css.price}>{price ? price : 'Цена'}</p>
        <p id={css.title} title={title}>
          {title ? trimString(title, 28) : 'Название'}
        </p>
      </div>
      <div className={css.toCartContainer}>
        <a
          type="button"
          className={classNames({ [css.toCartButton]: true, [css.isAtCartButton]: isAtCart(id) })}
          onClick={() => (isAtCart(id) ? removeFromCart(id) : addToCart({ id, price, title, url }))}
        >
          {isAtCart(id) ? 'В корзине' : 'В корзину'}
        </a>
        <WishIcon id={id} price={price} title={title} url={url} />
      </div>
    </div>
  );
};

export default Card;

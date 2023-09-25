import HeartIcon from '@components/ui/icons/HeartIcon.component';
import { useActions } from '@hooks/useActions.hook';
import { useCart } from '@hooks/useCart.hook';
import { useWishlist } from '@hooks/useWishlist.hook';
import { trimString } from '@utils/function';
import classNames from 'classnames';
import { FC } from 'react';
import css from './Card.module.css';
import type { ICard } from './card';
import CardImage from './cardImage/CardImage.component';

const Card: FC<ICard> = ({ id, price, title, url }) => {
  const { addToCart, removeFromCart, toggleWishlist } = useActions();
  const { isAtCart } = useCart();
  const { isAtWishlist } = useWishlist();
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
        <HeartIcon
          className={classNames({ [css.heartFilled]: isAtWishlist(id), [css.heart]: !isAtWishlist(id) })}
          onClick={() => toggleWishlist({ id, price, title, url })}
        />
      </div>
    </div>
  );
};

export default Card;

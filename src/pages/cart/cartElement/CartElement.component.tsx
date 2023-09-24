import CardImage from '@components/card/cardImage/CardImage.component';
import HeartIcon from '@components/ui/icons/HeartIcon.component';
import TrashIcon from '@components/ui/icons/TrashIcon.component';
import { useActions } from '@hooks/useActions.hook';
import { ICartInitialState } from '@store/cart/cart.interface';
import { FC } from 'react';
import css from './CartElement.module.css';

const CartElement: FC<ICartInitialState> = ({ count, id, price, title, url }) => {
  const { decreaseProductNumber, increaseProductNumber, removeFromCart } = useActions();

  return (
    <>
      <div className={css.infoContainer}>
        <CardImage url={url} />
        <h1 id={css.title}>{title}</h1>
      </div>
      <div id={css.counterContainer}>
        <div id={css.counter}>
          <button
            className={css.countButton}
            onClick={() => decreaseProductNumber({ id, price, title, url, count })}
          >
            -
          </button>
          <input id={css.countText} value={count} />
          <button
            className={css.countButton}
            onClick={() => increaseProductNumber({ id, price, title, url, count })}
          >
            +
          </button>
        </div>
      </div>
      <div>
        <span id={css.price}>
          {`${(Math.round(parseFloat(price.replace(',', '.'))) * count).toFixed(2).replace('.', ',')}`}₽
        </span>
        <div id={css.iconContainer}>
          <HeartIcon id={css.heart} />
          <TrashIcon onClick={() => removeFromCart(id)} id={css.trash} />
        </div>
      </div>
    </>
  );
};

export default CartElement;

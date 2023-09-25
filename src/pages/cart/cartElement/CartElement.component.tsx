import CardImage from '@components/card/cardImage/CardImage.component';
import TrashIcon from '@components/ui/icons/TrashIcon.component';
import WishIcon from '@components/ui/icons/wishIcon/WishIcon.component';
import { useActions } from '@hooks/useActions.hook';
import { ICartInitialState } from '@store/cart/cart.interface';
import { FC } from 'react';
import { animated } from 'react-spring';
import css from './CartElement.module.css';

const CartElement: FC<ICartInitialState> = ({ count, id, price, title, url }) => {
  const { decreaseProductNumber, increaseProductNumber, removeFromCart } = useActions();
  function onChangeHanlder() {}
  return (
    <animated.div className={css.productContainer}>
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
          <input id={css.countText} value={count} onChange={onChangeHanlder} />
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
          <WishIcon id={id} price={price} title={title} url={url} />
          <TrashIcon onClick={() => removeFromCart(id)} id={css.trash} />
        </div>
      </div>
    </animated.div>
  );
};

export default CartElement;

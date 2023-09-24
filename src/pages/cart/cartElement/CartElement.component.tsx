import CardImage from '@components/card/cardImage/CardImage.component';
import { ICardData } from '@interfaces/data.interface';
import { FC } from 'react';
import css from './CartElement.module.css';

const CartElement: FC<ICardData> = ({ price, title, url }) => {
  return (
    <>
      <div className={css.infoContainer}>
        <CardImage url={url} />
        <h1 id={css.title}>{title}</h1>
      </div>
      <div id={css.counterContainer}>
        <div id={css.counter}>
          <button className={css.countButton}>-</button>
          <p id={css.countText}>1</p>
          <button className={css.countButton}>+</button>
        </div>
      </div>
      <div id={css.price}>{price}</div>
    </>
  );
};

export default CartElement;

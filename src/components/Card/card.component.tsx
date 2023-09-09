import { FC } from 'react';

import { trimString } from '@utils/function';
import type { ICard } from './card';
import css from './Card.module.css';

const Card: FC<ICard> = ({ price, title, url }) => {
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
        <a type="button" className={css.toCartButton}>
          В корзину
        </a>
      </div>
    </div>
  );
};

export default Card;

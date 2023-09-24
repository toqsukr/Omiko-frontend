import { FC } from 'react';
import { ICardImage } from './CardImage';
import css from './CardImage.module.css';

const CardImage: FC<ICardImage> = ({ url }) => {
  return (
    <div className={css.imageContainer}>
      <img id={css.image} src={url} alt="" />
    </div>
  );
};

export default CardImage;

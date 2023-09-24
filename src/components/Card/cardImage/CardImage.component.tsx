import { FC } from 'react';
import { ICardImage } from './CardImage';
import css from './CardImage.module.css';

const CardImage: FC<ICardImage> = ({ url, ...props }) => {
  return (
    <div className={css.imageContainer} {...props}>
      <img id={css.image} src={url} alt="" />
    </div>
  );
};

export default CardImage;

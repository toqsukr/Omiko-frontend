import css from './Card.module.css';

interface ICard {
  price: string;
  title: string;
  url: string;
}

export default function Card({ ...props }: ICard) {
  return (
    <div className={css.cardContainer}>
      <div className={css.imageContainer}>
        <img id={css.image} src={props.url} alt='' />
      </div>
      <div className={css.cardInfo}>
        <p id={css.price}>{props.price}</p>
        <p id={css.title}>
          {props.title.length > 28
            ? `${props.title.slice(0, 27)}...`
            : props.title}
        </p>
      </div>
      <div className={css.toCartContainer}>
        <a type='button' className={css.toCartButton}>
          В корзину
        </a>
      </div>
    </div>
  );
}

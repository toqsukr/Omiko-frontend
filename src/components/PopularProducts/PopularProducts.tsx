import { FC } from 'react';
import css from './PopularProducts.module.css';
import { products } from '../../utils/data';
import Card from '../Card/Card';

const PopularProducts: FC = () => {
  return (
    <div id={css.mainContainer}>
      <div id={css.titleContainer}>
        <h1 id={css.title}>ПОПУЛЯРНЫЕ ТОВАРЫ</h1>
      </div>
      <div id={css.cardContainer}>
        {products.map((el, index: number) => (
          <Card key={index} url={el.url} price={el.price} title={el.title} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;

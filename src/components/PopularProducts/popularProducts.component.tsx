import Card from '@components/card/card.component';
import { FC } from 'react';
import { products } from './popularProducts.data';

import css from './PopularProducts.module.css';

const PopularProducts: FC = () => {
  return (
    <div id={css.mainContainer}>
      <div id={css.titleContainer}>
        <h1 id={css.title}>ПОПУЛЯРНЫЕ ТОВАРЫ</h1>
      </div>
      <div id={css.cardContainer}>
        {products.map((el, index: number) => (
          <Card key={index} id={el.id} url={el.url} price={el.price} title={el.title} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;

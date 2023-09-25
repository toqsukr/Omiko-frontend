import Footer from '@components/footer/footer.component';
import Header from '@components/header/header.component';
import PopularProducts from '@components/popularProducts/popularProducts.component';
import { ROUTES } from '@constants/routes';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import css from './Error.module.css';

const Error: FC = () => {
  return (
    <>
      <Header />
      <section id={css.bodyContainer}>
        <div className={css.errorMessage}>
          <span>Ничего не найдено D:</span>
          <Link id={css.button} to={ROUTES.DEFAULT_ROUTE}>
            На главную
          </Link>
        </div>
        ;
        <PopularProducts />
        <Footer />
      </section>
    </>
  );
};

export default Error;

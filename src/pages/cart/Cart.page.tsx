import MobileBar from '@components/bar/mobileBar/MobileBar.component';
import Footer from '@components/footer/footer.component';
import Header from '@components/header/header.component';
import { FC } from 'react';
import css from './Cart.module.css';

const Cart: FC = () => {
  return (
    <div id={css.bodyContainer}>
      <Header />
      <MobileBar />
      <Footer />
    </div>
  );
};

export default Cart;

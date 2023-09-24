import MobileBar from '@components/bar/mobileBar/MobileBar.component';
import Card from '@components/card/card.component';
import Footer from '@components/footer/footer.component';
import Header from '@components/header/header.component';
import { useCart } from '@hooks/useCart.hook';
import { FC } from 'react';
import css from './Cart.module.css';

const Cart: FC = () => {
  const { cart } = useCart();
  return (
    <div id={css.bodyContainer}>
      <Header />
      <>
        {cart.map(product => (
          <Card key={product.id} {...product} />
        ))}
      </>
      <MobileBar />
      <Footer />
    </div>
  );
};

export default Cart;

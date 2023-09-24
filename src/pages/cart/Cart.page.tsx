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
    <>
      <Header />
      <section id={css.bodyContainer}>
        <div id={css.bodyInnerContainer}>
          <div id={css.cartContainer}>
            <h1>Корзина</h1>
            {cart.map(product => (
              <div key={product.id} className={css.productContainer}>
                <Card {...product} />
              </div>
            ))}
          </div>
        </div>
        <MobileBar />
        <Footer />
      </section>
    </>
  );
};

export default Cart;

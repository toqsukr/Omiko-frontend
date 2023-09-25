import MobileBar from '@components/bar/mobileBar/MobileBar.component';
import Footer from '@components/footer/footer.component';
import Header from '@components/header/header.component';
import { useCart } from '@hooks/useCart.hook';
import { FC } from 'react';
import css from './Cart.module.css';
import CartElement from './cartElement/CartElement.component';

const Cart: FC = () => {
  const { cart } = useCart();
  return (
    <>
      <Header />
      <section id={css.bodyContainer}>
        <div id={css.bodyInnerContainer}>
          <div id={css.cartContainer}>
            <span id={css.title}>Корзина</span>
            {cart.map(product => (
              <CartElement key={product.id} {...product} />
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

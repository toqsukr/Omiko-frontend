import CartIcon from '@components/ui/icons/cartIcon/CartIcon.component';
import LogoMobile from '@components/ui/icons/logoMobile.component';
import { FC } from 'react';
import { scroller } from 'react-scroll';
import Header from '../header.component';
import { mobileTopScrollAnimation } from './header.animation';
import css from './headerMobile.module.css';

const HeaderMobile: FC = () => {
  return (
    <Header>
      <div id={css.headerMobile}>
        <div id={css.logoMobileContainer}>
          <LogoMobile
            id={css.logoMobile}
            onClick={() => scroller.scrollTo('top', mobileTopScrollAnimation)}
          />
        </div>
        <div id={css.cartMobileContainer}>
          <CartIcon />
        </div>
      </div>
    </Header>
  );
};

export default HeaderMobile;

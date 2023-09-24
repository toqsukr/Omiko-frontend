import CartIcon from '@components/ui/icons/cartIcon/CartIcon.component';
import LogoMobile from '@components/ui/icons/logoMobile.component';
import { useActions } from '@hooks/useActions.hook';
import { MobileBarState } from '@store/mobileBar/mobileBar.interface';
import { FC } from 'react';
import { scroller } from 'react-scroll';
import HeaderLayout from '../headerLayout/HeaderLayout.component';
import { mobileTopScrollAnimation } from './header.animation';
import css from './headerMobile.module.css';

const HeaderMobile: FC = () => {
  const { changeBarState } = useActions();
  function handleLogoClick() {
    changeBarState(MobileBarState.HOME);
    scroller.scrollTo('top', mobileTopScrollAnimation);
  }
  return (
    <HeaderLayout>
      <div id={css.headerMobile}>
        <div id={css.logoMobileContainer} onClick={handleLogoClick}>
          <LogoMobile id={css.logoMobile} />
        </div>
        <div id={css.cartMobileContainer}>
          <CartIcon />
        </div>
      </div>
    </HeaderLayout>
  );
};

export default HeaderMobile;

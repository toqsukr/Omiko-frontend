import CatalogIcon from '@components/ui/icons/CatalogIcon.component';
import HomeIcon from '@components/ui/icons/HomeIcon.component';
import CartIcon from '@components/ui/icons/cartIcon/CartIcon.component';
import { FC } from 'react';
import css from './MobileBar.module.css';

const MobileBar: FC = () => {
  return (
    <div id={css.barContainer}>
      <HomeIcon />
      <CatalogIcon />
      <CartIcon />
    </div>
  );
};

export default MobileBar;

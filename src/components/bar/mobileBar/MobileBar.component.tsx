import CatalogIcon from '@components/ui/icons/CatalogIcon.component';
import HomeIcon from '@components/ui/icons/HomeIcon.component';
import CartIcon from '@components/ui/icons/cartIcon/CartIcon.component';
import { FC } from 'react';
import css from './MobileBar.module.css';

const MobileBar: FC = () => {
  return (
    <div id={css.barContainer}>
      <div className={css.iconContainer}>
        <HomeIcon id={css.homeIcon} />
      </div>
      <div className={css.iconContainer}>
        <CatalogIcon />
      </div>
      <div className={css.iconContainer}>
        <CartIcon />
      </div>
    </div>
  );
};

export default MobileBar;

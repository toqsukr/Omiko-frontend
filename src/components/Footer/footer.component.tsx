import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';

import { footer } from './footer.data';

import css from './Footer.module.css';
import ProductBy from './productBy/productBy.component';

const Footer: FC = () => {
  const isMobile = useMediaQuery({ maxDeviceWidth: 500 });
  return (
    <footer id={css.footerContainer}>
      <div id={css.contentContainer}>
        <div id={css.descriptionContainer}>
          <p className={css.footerText}>{footer.description}</p>
        </div>
        {isMobile || <ProductBy />}
      </div>
    </footer>
  );
};

export default Footer;

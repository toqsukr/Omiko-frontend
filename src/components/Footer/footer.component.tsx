import { FC } from 'react';
import { footer } from './footer.data';

import css from './Footer.module.css';
import ProductBy from './productBy/productBy.component';

const Footer: FC = () => {
  return (
    <footer id={css.footerContainer}>
      <div id={css.contentContainer}>
        <div id={css.descriptionContainer}>
          <p className={css.footerText}>{footer.description}</p>
        </div>
        <ProductBy />
      </div>
    </footer>
  );
};

export default Footer;

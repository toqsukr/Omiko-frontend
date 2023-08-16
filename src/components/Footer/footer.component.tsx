import { FC } from 'react';
import { ReactSVG } from 'react-svg';
import { footer } from '@utils/data';

import css from './Footer.module.css';

const Footer: FC = () => {
  return (
    <footer id={css.footerContainer}>
      <div id={css.contentContainer}>
        <div id={css.descriptionContainer}>
          <p className={css.footerText}>{footer.description}</p>
        </div>
        <div id={css.productByContainer}>
          <div id={css.nicknameContainer}>
            <a className={css.footerText} href="https://github.com/toqsukr" target="_blank">
              toqsukr
            </a>
            <a className={css.footerText} href="https://github.com/skeesh24" target="_blank">
              skeesh24
            </a>
          </div>
          <ReactSVG src="icons/github.svg" href="https://github.com/toqsukr/Omiko-frontend" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

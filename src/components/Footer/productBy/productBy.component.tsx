import GithubIcon from '@components/ui/icons/GithubIcon.component';
import { FC } from 'react';
import css from './productBy.module.css';

const ProductBy: FC = () => {
  return (
    <div id={css.productByContainer}>
      <div id={css.nicknameContainer}>
        <a className={css.text} href="https://github.com/toqsukr" target="_blank">
          toqsukr
        </a>
        <a className={css.text} href="https://github.com/skeesh24" target="_blank">
          skeesh24
        </a>
      </div>
      <GithubIcon href="https://github.com/toqsukr/Omiko-frontend" />
    </div>
  );
};

export default ProductBy;

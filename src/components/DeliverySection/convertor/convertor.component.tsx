import { FC } from 'react';
import { ReactSVG } from 'react-svg';

import css from './convertor.module.css';

const Convertor: FC = () => {
  return (
    <div className={css.convertor}>
      <div className={css.convertorData}>
        <input id={css.boxCount} type="text" />
        <p className={css.boxText}>коробок</p>
        <div id={css.productionComboBox}>
          <p className={css.boxText}>тапочек</p>
          <ReactSVG id={css.buttonArrow} src="icons/buttonArrow.svg" />
        </div>
      </div>
      <ReactSVG src="icons/arrow.svg" />
      <div className={css.convertorResult}>
        <p id={css.price}>600₽</p>
      </div>
    </div>
  );
};

export default Convertor;

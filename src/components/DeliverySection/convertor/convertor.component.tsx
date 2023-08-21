import { FC } from 'react';
import ButtonArrowIcon from '@components/ui/icons/ButtonArrowIcon.component';
import ConvertorArrowIcon from '@components/ui/icons/ConvertorArrowIcon.component';

import css from './convertor.module.css';

const Convertor: FC = () => {
  return (
    <div className={css.convertor}>
      <div className={css.convertorData}>
        <input id={css.boxCount} type="text" />
        <p className={css.boxText}>коробок</p>
        <div id={css.productionComboBox}>
          <p className={css.boxText}>тапочек</p>
          <ButtonArrowIcon id={css.buttonArrow} />
        </div>
      </div>
      <ConvertorArrowIcon />
      <div className={css.convertorResult}>
        <p id={css.price}>600₽</p>
      </div>
    </div>
  );
};

export default Convertor;

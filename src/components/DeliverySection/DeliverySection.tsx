import { useContext } from 'react';
import css from './DeliverySection.module.css';
import { LocationContext } from '../../providers/LocationProvider';

export default function DeliverySection() {
  const { location } = useContext(LocationContext);
  return (
    <div className={css.sectionContainer}>
      <div className={css.titleContainer}>
        <h1 id={css.title}>Доставка</h1>
        <p id={css.city}>{`г. ${location.city}`}</p>
      </div>
      <div className={css.sectionInnerContainer}>
        <div className={css.info}>
          <div className={css.infoText}></div>
          <div className={css.infoButton}></div>
        </div>
        <div className={css.convertor}>
          <div className={css.convertorData}>
            <input type='text' />
            <p>коробок</p>
            <a id={css.productionComboBox}></a>
          </div>
          <div className={css.convertorResult}></div>
        </div>
      </div>
    </div>
  );
}

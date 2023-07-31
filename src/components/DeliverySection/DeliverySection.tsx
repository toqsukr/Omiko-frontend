import { useContext } from 'react';
import css from './DeliverySection.module.css';
import { deliveryInfo } from '../../utils/data';
import { LocationContext } from '../../providers/LocationProvider';

export default function DeliverySection() {
  const { location } = useContext(LocationContext);
  return (
    <div className={css.sectionContainer}>
      <div className={css.titleContainer}>
        <h1 id={css.title}>Доставка</h1>
        <p id={css.city}>
          {location.city === 'Другой'
            ? 'в регионы России'
            : `г. ${location.city}`}
        </p>
      </div>
      <div className={css.sectionInnerContainer}>
        <div className={css.info}>
          <div className={css.infoTextContainer}>
            <p id={css.infoText}>{deliveryInfo}</p>
          </div>
          <div className={css.infoButton}>
            <p id={css.infoButtonText}>детали доставки</p>
          </div>
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

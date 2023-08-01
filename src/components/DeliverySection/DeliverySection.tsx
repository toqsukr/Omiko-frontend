import { useContext } from 'react';
import { ReactSVG } from 'react-svg';
import css from './DeliverySection.module.css';
import { deliveryInfo } from '../../utils/data';
import PopupWindow from '../PopupWindow/PopupWindow';
import { LocationContext } from '../../providers/LocationProvider';

interface IDeliverySection {
  isShow: boolean;
  setShow: (value: boolean) => void;
}

export default function DeliverySection({ isShow, setShow }: IDeliverySection) {
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
          <div className={css.infoButton} onClick={() => setShow(true)}>
            <p id={css.infoButtonText}>детали доставки</p>
          </div>
        </div>
        <div className={css.convertor}>
          <div className={css.convertorData}>
            <input id={css.boxCount} type='text' />
            <p className={css.boxText}>коробок</p>
            <div id={css.productionComboBox}>
              <p className={css.boxText}>тапочек</p>
              <ReactSVG id={css.buttonArrow} src='icons/buttonArrow.svg' />
            </div>
          </div>
          <ReactSVG src='icons/arrow.svg' />
          <div className={css.convertorResult}>
            <p id={css.price}>600₽</p>
          </div>
        </div>
      </div>
      {isShow && <PopupWindow isShow={isShow} setShow={setShow} />}
    </div>
  );
}

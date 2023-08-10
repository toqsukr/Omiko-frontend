import { useRef, useContext, FC } from 'react';
import { ReactSVG } from 'react-svg';
import { useTransition, animated } from 'react-spring';
import DeliveryDetail from '../deliveryDetail/deliveryDetail.component';
import { deliveryInfo } from '../../utils/data';
import PopupWindow from '../popupWindow/popupWindow.component';
import { LocationContext } from '../../providers/LocationProvider';

import type { IShow } from '../popupWindow/popup';
import css from './DeliverySection.module.css';

const DeliverySection: FC<IShow> = ({ isShow, setShow }) => {
  const { location } = useContext(LocationContext);
  const cityRef = useRef(
    location.city === 'Другой' ? 'в регионы России' : `г. ${location.city}`
  );
  const cityTransition = useTransition(location, {
    from: { opacity: 0, transform: 'translateX(-50px)' },
    enter: { opacity: 1, transform: 'translateX(0px)' },
    leave: { opacity: 0, transform: 'translateX(50px)' },
    exitBeforeEnter: true,
    config: {
      duration: 300,
    },
    onRest: () =>
      (cityRef.current =
        location.city === 'Другой'
          ? 'в регионы России'
          : `г. ${location.city}`),
  });

  return (
    <div className={css.sectionContainer}>
      <div className={css.titleContainer}>
        <h1 id={css.title}>Доставка</h1>
        {cityTransition((style) => (
          <animated.p style={style} id={css.city}>
            {cityRef.current}
          </animated.p>
        ))}
      </div>
      <div className={css.sectionInnerContainer}>
        <div className={css.info}>
          <div className={css.infoTextContainer}>
            {deliveryInfo.map((el, index) => (
              <p key={index} id={css.infoText}>
                {el}
              </p>
            ))}
          </div>
          <button
            type='button'
            className={css.infoButton}
            onClick={() => setShow(true)}
          >
            <p id={css.infoButtonText}>детали доставки</p>
          </button>
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
      <PopupWindow
        windowStyleID={css.detailWindow}
        windowVisualization={{ isShow, setShow }}
      >
        <DeliveryDetail />
      </PopupWindow>
    </div>
  );
};

export default DeliverySection;

import { useRef, useContext, FC } from 'react';
import { useTransition, animated } from 'react-spring';
import DeliveryDetail from './deliveryDetail/deliveryDetail.component';
import { deliveryInfo } from '@utils/data';
import Convertor from './convertor/convertor.component';
import { LocationContext } from '@providers/LocationProvider';
import { DeliveryDetailShowContext } from '@providers/showProviders/DeliveryDetailShowProvider';

import { cityAnimation } from './deliverySection.animation';
import css from './DeliverySection.module.css';

const DeliverySection: FC = () => {
  const { location } = useContext(LocationContext);
  const { showDetail, setShowDetail } = useContext(DeliveryDetailShowContext);
  const cityRef = useRef(
    location.city === 'Другой' ? 'в регионы России' : `г. ${location.city}`
  );
  const cityTransition = useTransition(location, {
    ...cityAnimation,
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
            onClick={() => setShowDetail(true)}
          >
            <p id={css.infoButtonText}>детали доставки</p>
          </button>
        </div>
        <Convertor />
      </div>
      <DeliveryDetail isShow={showDetail} setShow={setShowDetail} />
    </div>
  );
};

export default DeliverySection;

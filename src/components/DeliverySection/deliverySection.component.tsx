import { useLocation } from '@hooks/useLocation';
import { useOutside } from '@hooks/useOutside.hook';
import { FC, useRef } from 'react';
import { animated, useTransition } from 'react-spring';
import css from './DeliverySection.module.css';
import Convertor from './convertor/convertor.component';
import DeliveryDetail from './deliveryDetail/deliveryDetail.component';
import { cityAnimation } from './deliverySection.animation';
import { deliveryInfo } from './deliverySection.data';

const DeliverySection: FC = () => {
  const { city } = useLocation();
  const { ref, isShow, setShow } = useOutside(false);
  const cityRef = useRef(city === 'Другой' ? 'в регионы России' : `г. ${city}`);
  const cityTransition = useTransition(location, {
    ...cityAnimation,
    onRest: () => (cityRef.current = city === 'Другой' ? 'в регионы России' : `г. ${city}`)
  });

  return (
    <div className={css.sectionContainer}>
      <div className={css.titleContainer}>
        <h1 id={css.title}>Доставка</h1>
        {cityTransition(style => (
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
          <button type="button" className={css.infoButton} onClick={() => setShow(true)}>
            <p id={css.infoButtonText}>детали доставки</p>
          </button>
        </div>
        <Convertor />
      </div>
      <DeliveryDetail ref={ref} isShow={isShow} setShow={setShow} />
    </div>
  );
};

export default DeliverySection;

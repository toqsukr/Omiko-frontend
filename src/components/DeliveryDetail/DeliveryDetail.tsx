import css from './DeliveryDetail.module.css';
import { deliveryDetails } from '../../utils/data';

export default function DeliveryDetail() {
  return (
    <div className={css.sideInnerContainer}>
      <div className={css.titleSideContainer}>
        <h1 id={css.titleText}>{deliveryDetails.title}</h1>
      </div>
      <div className={css.mainInfoContainer}>
        <p id={css.mainInfoText}>{deliveryDetails.mainInfo}</p>
      </div>
      <div className={css.otherInfoContainer}>
        <p id={css.otherInfoText}>{deliveryDetails.otherInfo}</p>
      </div>
    </div>
  );
}

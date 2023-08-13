import { FC } from 'react';
import { deliveryDetails } from '../../../utils/data';
import PopupWindow from '../../popupWindow/popupWindow.component';

import css from './DeliveryDetail.module.css';
import { IShow } from '../../popupWindow/popup';

const DeliveryDetail: FC<IShow> = ({ isShow, setShow }) => {
  return (
    <PopupWindow
      windowStyleID={css.detailWindow}
      isShow={isShow}
      setShow={setShow}
    >
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
    </PopupWindow>
  );
};

export default DeliveryDetail;

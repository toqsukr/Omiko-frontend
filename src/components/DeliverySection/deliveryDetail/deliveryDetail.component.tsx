import PopupWindow from '@components/ui/popupWindow/popupWindow.component';
import { IShow } from '@interfaces/show.interface';
import { deliveryDetails } from '@utils/data';
import { forwardRef } from 'react';
import css from './DeliveryDetail.module.css';

const DeliveryDetail = forwardRef<HTMLDivElement, IShow>(({ isShow, setShow }, ref) => {
  return (
    <PopupWindow ref={ref} windowStyleID={css.detailWindow} isShow={isShow} setShow={setShow}>
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
});

export default DeliveryDetail;

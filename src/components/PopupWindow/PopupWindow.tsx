import css from './PopupWindow.module.css';
import DeliveryDetail from '../DeliveryDetail/DeliveryDetail';

export default function PopupWindow() {
  return (
    <div className={css.mainSideContainer}>
      <DeliveryDetail />
    </div>
  );
}

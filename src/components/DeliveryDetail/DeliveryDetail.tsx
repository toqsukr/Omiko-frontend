import css from './DeliveryDetail.module.css';

export default function DeliveryDetail() {
  return (
    <>
      <div className={css.titleSideContainer}>
        <h1 id={css.titleText}></h1>
      </div>
      <div className={css.mainInfoContainer}></div>
      <div className={css.otherInfoContainer}></div>
    </>
  );
}

import { ReactSVG } from 'react-svg';
import css from './Location.module.css';
export default function Location() {
  return (
    <div className={css.locationContainer}>
      <ReactSVG id={css.locationPoint} src='icons/location.svg' />
      <p>Санкт-Петербург</p>
    </div>
  );
}

import { useContext } from 'react';
import { ReactSVG } from 'react-svg';
import { LocationContext } from '../../providers/LocationProvider';
import css from './Location.module.css';

export default function Location() {
  const { location, setIsHide } = useContext(LocationContext);

  return (
    <div
      className={css.locationContainer}
      onMouseEnter={() => setIsHide(false)}
    >
      <ReactSVG id={css.locationPoint} src='icons/location.svg' />
      <p id={css.city}>{location.city}</p>
    </div>
  );
}

import { useContext } from 'react';
import { ReactSVG } from 'react-svg';
import { LocationContext } from '../../providers/LocationProvider';
import LocationWrapper from '../LocationWrapper/LocationWrapper';
import css from './Location.module.css';

export default function Location() {
  const { location, isHide, setIsHide } = useContext(LocationContext);

  return (
    <>
      <div
        className={css.locationContainer}
        onMouseEnter={() => setIsHide(false)}
      >
        <ReactSVG id={css.locationPoint} src='icons/location.svg' />
        <p>{location.city}</p>

        {isHide || <LocationWrapper />}
      </div>
    </>
  );
}

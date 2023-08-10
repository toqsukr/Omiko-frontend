import { useContext, FC } from 'react';
import { ReactSVG } from 'react-svg';
import { LocationContext } from '../../providers/LocationProvider';
import LocationWrapper from '../locationWrapper/locationWrapper.component';

import css from './Location.module.css';

const Location: FC = () => {
  const { location, setIsHide } = useContext(LocationContext);
  return (
    <div
      className={css.locationContainer}
      onMouseEnter={() => setIsHide(false)}
    >
      <ReactSVG id={css.locationPoint} src='icons/location.svg' />
      <p id={css.city}>{location.city}</p>
      <LocationWrapper />
    </div>
  );
};

export default Location;

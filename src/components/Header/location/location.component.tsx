import { useContext, FC } from 'react';
import { ReactSVG } from 'react-svg';
import { LocationContext } from '@providers/LocationProvider';
import { LocationShowContext } from '@providers/showProviders/LocationShowProvider';
import LocationWrapper from '../locationWrapper/locationWrapper.component';

import css from './Location.module.css';

const Location: FC = () => {
  const { location } = useContext(LocationContext);
  const { setShowWrapper } = useContext(LocationShowContext);
  return (
    <div className={css.locationContainer} onMouseEnter={() => setShowWrapper(true)}>
      <ReactSVG id={css.locationPoint} src="icons/location.svg" />
      <p id={css.city}>{location.city}</p>
      <LocationWrapper />
    </div>
  );
};

export default Location;

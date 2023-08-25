import LocationIcon from '@components/ui/icons/LocationIcon.component';
import { useOutside } from '@hooks/useOutside.hook';
import { LocationContext } from '@providers/LocationProvider';
import { FC, useContext } from 'react';
import LocationWrapper from '../locationWrapper/locationWrapper.component';

import css from './Location.module.css';

const Location: FC = () => {
  const { location } = useContext(LocationContext);
  const { ref, isShow, setShow } = useOutside(false);
  return (
    <div className={css.locationContainer} onMouseEnter={() => setShow(true)}>
      <LocationIcon id={css.locationPoint} />
      <p id={css.city}>{location.city}</p>
      <LocationWrapper ref={ref} isShow={isShow} setShow={setShow} />
    </div>
  );
};

export default Location;

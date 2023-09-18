import LocationIcon from '@components/ui/icons/LocationIcon.component';
import { useOutside } from '@hooks/useOutside.hook';
import { FC } from 'react';
import LocationWrapper from '../locationWrapper/locationWrapper.component';

import { useLocation } from '@hooks/useLocation';
import css from './Location.module.css';

const Location: FC = () => {
  const { location } = useLocation();
  const { ref, isShow, setShow } = useOutside(false);
  return (
    <div className={css.mainLocationContainer}>
      <div className={css.innerLocationContainer} onMouseEnter={() => setShow(true)}>
        <LocationIcon filled={true} id={css.locationPoint} />
        <p id={css.city}>{location.city}</p>
      </div>
      <LocationWrapper ref={ref} isShow={isShow} setShow={setShow} />
    </div>
  );
};

export default Location;

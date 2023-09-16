import LocationIcon from '@components/ui/icons/LocationIcon.component';
import { useOutside } from '@hooks/useOutside.hook';
import { FC } from 'react';
import LocationWrapper from '../locationWrapper/locationWrapper.component';

import { useLocation } from '@hooks/useLocation';
import css from './Location.module.css';

const Location: FC = () => {
  const { city } = useLocation();
  const { ref, isShow, setShow } = useOutside(false);
  return (
    <div className={css.locationContainer} onMouseEnter={() => setShow(true)}>
      <LocationIcon id={css.locationPoint} />
      <p id={css.city}>{city}</p>
      <LocationWrapper ref={ref} isShow={isShow} setShow={setShow} />
    </div>
  );
};

export default Location;

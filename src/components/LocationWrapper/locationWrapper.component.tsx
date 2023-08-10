import { useContext } from 'react';
import { locations } from '../../utils/data';
import Wrapper from '../wrapper/wrapper.component';
import { LocationContext } from '../../providers/LocationProvider';

import css from './locationWrapper.module.css';

function LocationWrapper() {
  const { location, setLocation, isHide, setIsHide } =
    useContext(LocationContext);
  return (
    <Wrapper
      windowVisualization={{ isShow: isHide, setShow: setIsHide }}
      windowStyleID={css.locationWrapper}
    >
      {locations.map((el, i: number) => {
        if (el.city === location.city) return null;
        else
          return (
            <div
              key={i}
              id={css.locationElementContainer}
              onClick={() => {
                setIsHide(true);
                setLocation({
                  city: locations[i].city,
                  phoneNumbers: locations[i].phoneNumbers,
                  description: locations[i].description,
                });
              }}
            >
              <p id={css.locationElementText}>{el.city}</p>
            </div>
          );
      })}
    </Wrapper>
  );
}

export default LocationWrapper;

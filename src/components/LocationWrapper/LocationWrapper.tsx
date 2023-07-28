import { useContext } from 'react';
import { LocationContext } from '../../providers/LocationProvider';
import { locations } from '../../utils/data';
import css from './LocationWrapper.module.css';

export default function LocationWrapper() {
  const { location, setLocation, setIsHide } = useContext(LocationContext);
  return (
    <div className={css.wrapper} onMouseLeave={() => setIsHide(true)}>
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
                });
              }}
            >
              <p id={css.locationElementText}>{el.city}</p>
            </div>
          );
      })}
    </div>
  );
}

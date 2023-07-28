import { useContext } from 'react';
import { LocationContext } from '../../providers/LocationProvider';
import { locations } from '../../utils/data';
import css from './LocationWrapper.module.css';

export default function LocationWrapper() {
  const { currentCity, setCurrentCity, setIsHide } =
    useContext(LocationContext);
  return (
    <div className={css.wrapper} onMouseLeave={() => setIsHide(true)}>
      {locations.map((el: string, i: number) => {
        if (el === currentCity) return null;
        else
          return (
            <div
              key={i}
              id={css.locationElementContainer}
              onClick={() => {
                setIsHide(true);
                setCurrentCity(locations[i]);
              }}
            >
              <p id={css.locationElementText}>{el}</p>
            </div>
          );
      })}
    </div>
  );
}

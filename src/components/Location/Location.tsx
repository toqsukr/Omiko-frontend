import { useContext } from 'react';
import { ReactSVG } from 'react-svg';
import { locations } from '../../utils/data';
import { LocationContext } from '../../providers/LocationProvider';
import css from './Location.module.css';

export default function Location() {
  const { currentCity, setCurrentCity, isHide, setIsHide } =
    useContext(LocationContext);

  return (
    <>
      <div
        className={css.locationContainer}
        onMouseEnter={() => setIsHide(false)}
      >
        <ReactSVG id={css.locationPoint} src='icons/location.svg' />
        <p>{currentCity}</p>

        {isHide || (
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
        )}
      </div>
    </>
  );
}

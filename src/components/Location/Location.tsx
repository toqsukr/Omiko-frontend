import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import css from './Location.module.css';
import { locations } from '../../utils/data';

export default function Location() {
  const [currentCity, setCurrentCity] = useState(locations[0]);
  const [isHide, setIsHide] = useState(true);

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

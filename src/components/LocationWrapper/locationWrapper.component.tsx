import { useContext, FC } from 'react';
import { useTransition, animated } from 'react-spring';
import { LocationContext } from '../../providers/LocationProvider';
import { locations } from '../../utils/data';

import css from './LocationWrapper.module.css';

const LocationWrapper: FC = () => {
  const { location, setLocation, isHide, setIsHide } =
    useContext(LocationContext);
  const locationTransition = useTransition(isHide, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
    config: {
      duration: 200,
    },
  });
  return (
    <>
      {locationTransition(
        (style, isHide) =>
          !isHide && (
            <animated.div
              className={css.wrapper}
              onMouseLeave={() => setIsHide(true)}
              style={style}
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
            </animated.div>
          )
      )}
    </>
  );
};

export default LocationWrapper;

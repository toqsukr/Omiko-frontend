import { useContext } from 'react';
import { useTransition, animated } from 'react-spring';
import css from './ContactInfo.module.css';
import { LocationContext } from '../../providers/LocationProvider';

export default function ContactInfo() {
  const { location } = useContext(LocationContext);
  const numberTransition = useTransition(location, {
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
    exitBeforeEnter: true,
    unique: true,
    trail: 400,
    config: {
      duration: 300,
    },
  });
  return (
    <div className={css.infoContainer}>
      {numberTransition((style) => (
        <>
          <animated.div style={style}>
            <p id={css.mainPhoneNumber}>{location.phoneNumbers[0]}</p>
          </animated.div>
          <animated.div style={style}>
            {location.city === 'Санкт-Петербург' ||
            location.city === 'Другой' ? (
              <p id={css.phoneNumberInfo}>Звонок бесплатный по России</p>
            ) : (
              <p id={css.phoneNumberInfo}>Есть вопрос? Позвоните нам!</p>
            )}
          </animated.div>
        </>
      ))}
    </div>
  );
}

import { useRef, useContext, FC } from 'react';
import { useTransition, animated } from 'react-spring';
import { LocationContext } from '../../../providers/LocationProvider';

import { contactAnimation } from './contactInfo.animation';
import css from './ContactInfo.module.css';

const ContactInfo: FC = () => {
  const { location } = useContext(LocationContext);
  const phoneNumberRef = useRef({
    phoneNumber: location.phoneNumbers[0],
    description: location.description,
  });

  const numberTransition = useTransition(location, {
    ...contactAnimation,
    onRest: () =>
      (phoneNumberRef.current = {
        phoneNumber: location.phoneNumbers[0],
        description: location.description,
      }),
  });
  return (
    <div className={css.infoContainer}>
      {numberTransition((style) => (
        <>
          <>
            <animated.p
              style={{ opacity: style.opacity, transform: style.transform }}
              id={css.mainPhoneNumber}
            >
              {phoneNumberRef.current.phoneNumber}
            </animated.p>
            <animated.p
              style={{ opacity: style.opacity, scale: style.scale }}
              id={css.phoneNumberInfo}
            >
              {phoneNumberRef.current.description}
            </animated.p>
          </>
        </>
      ))}
    </div>
  );
};

export default ContactInfo;

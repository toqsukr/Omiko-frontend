import { useRef, useContext, FC } from 'react';
import { useTransition, animated } from 'react-spring';
import css from './ContactInfo.module.css';
import { LocationContext } from '../../providers/LocationProvider';

const ContactInfo: FC = () => {
  const { location } = useContext(LocationContext);
  const phoneNumberRef = useRef({
    phoneNumber: location.phoneNumbers[0],
    description: location.description,
  });

  const numberTransition = useTransition(location, {
    from: { opacity: 0, scale: 0, transform: 'translateY(-100px)' },
    enter: { opacity: 1, scale: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, scale: 0, transform: 'translateY(-100px)' },
    exitBeforeEnter: true,
    config: {
      duration: 300,
    },
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

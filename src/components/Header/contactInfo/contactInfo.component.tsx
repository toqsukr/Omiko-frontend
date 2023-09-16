import { FC, useRef } from 'react';
import { animated, useTransition } from 'react-spring';

import { useLocation } from '@hooks/useLocation';
import css from './ContactInfo.module.css';
import { contactAnimation } from './contactInfo.animation';

const ContactInfo: FC = () => {
  const { description, phoneNumbers } = useLocation();
  const phoneNumberRef = useRef({
    phoneNumber: phoneNumbers[0],
    description: description
  });

  const numberTransition = useTransition(location, {
    ...contactAnimation,
    onRest: () =>
      (phoneNumberRef.current = {
        phoneNumber: phoneNumbers[0],
        description: description
      })
  });
  return (
    <div className={css.infoContainer}>
      {numberTransition(style => (
        <>
          <>
            <animated.p
              style={{ opacity: style.opacity, transform: style.transform }}
              id={css.mainPhoneNumber}
            >
              {phoneNumberRef.current.phoneNumber}
            </animated.p>
            <animated.p style={{ opacity: style.opacity, scale: style.scale }} id={css.phoneNumberInfo}>
              {phoneNumberRef.current.description}
            </animated.p>
          </>
        </>
      ))}
    </div>
  );
};

export default ContactInfo;

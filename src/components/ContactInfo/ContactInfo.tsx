import { useContext, ReactNode } from 'react';
import css from './ContactInfo.module.css';
import { LocationContext } from '../../providers/LocationProvider';

interface IContact {
  children: ReactNode;
}

export default function ContactInfo({ children }: IContact) {
  const { location } = useContext(LocationContext);
  return (
    <div className={css.infoContainer}>
      <p id={css.mainPhoneNumber}>{children}</p>
      {location.city === 'Санкт-Петербург' || location.city === 'Другой' ? (
        <p id={css.phoneNumberInfo}>Звонок бесплатный по России</p>
      ) : (
        <p id={css.phoneNumberInfo}>Есть вопрос? Позвоните нам!</p>
      )}
    </div>
  );
}

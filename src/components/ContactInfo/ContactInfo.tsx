import { useContext, ReactNode } from 'react';
import css from './ContactInfo.module.css';
import { LocationContext } from '../../providers/LocationProvider';
interface IContact {
  children: ReactNode;
}

export default function ContactInfo({ children }: IContact) {
  const { currentCity } = useContext(LocationContext);
  return (
    <div className={css.infoContainer}>
      <p id={css.mainPhoneNumber}>{children}</p>
      {currentCity === 'Санкт-Петербург' && (
        <p id={css.phoneNumberInfo}>Звонок бесплатный по России</p>
      )}
    </div>
  );
}

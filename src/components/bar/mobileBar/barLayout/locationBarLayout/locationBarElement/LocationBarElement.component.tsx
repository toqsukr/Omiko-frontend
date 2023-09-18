import { FC, PropsWithChildren } from 'react';
import css from './LocationBarElement.module.css';

const LocationBarElement: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={css.elementContainer}>
      <p className={css.elementText}>{children}</p>
    </div>
  );
};

export default LocationBarElement;

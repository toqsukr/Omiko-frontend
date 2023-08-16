import { FC, PropsWithChildren } from 'react';
import { ILocationElement } from './locationElement';
import css from './locationElement.module.css';

const LocationElement: FC<PropsWithChildren<ILocationElement>> = ({ onClick, children }) => {
  return (
    <div id={css.locationElementContainer} onClick={onClick}>
      <p id={css.locationElementText}>{children}</p>
    </div>
  );
};

export default LocationElement;

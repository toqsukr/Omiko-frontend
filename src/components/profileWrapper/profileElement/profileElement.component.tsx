import { FC, PropsWithChildren } from 'react';

import { IProfileElement } from './profile';
import css from './profileElement.module.css';

const ProfileElement: FC<PropsWithChildren<IProfileElement>> = ({
  onClick,
  children,
}) => {
  return (
    <div onClick={onClick} className={css.profileElementContainer}>
      <p className={css.profileElementText}>{children}</p>
    </div>
  );
};

export default ProfileElement;

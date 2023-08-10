import { FC, PropsWithChildren } from 'react';

import css from './profileElement.module.css';

const ProfileElement: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={css.profileElementContainer}>
      <p className={css.profileElementText}>{children}</p>
    </div>
  );
};

export default ProfileElement;

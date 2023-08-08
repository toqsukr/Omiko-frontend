import { FC } from 'react';
import Icon from '../icon/icon.component';

import type { IShow } from '../popupWindow/popup';
import css from './Profile.module.css';

const Profile: FC<IShow> = ({ isShow, setShow }) => {
  return (
    <div className={css.profileContainer}>
      <div className={css.signinContainer}>
        <Icon src='icons/shoppingcart.svg' id={css.cart} />
        <Icon
          src='icons/signin.svg'
          id={css.signin}
          onClick={() => setShow(!isShow)}
        />
      </div>
    </div>
  );
};

export default Profile;

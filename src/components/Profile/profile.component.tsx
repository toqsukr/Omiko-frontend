import { FC, useContext } from 'react';
import Icon from '../icon/icon.component';
import ProfileWrapper from '../profileWrapper/profileWrapper.component';
import { LoginContext } from '../../providers/LoginProvider';

import type { IShow } from '../popupWindow/popup';
import css from './Profile.module.css';

const Profile: FC<IShow> = ({ isShow, setShow }) => {
  const { isLogin } = useContext(LoginContext);
  return (
    <div className={css.profileContainer}>
      <div className={css.signinContainer}>
        <Icon src='icons/shoppingcart.svg' id={css.cart} />
        {isLogin ? (
          <Icon src='icons/profile.svg' />
        ) : (
          <Icon
            src='icons/signin.svg'
            id={css.signin}
            onClick={() => setShow(!isShow)}
          />
        )}
      </div>
      <ProfileWrapper />
    </div>
  );
};

export default Profile;

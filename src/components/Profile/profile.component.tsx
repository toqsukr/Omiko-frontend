import { FC, useContext } from 'react';
import Icon from '../icon/icon.component';
import ProfileWrapper from '../profileWrapper/profileWrapper.component';
import { LoginShowContext } from '../../providers/showProviders/LoginShowProvider';
import { ProfileContext } from '../../providers/showProviders/ProfileShowProvider';

import type { IShow } from '../popupWindow/popup';
import css from './Profile.module.css';

const Profile: FC<IShow> = ({ isShow, setShow }) => {
  const { isLogin } = useContext(LoginShowContext);
  const { showProfile, setShowProfile } = useContext(ProfileContext);
  return (
    <div className={css.profileContainer}>
      <div className={css.signinContainer}>
        <Icon src='icons/shoppingcart.svg' id={css.cart} />
        {showProfile && <p>ilya.pakylov@gmail.com</p>}
        {isLogin ? (
          <Icon
            src='icons/profile.svg'
            id={css.icon}
            onClick={() => setShowProfile(!showProfile)}
          />
        ) : (
          <Icon
            src='icons/signin.svg'
            id={css.icon}
            onClick={() => setShow(!isShow)}
          />
        )}
      </div>
      <ProfileWrapper isShow={showProfile} setShow={setShowProfile} />
    </div>
  );
};

export default Profile;

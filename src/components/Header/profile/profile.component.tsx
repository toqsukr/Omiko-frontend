import { FC, useContext } from 'react';
import { useTransition, animated } from 'react-spring';
import Icon from '@components/icon/icon.component';
import ProfileWrapper from '../profileWrapper/profileWrapper.component';
import { LoginShowContext } from '@providers/showProviders/LoginShowProvider';
import { ProfileContext } from '@providers/showProviders/ProfileShowProvider';
import type { IShow } from '@interfaces/show.interface';
import { nameAnimation } from './profile.animation';
import css from './Profile.module.css';

const Profile: FC<IShow> = ({ isShow, setShow }) => {
  const { isLogin } = useContext(LoginShowContext);
  const { showProfile, setShowProfile } = useContext(ProfileContext);
  const nameTransition = useTransition(showProfile, nameAnimation);

  return (
    <div className={css.profileContainer}>
      <div className={css.signinContainer}>
        <Icon src="icons/shoppingcart.svg" id={css.cart} />
        {nameTransition(
          (style, showProfile) => showProfile && <animated.p style={style}>ilya.pakylov@gmail.com</animated.p>
        )}
        {isLogin ? (
          <Icon src="icons/profile.svg" id={css.icon} onClick={() => setShowProfile(!showProfile)} />
        ) : (
          <Icon src="icons/signin.svg" id={css.icon} onClick={() => setShow(!isShow)} />
        )}
      </div>
      <ProfileWrapper isShow={showProfile} setShow={setShowProfile} />
    </div>
  );
};

export default Profile;

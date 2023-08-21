import { FC, useContext } from 'react';
import { useTransition, animated } from 'react-spring';
import ProfileWrapper from '../profileWrapper/profileWrapper.component';
import { LoginShowContext } from '@providers/showProviders/LoginShowProvider';
import { ProfileContext } from '@providers/showProviders/ProfileShowProvider';
import type { IShow } from '@interfaces/show.interface';
import { nameAnimation } from './profile.animation';
import css from './Profile.module.css';
import SignIcon from '@components/ui/icons/SignIcon.component';
import CartIcon from '@components/ui/icons/CartIcon.component';
import ProfileIcon from '@components/ui/icons/ProfileIcon.component';

const Profile: FC<IShow> = ({ isShow, setShow }) => {
  const { isLogin } = useContext(LoginShowContext);
  const { showProfile, setShowProfile } = useContext(ProfileContext);
  const nameTransition = useTransition(showProfile, nameAnimation);

  return (
    <div className={css.profileContainer}>
      <div className={css.signinContainer}>
        <CartIcon id={css.cart} />
        {nameTransition(
          (style, showProfile) => showProfile && <animated.p style={style}>ilya.pakylov@gmail.com</animated.p>
        )}
        {isLogin ? (
          <ProfileIcon id={css.icon} onClick={() => setShowProfile(!showProfile)} />
        ) : (
          <SignIcon id={css.icon} onClick={() => setShow(!isShow)} />
        )}
      </div>
      <ProfileWrapper isShow={showProfile} setShow={setShowProfile} />
    </div>
  );
};

export default Profile;

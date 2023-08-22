import ProfileIcon from '@components/ui/icons/ProfileIcon.component';
import SignIcon from '@components/ui/icons/SignIcon.component';
import CartIcon from '@components/ui/icons/cartIcon/CartIcon.component';
import type { IShow } from '@interfaces/show.interface';
import { LoginShowContext } from '@providers/showProviders/LoginShowProvider';
import { ProfileContext } from '@providers/showProviders/ProfileShowProvider';
import { FC, useContext } from 'react';
import { animated, useTransition } from 'react-spring';
import ProfileWrapper from '../profileWrapper/profileWrapper.component';
import css from './Profile.module.css';
import { nameAnimation } from './profile.animation';

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

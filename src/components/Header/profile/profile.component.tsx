import ProfileIcon from '@components/ui/icons/ProfileIcon.component';
import SignIcon from '@components/ui/icons/SignIcon.component';
import CartIcon from '@components/ui/icons/cartIcon/CartIcon.component';
import { useAuth } from '@hooks/useAuth.hook';
import { useOutside } from '@hooks/useOutside.hook';
import type { IShow } from '@interfaces/show.interface';
import { FC } from 'react';
import { animated, useTransition } from 'react-spring';
import ProfileWrapper from '../profileWrapper/profileWrapper.component';
import css from './Profile.module.css';
import { nameAnimation } from './profile.animation';

const Profile: FC<IShow> = ({ isShow, setShow }) => {
  const { user } = useAuth();
  const { ref, isShow: showProfile, setShow: setShowProfile } = useOutside(false);
  const nameTransition = useTransition(showProfile, nameAnimation);

  return (
    <div className={css.profileContainer}>
      <div className={css.signinContainer}>
        <CartIcon id={css.cart} />
        {nameTransition(
          (style, showProfile) => showProfile && <animated.p style={style}>{user?.username}</animated.p>
        )}
        {!!user ? (
          <ProfileIcon id={css.icon} onClick={() => showProfile || setShowProfile(true)} />
        ) : (
          <SignIcon id={css.icon} onClick={() => setShow(!isShow)} />
        )}
      </div>
      <ProfileWrapper ref={ref} isShow={showProfile} setShow={setShowProfile} />
    </div>
  );
};

export default Profile;

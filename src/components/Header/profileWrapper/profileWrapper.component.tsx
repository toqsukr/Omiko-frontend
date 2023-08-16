import { FC, useContext } from 'react';
import Wrapper from '@components/wrapper/wrapper.component';
import ProfileElement from './profileElement/profileElement.component';
import { LoginShowContext } from '@providers/showProviders/LoginShowProvider';

import { IShow } from '@components/popupWindow/popupWindow';
import css from './profileWrapper.module.css';

const ProfileWrapper: FC<IShow> = ({ isShow, setShow }) => {
  const { setIsLogin } = useContext(LoginShowContext);
  const handleExitClick = () => {
    setShow(false);
    setIsLogin(false);
  };
  return (
    <Wrapper isShow={isShow} setShow={setShow} windowStyleID={css.profileWrapper}>
      <ProfileElement>Личные данные</ProfileElement>
      <ProfileElement>История заказов</ProfileElement>
      <ProfileElement>Избранное</ProfileElement>
      <ProfileElement onClick={handleExitClick}>Выйти</ProfileElement>
    </Wrapper>
  );
};

export default ProfileWrapper;

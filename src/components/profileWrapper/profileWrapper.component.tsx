import { FC, useContext } from 'react';
import Wrapper from '../wrapper/wrapper.component';
import ProfileElement from './profileElement/profileElement.component';
import { LoginContext } from '../../providers/LoginProvider';

import css from './profileWrapper.module.css';
import { IShow } from '../popupWindow/popup';

const ProfileWrapper: FC<IShow> = ({ isShow, setShow }) => {
  const { setIsLogin } = useContext(LoginContext);
  const handleExitClick = () => {
    setShow(false);
    setIsLogin(false);
  };
  return (
    <Wrapper
      windowVisualization={{ isShow, setShow }}
      windowStyleID={css.profileWrapper}
    >
      <ProfileElement>Личный кабинет</ProfileElement>
      <ProfileElement>История заказов</ProfileElement>
      <ProfileElement>Избранное</ProfileElement>
      <ProfileElement onClick={handleExitClick}>Выйти</ProfileElement>
    </Wrapper>
  );
};

export default ProfileWrapper;

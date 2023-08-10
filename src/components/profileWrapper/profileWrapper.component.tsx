import { FC } from 'react';
import Wrapper from '../wrapper/wrapper.component';
import ProfileElement from './profileElement/profileElement.component';

import css from './profileWrapper.module.css';
import { IShow } from '../popupWindow/popup';

const ProfileWrapper: FC<IShow> = ({ isShow, setShow }) => {
  return (
    <Wrapper
      windowVisualization={{ isShow, setShow }}
      windowStyleID={css.profileWrapper}
    >
      <ProfileElement>Личный кабинет</ProfileElement>
      <ProfileElement>История заказов</ProfileElement>
      <ProfileElement>Избранное</ProfileElement>
      <ProfileElement>Выйти</ProfileElement>
    </Wrapper>
  );
};

export default ProfileWrapper;

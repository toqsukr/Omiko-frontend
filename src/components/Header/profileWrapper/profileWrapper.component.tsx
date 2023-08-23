import Wrapper from '@components/ui/wrapper/wrapper.component';
import { useActions } from '@hooks/useActions.hook';
import type { IShow } from '@interfaces/show.interface';
import { forwardRef } from 'react';
import ProfileElement from './profileElement/profileElement.component';
import css from './profileWrapper.module.css';

const ProfileWrapper = forwardRef<HTMLDivElement, IShow>(({ isShow, setShow }, ref) => {
  const { logout } = useActions();
  const handleExitClick = () => {
    logout();
    setShow(false);
  };
  return (
    <Wrapper ref={ref} isShow={isShow} setShow={setShow} windowStyleID={css.profileWrapper}>
      <ProfileElement>Личные данные</ProfileElement>
      <ProfileElement>История заказов</ProfileElement>
      <ProfileElement>Избранное</ProfileElement>
      <ProfileElement onClick={handleExitClick}>Выйти</ProfileElement>
    </Wrapper>
  );
});

export default ProfileWrapper;

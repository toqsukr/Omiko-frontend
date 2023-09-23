import PopupWindow from '@components/ui/popupWindow/popupWindow.component';
import { useAuth } from '@hooks/useAuth.hook';
import type { IShow } from '@interfaces/show.interface';
import { FC } from 'react';
import Sign from '../sign.component';
import css from './SignPopup.module.css';

const SignPopup: FC<IShow> = ({ isShow, setShow }) => {
  const { user, isLoading } = useAuth();
  return (
    <PopupWindow
      windowStyleID={css.signWindow}
      isShow={!!!user && isShow}
      setShow={isLoading ? () => {} : setShow}
    >
      <Sign />
    </PopupWindow>
  );
};

export default SignPopup;

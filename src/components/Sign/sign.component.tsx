import PopupWindow from '@components/ui/popupWindow/popupWindow.component';
import { useAuth } from '@hooks/useAuth.hook';
import type { IShow } from '@interfaces/show.interface';
import { FC, useState } from 'react';
import css from './Sign.module.css';
import { SignMode } from './sign.d';
import SignForm from './signForm/signForm.component';

const Sign: FC<IShow> = ({ isShow, setShow }) => {
  const { user, isLoading, emailExist, userNotFound } = useAuth();
  const [signMode, setSignMode] = useState<SignMode>(SignMode.LOGIN);

  return (
    <PopupWindow
      windowStyleID={css.signWindow}
      isShow={!!!user && isShow}
      setShow={isLoading ? () => {} : setShow}
    >
      <div className={css.signInnerContainer}>
        <div className={css.titleContainer}>
          <h1 id={css.title}>{signMode}</h1>
        </div>
        {signMode === SignMode.LOGIN && userNotFound && <div id={css.error}>Неверный логин или пароль</div>}
        {signMode === SignMode.REGISTER && emailExist && (
          <div id={css.error}>Пользователь с таким email уже существует</div>
        )}

        <SignForm signMode={signMode} />

        <div className={css.buttonContainer}>
          <a
            className={css.button}
            id={css.otherBtn}
            onClick={
              !isLoading
                ? () => setSignMode(signMode === SignMode.LOGIN ? SignMode.REGISTER : SignMode.LOGIN)
                : () => {}
            }
          >
            {signMode === SignMode.LOGIN ? 'Регистрация' : 'Вход'}
          </a>
          {signMode === SignMode.LOGIN && (
            <a className={css.button} id={css.otherBtn} onClick={() => setSignMode(SignMode.FORGOT_PASSWORD)}>
              Забыли пароль?
            </a>
          )}
        </div>
      </div>
    </PopupWindow>
  );
};

export default Sign;

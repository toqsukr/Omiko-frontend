import { useAuth } from '@hooks/useAuth.hook';
import { FC, useState } from 'react';
import { SignMode } from './sign.d';
import css from './sign.module.css';
import SignForm from './signForm/signForm.component';

const Sign: FC = () => {
  const { isLoading, emailExist, userNotFound } = useAuth();
  const [signMode, setSignMode] = useState<SignMode>(SignMode.LOGIN);
  return (
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
        <button
          className={css.button}
          id={css.otherBtn}
          onClick={() => setSignMode(signMode === SignMode.LOGIN ? SignMode.REGISTER : SignMode.LOGIN)}
          disabled={isLoading}
        >
          {signMode === SignMode.LOGIN ? 'Регистрация' : 'Вход'}
        </button>
        {signMode === SignMode.LOGIN && (
          <button
            className={css.button}
            id={css.otherBtn}
            disabled={isLoading}
            onClick={() => setSignMode(SignMode.FORGOT_PASSWORD)}
          >
            Забыли пароль?
          </button>
        )}
      </div>
    </div>
  );
};

export default Sign;

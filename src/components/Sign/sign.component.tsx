import { useRef, useState, useContext, FC, SyntheticEvent } from 'react';
import { LoginShowContext } from '@providers/showProviders/LoginShowProvider';
import PopupWindow from '@components/popupWindow/popupWindow.component';
import Input from '@components/input/input.component';

import { SignMode } from './sign.d';
import type { IShow } from '@components/popupWindow/popupWindow';
import css from './Sign.module.css';

const Sign: FC<IShow> = ({ isShow, setShow }) => {
  //   const { isLogin, setIsLogin } = useContext(LoginContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const repeatPassRef = useRef<HTMLInputElement>(null);
  const [signMode, setSignMode] = useState(SignMode.Enter);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [repeatPasswordValue, setRepeatPasswordValue] = useState('');
  const { setIsLogin } = useContext(LoginShowContext);

  function handleModeBtn() {
    setSignMode(
      signMode === SignMode.Register ? SignMode.Enter : SignMode.Register
    );
  }

  function handleRegisterSubmit(event: SyntheticEvent) {
    event.preventDefault();
    if (passwordValue === repeatPasswordValue) {
      setShow(false);
      setIsLogin(true);
    } else return "Passwords don't equal";
  }

  function handleEnterSubmit(event: SyntheticEvent) {
    event.preventDefault();
    setShow(false);
    setIsLogin(true);
  }
  return (
    <PopupWindow
      windowStyleID={css.signWindow}
      isShow={isShow}
      setShow={setShow}
    >
      <div className={css.signInnerContainer}>
        <div className={css.titleContainer}>
          <h1 id={css.title}>
            {signMode === SignMode.Enter ? 'Вход' : 'Регистрация'}
          </h1>
        </div>
        <form
          onSubmit={
            signMode === SignMode.Enter
              ? handleEnterSubmit
              : handleRegisterSubmit
          }
          className={css.form}
        >
          <Input
            ref={emailRef}
            required={true}
            className={css.input}
            label='Email'
            type='email'
            onChange={setEmailValue}
          />
          <Input
            ref={passRef}
            required={true}
            className={css.input}
            label='Пароль'
            type='password'
            onChange={setPasswordValue}
          />
          {signMode === SignMode.Register && (
            <Input
              ref={repeatPassRef}
              required={true}
              className={css.input}
              label='Подтвердите пароль'
              type='password'
              onChange={setRepeatPasswordValue}
            />
          )}
          {signMode === SignMode.Register ? (
            <button className={css.button} id={css.submitBtn}>
              Зарегистрироваться
            </button>
          ) : (
            <button className={css.button} id={css.submitBtn}>
              Войти
            </button>
          )}
        </form>

        <div className={css.buttonContainer}>
          <a className={css.button} id={css.otherBtn} onClick={handleModeBtn}>
            {signMode === SignMode.Register ? 'Вход' : 'Регистрация'}
          </a>
          {signMode === SignMode.Enter && (
            <a className={css.button} id={css.otherBtn}>
              Забыли пароль?
            </a>
          )}
        </div>
      </div>
    </PopupWindow>
  );
};

export default Sign;

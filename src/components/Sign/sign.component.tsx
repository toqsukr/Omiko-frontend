import { useRef, useState, useContext, FC, SyntheticEvent } from 'react';
import { LoginContext } from '../../providers/LoginProvider';
import PopupWindow from '../popupWindow/popupWindow.component';
import Input from '../input/input.component';

import { SignMode } from './sign.d';
import type { IShow } from '../popupWindow/popup.d';
import css from './Sign.module.css';

const Sign: FC<IShow> = ({ isShow, setShow }) => {
  //   const { isLogin, setIsLogin } = useContext(LoginContext);
  const [signMode, setSignMode] = useState(SignMode.Enter);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const repeatPassRef = useRef<HTMLInputElement>(null);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  function handleModeBtn() {
    setSignMode(
      signMode === SignMode.Register ? SignMode.Enter : SignMode.Register
    );
  }

  function handleRegisterSubmit(event: SyntheticEvent) {
    event.preventDefault();
    console.log(`Registred new user: ${emailValue} ${passwordValue}`);
  }

  function handleEnterSubmit(event: SyntheticEvent) {
    event.preventDefault();
    console.log(`Entered old user: ${emailValue} ${passwordValue}`);
  }
  return (
    <PopupWindow
      windowStyle={css.signWindow}
      windowVisualization={{ isShow, setShow }}
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
            value={emailValue}
            onChange={setEmailValue}
          />
          <Input
            ref={passRef}
            required={true}
            className={css.input}
            label='Пароль'
            type='password'
            value={passwordValue}
            onChange={setPasswordValue}
          />
          {signMode === SignMode.Register && (
            <Input
              className={css.input}
              label='Подтвердите пароль'
              type='password'
              ref={repeatPassRef}
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

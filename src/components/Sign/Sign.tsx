import PopupWindow from '../PopupWindow/PopupWindow';
import { useRef, useState, useContext } from 'react';
import { LoginContext } from '../../providers/LoginProvider';
import Input from '../Input/Input';
import css from './Sign.module.css';

interface ISign {
  sign: boolean;
  setSign: (value: boolean) => void;
}

enum SignMode {
  Register,
  Enter,
}

export default function Sign({ sign, setSign }: ISign) {
  //   const { isLogin, setIsLogin } = useContext(LoginContext);
  const [signMode, setSignMode] = useState(SignMode.Enter);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const repeatPassRef = useRef(null);

  function handleModeBtn() {
    setSignMode(
      signMode === SignMode.Register ? SignMode.Enter : SignMode.Register
    );
  }
  return (
    <PopupWindow windowStyle={css.signWindow} isShow={sign} setShow={setSign}>
      <div className={css.signInnerContainer}>
        <div className={css.titleContainer}>
          <h1 id={css.title}>
            {signMode === SignMode.Enter ? 'Вход' : 'Регистрация'}
          </h1>
        </div>
        <div className={css.inputContainer}>
          <Input
            className={css.input}
            label='Email'
            type='email'
            inputRef={emailRef}
          />
          <Input
            className={css.input}
            label='Пароль'
            type='password'
            inputRef={passRef}
          />
          {signMode === SignMode.Register && (
            <Input
              className={css.input}
              label='Подтвердите пароль'
              type='password'
              inputRef={repeatPassRef}
            />
          )}
        </div>
        <div className={css.buttonContainer}>
          <button className={css.button}>
            {signMode === SignMode.Register ? 'Зарегистрироваться' : 'Войти'}
          </button>
          <button className={css.button} onClick={handleModeBtn}>
            {signMode === SignMode.Register ? 'Вход' : 'Регистрация'}
          </button>
          {signMode === SignMode.Enter && (
            <button className={css.button}>Забыли пароль?</button>
          )}
        </div>
      </div>
    </PopupWindow>
  );
}

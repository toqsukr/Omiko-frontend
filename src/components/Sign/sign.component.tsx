import PopupWindow from '../popupWindow/popupWindow.component';
import { useRef, useState, useContext, FC } from 'react';
import { LoginContext } from '../../providers/LoginProvider';
import Input from '../input/input.component';
import css from './Sign.module.css';

export interface ISign {
  sign: boolean;
  setSign: (value: boolean) => void;
}

enum SignMode {
  Register,
  Enter,
}

const Sign: FC<ISign> = ({ sign, setSign }) => {
  //   const { isLogin, setIsLogin } = useContext(LoginContext);
  const [signMode, setSignMode] = useState(SignMode.Enter);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const repeatPassRef = useRef<HTMLInputElement>(null);

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
            ref={emailRef}
          />
          <Input
            className={css.input}
            label='Пароль'
            type='password'
            ref={passRef}
          />
          {signMode === SignMode.Register && (
            <Input
              className={css.input}
              label='Подтвердите пароль'
              type='password'
              ref={repeatPassRef}
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
};

export default Sign;

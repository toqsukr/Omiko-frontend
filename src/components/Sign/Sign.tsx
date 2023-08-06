import PopupWindow from '../PopupWindow/PopupWindow';
import { useState, useContext } from 'react';
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
  return (
    <PopupWindow windowStyle={css.signWindow} isShow={sign} setShow={setSign}>
      <div className={css.signInnerContainer}>
        <div className={css.titleContainer}>
          <h1 id={css.title}>
            {signMode === SignMode.Enter ? 'Вход' : 'Регистрация'}
          </h1>
        </div>
        <div className={css.inputContainer}>
          <Input className={css.input} label='Email' type='email' />
          <Input className={css.input} label='Пароль' type='password' />
          {signMode === SignMode.Register && (
            <Input
              className={css.input}
              label='Подтвердите пароль'
              type='password'
            />
          )}
        </div>
        <div className={css.buttonContainer}>
          <button className={css.button}>
            {signMode === SignMode.Register ? 'Зарегистрироваться' : 'Войти'}
          </button>
          <button
            className={css.button}
            onClick={() =>
              setSignMode(
                signMode === SignMode.Register
                  ? SignMode.Enter
                  : SignMode.Register
              )
            }
          >
            {signMode === SignMode.Register ? 'Вход' : 'Регистрация'}
          </button>
        </div>
      </div>
    </PopupWindow>
  );
}

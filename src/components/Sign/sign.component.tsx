import { useState, useContext, FC } from 'react';
import { useForm } from 'react-hook-form';
import { LoginShowContext } from '@providers/showProviders/LoginShowProvider';
import PopupWindow from '@components/popupWindow/popupWindow.component';
import Input from '@components/input/input.component';
import { ILogin, ISignInput } from 'src/types/sign.interface';

import { SignMode } from './sign.d';
import type { IShow } from '@components/popupWindow/popupWindow';
import css from './Sign.module.css';

const Sign: FC<IShow> = ({ isShow, setShow }) => {
  //   const { isLogin, setIsLogin } = useContext(LoginContext);
  const [signMode, setSignMode] = useState(SignMode.Enter);
  const { setIsLogin } = useContext(LoginShowContext);

  const { register, reset, handleSubmit } = useForm<ISignInput>();

  function handleModeBtn() {
    setSignMode(signMode === SignMode.Register ? SignMode.Enter : SignMode.Register);
  }

  const registerSubmit = (data: ISignInput) => {
    if (data.password === data.repeatPassword) {
      setShow(false);
      setIsLogin(true);
      console.log(data);
      reset();
    } else alert("Passwods don't equal");
  };

  const enterSubmit = (data: ILogin) => {
    setShow(false);
    setIsLogin(true);
    console.log(data);
    reset();
  };
  return (
    <PopupWindow windowStyleID={css.signWindow} isShow={isShow} setShow={setShow}>
      <div className={css.signInnerContainer}>
        <div className={css.titleContainer}>
          <h1 id={css.title}>{signMode === SignMode.Enter ? 'Вход' : 'Регистрация'}</h1>
        </div>
        <form
          onSubmit={handleSubmit(signMode === SignMode.Enter ? enterSubmit : registerSubmit)}
          className={css.form}
        >
          <Input
            className={css.input}
            label="Email"
            type="email"
            register={register('email', { required: 'Email is required' })}
          />
          <Input
            className={css.input}
            label="Пароль"
            type="password"
            register={register('password', { required: 'Password is required' })}
          />
          {signMode === SignMode.Register && (
            <Input
              className={css.input}
              label="Подтвердите пароль"
              type="password"
              register={register('repeatPassword', { required: 'Repeat password is required' })}
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

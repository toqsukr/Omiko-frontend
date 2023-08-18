import { FC, useContext } from 'react';
import PopupWindow from '@components/popupWindow/popupWindow.component';
import Input from '@components/input/input.component';
import { useSignMode } from '@hooks/useSignMode.hook';

import { SignMode } from './sign.d';
import type { IShow } from '@interfaces/show.interface';
import css from './Sign.module.css';
import { ISignInput, ILogin } from '@interfaces/sign.interface';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { LoginShowContext } from '@providers/showProviders/LoginShowProvider';
import Cookies from 'js-cookie';
import authService from '@services/auth.service';

const Sign: FC<IShow> = ({ isShow, setShow }) => {
  const { register, reset, handleSubmit } = useForm<ISignInput>();
  const { setIsLogin } = useContext(LoginShowContext);
  const { signMode, handleModeBtn } = useSignMode();
  const registerMutation = useMutation(
    ['register'],
    ({ repeatPassword, ...userData }: ISignInput) => authService.registration(userData),
    {
      onSuccess(data) {
        alert(`Registered new user ${data.data}`);
        Cookies.set('auth', data?.data);
      },
      onError(error) {
        alert(error);
      }
    }
  );
  const loginMutation = useMutation(['login'], (userData: ILogin) => authService.login(userData), {
    onSuccess(data) {
      alert(`Registered new user ${data.data}`);
      Cookies.set('auth', data?.data);
    },
    onError(error) {
      alert(error);
    }
  });

  const registerSubmit = (data: ISignInput) => {
    try {
      if (data.password === data.repeatPassword) {
        console.log(data);
        registerMutation.mutate(data);
        setShow(false);
        setIsLogin(true);
        reset();
      } else alert("Passwords don't equal");
    } catch (e) {
      console.log(e);
    }
  };

  const enterSubmit = (data: ILogin) => {
    try {
      console.log(data);
      loginMutation.mutate(data);
      setShow(false);
      setIsLogin(true);
      reset();
    } catch (e) {
      console.log(e);
    }
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

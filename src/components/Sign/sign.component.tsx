import { FC } from 'react';
import PopupWindow from '@components/popupWindow/popupWindow.component';
import Input from '@components/input/input.component';
import { useSignMode } from '@hooks/useSignMode.hook';
import type { IShow } from '@interfaces/show.interface';
import { useAuth } from '@hooks/useAuth.hook';
import { SignMode } from './sign.d';
import css from './Sign.module.css';

const Sign: FC<IShow> = ({ isShow, setShow }) => {
  const { register, handleSubmit, enterSubmit, registerSubmit } = useAuth({ setShow });
  const { signMode, handleModeBtn } = useSignMode();

  const handleAuthSubmit = handleSubmit(signMode === SignMode.Enter ? enterSubmit : registerSubmit);

  return (
    <PopupWindow windowStyleID={css.signWindow} isShow={isShow} setShow={setShow}>
      <div className={css.signInnerContainer}>
        <div className={css.titleContainer}>
          <h1 id={css.title}>{signMode === SignMode.Enter ? 'Вход' : 'Регистрация'}</h1>
        </div>
        <form onSubmit={handleAuthSubmit} className={css.form}>
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

import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import PopupWindow from '@components/popupWindow/popupWindow.component';
import Input from '@components/input/input.component';
import { IEmailPassword } from '@store/user/user.interface';
import { login, register } from '@store/user/user.actions';
import { useSignMode } from '@hooks/useSignMode.hook';
import { useAuth } from '@hooks/useAuth.hook';
import type { IShow } from '@interfaces/show.interface';
import { ISignInput } from '@interfaces/sign.interface';
import { validEmail } from './valid-email';
import { SignMode } from './sign.d';
import css from './Sign.module.css';

const Sign: FC<IShow> = ({ isShow, setShow }) => {
  const { isLoading } = useAuth();
  const {
    register: formRegister,
    reset,
    formState: { errors },
    handleSubmit
  } = useForm<ISignInput>({ mode: 'onChange' });

  const { signMode, handleModeBtn } = useSignMode();
  const onSubmit: SubmitHandler<IEmailPassword> = data => {
    if (signMode === SignMode.Login) login(data);
    else register(data);
    reset();
  };

  return (
    <PopupWindow windowStyleID={css.signWindow} isShow={isShow} setShow={setShow}>
      <div className={css.signInnerContainer}>
        <div className={css.titleContainer}>
          <h1 id={css.title}>{signMode === SignMode.Login ? 'Вход' : 'Регистрация'}</h1>
        </div>
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            className={css.input}
            placeholder="Email"
            type="email"
            {...formRegister('email', {
              required: 'Email is required',
              pattern: {
                value: validEmail,
                message: 'Invalid email address'
              }
            })}
            error={errors.email?.message}
          />
          <Input
            className={css.input}
            placeholder="Пароль"
            type="password"
            {...formRegister('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Password length should more 6 symbols' }
            })}
            error={errors.password?.message}
          />
          {signMode === SignMode.Register && (
            <Input
              className={css.input}
              placeholder="Подтвердите пароль"
              type="password"
              {...formRegister('repeatPassword', {
                required: 'Repeat password is required',
                minLength: { value: 6, message: 'Password length should more 6 symbols' }
              })}
              error={errors.repeatPassword?.message}
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
          {signMode === SignMode.Login && (
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

import Input from '@components/ui/input/input.component';
import Loader from '@components/ui/loader/loader';
import PopupWindow from '@components/ui/popupWindow/popupWindow.component';
import { useActions } from '@hooks/useActions.hook';
import { useAuth } from '@hooks/useAuth.hook';
import { useSignMode } from '@hooks/useSignMode.hook';
import type { IShow } from '@interfaces/show.interface';
import { ISignInput } from '@interfaces/sign.interface';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import css from './Sign.module.css';
import { validEmail, validPassword } from './sign-validation';
import { SignMode } from './sign.d';

const Sign: FC<IShow> = ({ isShow, setShow }) => {
  const { user, isLoading, emailExist, userNotFound } = useAuth();
  const { login, register } = useActions();
  const {
    register: formRegister,
    formState: { errors },
    handleSubmit,
    watch
  } = useForm<ISignInput>();

  const { signMode, handleModeBtn } = useSignMode();
  const onSubmit: SubmitHandler<ISignInput> = ({ repeatPassword, ...data }) => {
    if (signMode === SignMode.LOGIN) login(data);
    else register(data);
  };

  const passwordMatch = () => watch('password') === watch('repeatPassword') || 'Пароли не совпадают';

  return (
    <PopupWindow
      windowStyleID={css.signWindow}
      isShow={!!!user && isShow}
      setShow={isLoading ? () => {} : setShow}
    >
      <div className={css.signInnerContainer}>
        <div className={css.titleContainer}>
          <h1 id={css.title}>{signMode === SignMode.LOGIN ? 'Вход' : 'Регистрация'}</h1>
        </div>
        {signMode === SignMode.LOGIN && userNotFound && <div id={css.error}>Неверный логин или пароль</div>}
        {signMode === SignMode.REGISTER && emailExist && (
          <div id={css.error}>Пользователь с таким email уже существует</div>
        )}
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            className={css.input}
            placeholder="Email"
            disabled={isLoading}
            type="text"
            {...formRegister('username', {
              required: 'Введите ваш email',
              pattern: {
                value: validEmail,
                message: 'Введен некорректный email'
              }
            })}
            error={errors.username?.message}
          />
          <Input
            className={css.input}
            placeholder="Пароль"
            disabled={isLoading}
            type="password"
            {...formRegister('password', {
              required: 'Введите ваш пароль',
              minLength: { value: 6, message: 'Пароль должен состоять минимум из 6 символов' },
              pattern: {
                value: validPassword,
                message: 'Пароль должен содержать заглавные буквы, цифры и спецсимволы'
              }
            })}
            error={errors.password?.message}
          />
          {signMode === SignMode.REGISTER && (
            <Input
              className={css.input}
              disabled={isLoading}
              placeholder="Подтвердите пароль"
              type="password"
              {...formRegister('repeatPassword', {
                required: 'Подтвердите ваш пароль',
                minLength: { value: 6, message: 'Пароль должен состоять минимум из 6 символов' },
                validate: passwordMatch
              })}
              error={errors.repeatPassword?.message}
            />
          )}

          {isLoading ? (
            <Loader />
          ) : signMode === SignMode.REGISTER ? (
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
          <a className={css.button} id={css.otherBtn} onClick={!isLoading ? handleModeBtn : () => {}}>
            {signMode === SignMode.REGISTER ? 'Вход' : 'Регистрация'}
          </a>
          {signMode === SignMode.LOGIN && (
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

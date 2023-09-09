import Input from '@components/ui/input/input.component';
import Loader from '@components/ui/loader/loader';
import { useActions } from '@hooks/useActions.hook';
import { useAuth } from '@hooks/useAuth.hook';
import { ISignInput } from '@interfaces/sign.interface';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { validEmail, validPassword } from '../sign-validation';
import { SignMode } from '../sign.d';
import css from './SignForm.module.css';
import { ISignForm } from './signForm.d';

const SignForm: FC<ISignForm> = ({ signMode }) => {
  const { isLoading } = useAuth();
  const { login, register } = useActions();
  const {
    register: formRegister,
    formState: { errors },
    handleSubmit,
    watch
  } = useForm<ISignInput>();

  const onSubmit: SubmitHandler<ISignInput> = ({ repeatPassword, ...data }) => {
    switch (signMode) {
      case SignMode.LOGIN:
        login(data);
        break;
      case SignMode.REGISTER:
        register(data);
        break;
      case SignMode.FORGOT_PASSWORD:
        break;
    }
  };

  const passwordMatch = () => watch('password') === watch('repeatPassword') || 'Пароли не совпадают';

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
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
        {(signMode === SignMode.LOGIN || signMode === SignMode.REGISTER) && (
          <Input
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
        )}
        {signMode === SignMode.REGISTER && (
          <Input
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

        {signMode === SignMode.FORGOT_PASSWORD && (
          <Input
            disabled={isLoading}
            placeholder="Код подтверждения"
            type="text"
            {...formRegister('repeatPassword', {
              required: 'Введите код из электронного письма'
            })}
            error={errors.repeatPassword?.message}
          />
        )}

        {isLoading ? (
          <Loader />
        ) : (
          <button className={css.button} id={css.submitBtn}>
            {signMode === SignMode.LOGIN
              ? 'Войти'
              : signMode === SignMode.REGISTER
              ? 'Зарегистрироваться'
              : 'Получить код'}
          </button>
        )}
      </form>
    </>
  );
};

export default SignForm;

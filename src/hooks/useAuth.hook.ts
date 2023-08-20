import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { ISignInput, ILogin } from '@interfaces/sign.interface';
import authService from '@services/auth.service';
import Cookies from 'js-cookie';
import { LoginShowContext } from '@providers/showProviders/LoginShowProvider';
import { IShow } from '@interfaces/show.interface';

export const useAuth = ({ setShow }: Omit<IShow, 'isShow'>) => {
  const { register, reset, handleSubmit } = useForm<ISignInput>();
  const { setIsLogin } = useContext(LoginShowContext);

  const registerMutation = useMutation(
    ['register'],
    ({ repeatPassword, ...userData }: ISignInput) => authService.registration(userData),
    {
      onSuccess(data) {
        alert(`Registered new user ${data.data}`);
      },
      onError(error) {
        alert(error);
      }
    }
  );
  const loginMutation = useMutation(['login'], (userData: ILogin) => authService.login(userData), {
    onSuccess(data) {
      // alert('Welcome back');
      setShow(false);
      setIsLogin(true);
      reset();
      Cookies.set('accessToken', data?.data?.access_token);
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
        loginMutation.mutate(data);
      } else alert("Passwords don't equal");
    } catch (e) {
      console.log(e);
    }
  };

  const enterSubmit = (data: ILogin) => {
    try {
      console.log(data);
      loginMutation.mutate(data);
    } catch (e) {
      console.log(e);
    }
  };

  return { register, handleSubmit, enterSubmit, registerSubmit };
};

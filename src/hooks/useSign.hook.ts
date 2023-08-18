import { useContext } from 'react';
import { LoginShowContext } from '@providers/showProviders/LoginShowProvider';
import { IShow } from '@interfaces/show.interface';
import { ISignInput, ILogin } from '@interfaces/sign.interface';

export function useSign({ setShow }: Omit<IShow, 'isShow'>) {
  const { setIsLogin } = useContext(LoginShowContext);
  const registerSubmit = (data: ISignInput) => {
    if (data.password === data.repeatPassword) {
      setShow(false);
      setIsLogin(true);
      console.log(data);
    } else alert("Passwords don't equal");
  };

  const enterSubmit = (data: ILogin) => {
    setShow(false);
    setIsLogin(true);
    console.log(data);
  };
  return { enterSubmit, registerSubmit };
}

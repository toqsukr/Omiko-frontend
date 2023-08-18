import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoginShowContext } from '@providers/showProviders/LoginShowProvider';
import { IShow } from '@interfaces/show.interface';
import { ISignInput, ILogin } from '@interfaces/sign.interface';
import { SignMode } from '@components/sign/sign.d';

export function useSign({ setShow }: Omit<IShow, 'isShow'>) {
  const [signMode, setSignMode] = useState(SignMode.Enter);
  const { setIsLogin } = useContext(LoginShowContext);
  const { register, reset, handleSubmit } = useForm<ISignInput>({ mode: 'onChange' });

  const registerSubmit = (data: ISignInput) => {
    if (data.password === data.repeatPassword) {
      setShow(false);
      setIsLogin(true);
      console.log(data);
      reset();
    } else alert("Passwords don't equal");
  };

  const enterSubmit = (data: ILogin) => {
    setShow(false);
    setIsLogin(true);
    console.log(data);
    reset();
  };

  const handleModeBtn = () =>
    setSignMode(signMode === SignMode.Register ? SignMode.Enter : SignMode.Register);

  return { signMode, register, handleSubmit, registerSubmit, enterSubmit, handleModeBtn };
}

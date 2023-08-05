import PopupWindow from '../PopupWindow/PopupWindow';
import { useContext } from 'react';
import { LoginContext } from '../../providers/LoginProvider';
import css from './Sign.module.css';

interface ISign {
  sign: boolean;
  setSign: (value: boolean) => void;
}

export default function Sign({ sign, setSign }: ISign) {
  //   const { isLogin, setIsLogin } = useContext(LoginContext);
  return (
    <PopupWindow windowStyle={css.signWindow} isShow={sign} setShow={setSign}>
      <div></div>
    </PopupWindow>
  );
}

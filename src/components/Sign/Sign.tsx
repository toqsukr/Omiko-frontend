import PopupWindow from '../PopupWindow/PopupWindow';
import { useContext } from 'react';
import { LoginContext } from '../../providers/LoginProvider';
import Input from '../Input/Input';
import css from './Sign.module.css';

interface ISign {
  sign: boolean;
  setSign: (value: boolean) => void;
}

export default function Sign({ sign, setSign }: ISign) {
  //   const { isLogin, setIsLogin } = useContext(LoginContext);
  return (
    <PopupWindow windowStyle={css.signWindow} isShow={sign} setShow={setSign}>
      <div className={css.signInnerContainer}>
        <div className={css.titleContainer}>
          <h1 id={css.title}>Вход</h1>
        </div>
        <div className={css.inputContainer}>
          <Input className={css.input} type='text' />
          <Input className={css.input} type='text' />
          <Input className={css.input} type='text' />
        </div>
      </div>
    </PopupWindow>
  );
}

import { ReactSVG } from 'react-svg';
import css from './Signin.module.css';

export default function Signin() {
  return (
    <div className={css.signinContainer}>
      <ReactSVG src='icons/signin.svg' />
    </div>
  );
}

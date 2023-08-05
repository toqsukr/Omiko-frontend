import Icon from '../Icon/Icon';
import css from './Profile.module.css';

interface IProfile {
  sign: boolean;
  setSign: (value: boolean) => void;
}

export default function Profile({ sign, setSign }: IProfile) {
  return (
    <div className={css.profileContainer}>
      <div className={css.signinContainer}>
        <Icon src='icons/shoppingcart.svg' id={css.cart} />
        <Icon
          src='icons/signin.svg'
          id={css.signin}
          onClick={() => setSign(!sign)}
        />
      </div>
    </div>
  );
}

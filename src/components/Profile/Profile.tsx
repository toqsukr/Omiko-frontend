import Icon from '../Icon/Icon';
import css from './Profile.module.css';

export default function Profile() {
  return (
    <div className={css.profileContainer}>
      <div className={css.signinContainer}>
        <Icon src='icons/shoppingcart.svg' id={css.cart} />
        <Icon src='icons/signin.svg' id={css.signin} />
      </div>
    </div>
  );
}

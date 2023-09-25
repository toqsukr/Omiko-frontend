import { useActions } from '@hooks/useActions.hook';
import { useWishlist } from '@hooks/useWishlist.hook';
import { ICardData } from '@interfaces/data.interface';
import classNames from 'classnames';
import { FC } from 'react';
import HeartIcon from '../HeartIcon.component';
import css from './WishIcon.module.css';

const WishIcon: FC<ICardData> = ({ ...data }) => {
  const { isAtWishlist } = useWishlist();
  const { toggleWishlist } = useActions();
  return (
    <HeartIcon
      className={classNames({
        [css.heartFilled]: isAtWishlist(data.id),
        [css.heart]: !isAtWishlist(data.id)
      })}
      onClick={() => toggleWishlist(data)}
    />
  );
};

export default WishIcon;

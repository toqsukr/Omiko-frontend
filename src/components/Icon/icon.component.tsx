import { FC } from 'react';
import type { IIcon } from './icon';
import css from './Icon.module.css';

const Icon: FC<IIcon> = ({ onClick, ...props }) => {
  return (
    <span onClick={onClick} className={css.iconContainer}>
      <img {...props} />
    </span>
  );
};

export default Icon;

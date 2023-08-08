import { FC } from 'react';
import css from './Icon.module.css';

interface IIcon {
  src: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined;
  id?: string;
  alt?: string;
}

const Icon: FC<IIcon> = ({ onClick, ...props }) => {
  return (
    <span onClick={onClick} className={css.iconContainer}>
      <img {...props} />
    </span>
  );
};

export default Icon;

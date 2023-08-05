import css from './Icon.module.css';

interface IIcon {
  src: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined;
  id?: string;
  alt?: string;
}

export default function Icon({ onClick, ...props }: IIcon) {
  return (
    <span onClick={onClick} className={css.iconContainer}>
      <img {...props} />
    </span>
  );
}

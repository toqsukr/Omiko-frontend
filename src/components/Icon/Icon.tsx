import css from './Icon.module.css';

interface IIcon {
  src: string;
  className?: string;
  id?: string;
  alt?: string;
}

export default function Icon({ ...props }: IIcon) {
  return (
    <span className={css.iconContainer}>
      <img {...props} />
    </span>
  );
}

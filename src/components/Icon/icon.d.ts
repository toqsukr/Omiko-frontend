export interface IIcon {
  src: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined;
  id?: string;
  alt?: string;
}

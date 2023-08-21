import { ButtonHTMLAttributes } from 'react';

export interface IIcon extends ImageHTMLAttributes<HTMLImageElement> {
  onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined;
}

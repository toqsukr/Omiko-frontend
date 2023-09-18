import { SVGAttributes } from 'react';

export interface IIcon extends SVGAttributes<HTMLOrSVGElement> {
  filled?: boolean;
  onClick?: React.MouseEventHandler<HTMLOrSVGElement>;
}

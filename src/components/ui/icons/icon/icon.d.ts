import { SVGAttributes } from 'react';

export interface IIcon extends SVGAttributes<HTMLOrSVGElement> {
  filled?: boolean;
  colored?: boolean;
  onClick?: React.MouseEventHandler<HTMLOrSVGElement>;
}

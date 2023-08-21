import { SVGAttributes } from 'react';

export interface IIcon extends SVGAttributes<HTMLOrSVGElement> {
  onClick?: React.MouseEventHandler<HTMLOrSVGElement> | undefined;
}

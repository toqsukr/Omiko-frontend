import { AllHTMLAttributes } from 'react';

export interface IGlyf extends AllHTMLAttributes<HTMLDivElement> {
  onClick?: MouseEventHandler<HTMLDivElement>;
}

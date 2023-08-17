import { UseFormRegisterReturn } from 'react-hook-form';

export interface IInput {
  register: UseFormRegisterReturn;
  label?: string;
  type?: string;
  className?: string;
  id?: string;
}

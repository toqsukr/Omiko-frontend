import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  error?: string;
}

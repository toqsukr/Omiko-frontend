export interface IInput {
  label?: string;
  type?: string;
  value?: string;
  required?: boolean;
  onChange?: (value: string) => void;
  className?: string;
  id?: string;
}

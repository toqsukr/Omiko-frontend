import css from './Input.module.css';

interface IInput {
  type?: string;
  className?: string;
  id?: string;
}

export default function Input({ type, ...props }: IInput) {
  return (
    <div {...props}>
      <input className={css.input} type={type} />
    </div>
  );
}

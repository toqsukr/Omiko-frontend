import css from './Input.module.css';

interface IInput {
  type?: string;
  className?: string;
  id?: string;
}

export default function Input({ type, ...props }: IInput) {
  return (
    <div {...props}>
      <label className={css.label}>
        <input className={css.input} type={type} />
      </label>
    </div>
  );
}

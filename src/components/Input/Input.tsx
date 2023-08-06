import { useRef, useState } from 'react';
import classnames from 'classnames';
import css from './Input.module.css';

interface IInput {
  label?: string;
  type?: string;
  className?: string;
  id?: string;
}

export default function Input({ type, label, ...props }: IInput) {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);
  return (
    <div {...props}>
      <label className={css.label}>
        <input
          ref={inputRef}
          onFocus={() => setFocused(true)}
          onBlur={(e) => setFocused(e.target.value ? true : false)}
          className={css.input}
          type={type}
        />
        <span
          className={classnames({
            [css.labelText]: true,
            [css.content]: focused,
            [css.withoutContent]: !focused,
          })}
        >
          {label}
        </span>
      </label>
    </div>
  );
}

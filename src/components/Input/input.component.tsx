import { useState, FC } from 'react';
import classnames from 'classnames';

import type { IInput } from './input';
import css from './Input.module.css';

const Input: FC<IInput> = ({ label, type, register, ...props }) => {
  const [focused, setFocused] = useState(false);
  const { onBlur, ...registerWithoutOnBlur } = register;
  return (
    <div {...props}>
      <label className={css.label}>
        <input
          onFocus={() => setFocused(true)}
          onBlur={e => setFocused(!!e.target.value)}
          className={css.input}
          type={type}
          {...registerWithoutOnBlur}
        />
        <span
          className={classnames({
            [css.labelText]: true,
            [css.content]: focused,
            [css.withoutContent]: !focused
          })}
        >
          {label}
        </span>
      </label>
    </div>
  );
};

export default Input;

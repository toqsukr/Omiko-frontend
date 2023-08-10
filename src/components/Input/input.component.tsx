import { useState, forwardRef } from 'react';
import classnames from 'classnames';

import type { IInput } from './input';
import css from './Input.module.css';

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ label, type, value, onChange, required, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    return (
      <div {...props}>
        <label className={css.label}>
          <input
            ref={ref}
            required={required}
            onFocus={() => setFocused(true)}
            onChange={(e) => onChange && onChange(e.target.value)}
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
);

export default Input;

import { useState, forwardRef } from 'react';
import classnames from 'classnames';

import type { IInput } from './input';
import css from './Input.module.css';

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ placeholder, error, type, className, id, ...rest }, ref) => {
    const [focused, setFocused] = useState(false);
    const { onBlur, ...otherRest } = rest;
    return (
      <div className={className} id={id}>
        <label className={css.label}>
          <input
            ref={ref}
            onFocus={() => setFocused(true)}
            onBlur={e => setFocused(!!e.target.value)}
            className={css.input}
            type={type}
            {...otherRest}
          />
          <span
            className={classnames({
              [css.labelText]: true,
              [css.content]: focused,
              [css.withoutContent]: !focused
            })}
          >
            {placeholder}
          </span>
        </label>
        {error && <div className={css.error}>{error}</div>}
      </div>
    );
  }
);
export default Input;

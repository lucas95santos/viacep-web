import React, { InputHTMLAttributes } from 'react';
// styles
import '../styles/input.css';

interface InputError {
  message: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  error: InputError | null;
}

function Input(props: InputProps): JSX.Element {
  const { value, error, ...rest } = props;

  return (
    <div className="input-container">
      <input
        value={value}
        className={`${error ? 'input-container__input--error' : null}`}
        type="text"
        {...rest}
      />
      {error && (
        <span className="input-container__error-text">{error.message}</span>
      )}
    </div>
  );
}

export { Input };

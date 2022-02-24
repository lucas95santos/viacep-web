import React, { FormEvent, InputHTMLAttributes } from 'react';
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

  function handleKeyUp(event: FormEvent<HTMLInputElement>) {
    event.currentTarget.maxLength = 9;
    let inputValue = event.currentTarget.value;
    inputValue = inputValue.replace(/\D/g, '');
    inputValue = inputValue.replace(/^(\d{5})(\d)/, '$1-$2');

    event.currentTarget.value = inputValue;
    return event;
  }

  return (
    <div className="input-container">
      <input
        value={value}
        className={`${error ? 'input-container__input--error' : null}`}
        type="text"
        onKeyUp={handleKeyUp}
        {...rest}
      />
      {error && (
        <span className="input-container__error-text">{error.message}</span>
      )}
    </div>
  );
}

export { Input };

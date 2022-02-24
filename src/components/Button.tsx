import React, { ButtonHTMLAttributes } from 'react';
// loading
import ReactLoading from 'react-loading';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  loading: boolean;
}

function Button(props: ButtonProps): JSX.Element {
  const { text, type, loading, ...rest } = props;

  return (
    <button type={type} disabled={loading} {...rest}>
      {text}
      {loading && (
        <ReactLoading type="spin" color="#ffffff" height={18} width={18} />
      )}
    </button>
  );
}

export { Button };

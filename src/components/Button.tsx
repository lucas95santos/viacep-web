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
    <button type={type} {...rest}>
      {loading ? (
        <ReactLoading type="spin" color="#ffffff" height={20} width={20} />
      ) : (
        text
      )}
    </button>
  );
}

export { Button };

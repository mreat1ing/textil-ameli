import { FC, FormEvent } from 'react';

import './Button.scss';

interface IButton {
  children: React.ReactNode;
  className?: string;
  type?: 'submit' | 'button';
  submitHandler?: () => void;
}

const Button: FC<IButton> = ({ children, className, type, submitHandler }) => {
  const buttonClass = 'base-button' + (className ? ' ' + className : '');

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    if (submitHandler) submitHandler();
  };

  return (
    <button className={buttonClass} type={type} onClick={handleSubmit}>
      {children}
    </button>
  );
};

export default Button;

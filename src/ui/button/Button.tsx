import { FC } from 'react';

import './Button.scss';

interface IButton {
  children: React.ReactNode;
  className?: string;
  type?: 'submit' | 'button';
  submitHandler?: () => void;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: FC<IButton> = ({
  children,
  className,
  type,
  submitHandler,
  onClick,
  disabled,
}) => {
  const buttonClass = 'base-button' + (className ? ' ' + className : '');

  const handleSubmit = () => {
    if (submitHandler) submitHandler();
    if (onClick) onClick();
  };

  return (
    <button
      className={buttonClass}
      type={type}
      onClick={handleSubmit}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

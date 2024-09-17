import { FC } from 'react';

import './Button.scss';

interface IButton {
  children: React.ReactNode;
  className?: string;
  type?: 'submit' | 'button';
  submitHandler?: () => void;
  onClick?: () => void;
}

const Button: FC<IButton> = ({
  children,
  className,
  type,
  submitHandler,
  onClick,
}) => {
  const buttonClass = 'base-button' + (className ? ' ' + className : '');

  const handleSubmit = () => {
    if (submitHandler) submitHandler();
    if (onClick) onClick();
  };

  return (
    <button className={buttonClass} type={type} onClick={handleSubmit}>
      {children}
    </button>
  );
};

export default Button;

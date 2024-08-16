import { FC } from 'react';

import './Button.scss';

interface IButton {
  children: string;
  className?: string;
}

const Button: FC<IButton> = ({ children, className }) => {
  return (
    <button className={`base-button${className ? ' ' + className : ''}`}>
      {children}
    </button>
  );
};

export default Button;

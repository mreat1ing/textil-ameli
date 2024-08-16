import { FC } from 'react';

import './Button.scss';

interface IButton {
  children: string;
}

const Button: FC<IButton> = ({ children }) => {
  return <button className="base-button">{children}</button>;
};

export default Button;

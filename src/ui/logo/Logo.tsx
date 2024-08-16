import { FC } from 'react';

import logo from 'src/assets/img/logo.svg';

import './Logo.scss';

interface ILogo {
  width?: string;
  height?: string;
}

const Logo: FC<ILogo> = ({ width, height }) => {
  return <img src={logo} alt="logo" width={width} height={height}></img>;
};

export default Logo;

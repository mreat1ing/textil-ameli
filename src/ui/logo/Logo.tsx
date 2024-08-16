import { FC } from 'react';

import { ReactComponent as LogoImg } from 'src/assets/img/logo.svg';

import './Logo.scss';

interface ILogo {
  width?: string;
  height?: string;
  fill?: 'white' | 'primary' | 'black';
}

const Logo: FC<ILogo> = ({ width, height, fill = 'primary' }) => {
  return <LogoImg className={`logo ${fill}`} width={width} height={height} />;
};

export default Logo;

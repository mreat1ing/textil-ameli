import { FC } from 'react';

import { LogoIcon } from 'src/common/icons';

import './Logo.scss';

interface ILogo {
  width?: string;
  height?: string;
  fill?: 'white' | 'primary' | 'black';
}

const Logo: FC<ILogo> = ({ width, height, fill = 'primary' }) => {
  return <LogoIcon className={`logo ${fill}`} width={width} height={height} />;
};

export default Logo;

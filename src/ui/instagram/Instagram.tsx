import { FC } from 'react';

import { ReactComponent as Insta } from 'src/assets/icons/instagram-icon.svg';

import './Instagram.scss';

interface IInsta {
  width?: string;
  height?: string;
}

const Instagram: FC<IInsta> = ({ width, height }) => {
  const iconW = width || '52px';
  const iconH = height || '52px';

  return (
    <div className="instagram-icon">
      <Insta width={iconW} height={iconH} />
    </div>
  );
};

export default Instagram;

import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Insta } from 'src/assets/icons/instagram-icon.svg';

import './Instagram.scss';

interface IInsta {
  width?: string;
  height?: string;
  description?: string;
}

const Instagram: FC<IInsta> = ({ width, height, description }) => {
  const iconW = width || '52px';
  const iconH = height || '52px';

  const addedClass = description ? ' w-description' : '';

  return (
    <div className={`instagram-icon${addedClass}`}>
      <Link className="instagram-icon__link" to={'#'}>
        <Insta width={iconW} height={iconH} />
        {description && (
          <p className="instagram-icon__description">{description}</p>
        )}
      </Link>
    </div>
  );
};

export default Instagram;

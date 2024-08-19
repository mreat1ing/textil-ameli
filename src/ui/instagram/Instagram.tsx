import { FC } from 'react';

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
      <a
        className="instagram-icon__link"
        href="https://www.instagram.com/amelie_studio_sevastopol/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Insta width={iconW} height={iconH} />
        {description && (
          <p className="instagram-icon__description">{description}</p>
        )}
      </a>
    </div>
  );
};

export default Instagram;

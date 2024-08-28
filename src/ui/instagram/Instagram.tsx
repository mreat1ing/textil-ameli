import { FC } from 'react';

import { InstagramIcon } from 'src/common/icons';

import './Instagram.scss';

interface IInsta {
  width?: string;
  height?: string;
  description?: string;
  className?: string;
}

const Instagram: FC<IInsta> = ({ width, height, description, className }) => {
  const iconW = width || '52px';
  const iconH = height || '52px';

  const addedClass = description ? ' w-description' : '';

  return (
    <div
      className={`instagram-icon${addedClass}${className ? ' ' + className : ''}`}
    >
      <a
        className="instagram-icon__link"
        href="https://www.instagram.com/amelie_studio_sevastopol/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <InstagramIcon width={iconW} height={iconH} />
        {description && (
          <p className="instagram-icon__description">{description}</p>
        )}
      </a>
    </div>
  );
};

export default Instagram;

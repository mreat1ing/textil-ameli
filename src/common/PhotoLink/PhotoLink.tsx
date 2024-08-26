import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import placeholder from 'src/assets/img/assortment/placeholder.jpg';

import './PhotoLink.scss';

interface IPhotoLink {
  image?: string;
  name: string;
  folder?: string;
}

const PhotoLink: FC<IPhotoLink> = ({ name, folder, image }) => {
  return (
    <div className="photo-link">
      <div className="photo-link__overlay" />
      <NavLink to="/" className="photo-link__link" />
      <div className="photo-link__image">
        <img src={image || placeholder} alt={name} />
      </div>
      <div className="photo-link__caption">
        <h3 className="photo-link__title">{name}</h3>
        <p className="photo-link__img-count">0 фотографий</p>
      </div>
    </div>
  );
};

export default PhotoLink;

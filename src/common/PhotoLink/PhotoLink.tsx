import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import placeholder from 'src/assets/img/assortment/placeholder.jpg';
import { names } from 'src/constants/imageReduxNames';
import { IImagesStore } from 'src/store';
import { pluralizePhotos } from 'src/utils/pluralizePhotos.utils';

import './PhotoLink.scss';

interface IPhotoLink {
  image?: string;
  name: string;
  folder?: string;
}

const PhotoLink: FC<IPhotoLink> = ({ name, image }) => {
  const imageStoreName = names[name];
  const imagesCount =
    useSelector((state: IImagesStore) => state[names[name]]?.images?.length) ||
    0;
  const pluralizedPhotoName = pluralizePhotos(imagesCount);

  return (
    <div className="photo-link">
      <div className="photo-link__overlay" />
      <NavLink to={imageStoreName} className="photo-link__link" />
      <div className="photo-link__image">
        <img src={image || placeholder} alt={name} />
      </div>
      <div className="photo-link__caption">
        <h3 className="photo-link__title">{name}</h3>
        <p className="photo-link__img-count">
          {imagesCount} {pluralizedPhotoName}
        </p>
      </div>
    </div>
  );
};

export default PhotoLink;

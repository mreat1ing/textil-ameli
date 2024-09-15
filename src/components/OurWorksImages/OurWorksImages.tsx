import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ErrorPage from 'src/pages/error';
import PhotoGallery from 'src/common/PhotoGallery';
import { names } from 'src/constants/imageReduxNames';
import { IImagesStore } from 'src/store';

import './OurWorksImages.scss';

const OurWorksImages: FC = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const images = useSelector((state: IImagesStore) => id && state[id]?.images);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    for (const key in names) {
      if (names[key] === id) {
        document.title = key;
        setTitle(key);
        break;
      }
    }
  }, [id]);

  if (!id || !images) return <ErrorPage />;

  const normalizedImages = images.map((media) => {
    return <img key={media} src={media} alt="" />;
  });

  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="services-cards__title animated from-left">{title}</h1>
        <PhotoGallery type="gallery" photoHeight={250} inLineCount={4}>
          {normalizedImages}
        </PhotoGallery>
      </div>
    </div>
  );
};

export default OurWorksImages;

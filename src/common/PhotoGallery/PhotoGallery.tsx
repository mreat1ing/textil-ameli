import { FC, useEffect, useState, isValidElement } from 'react';

import './PhotoGallery.scss';
import observer from 'src/utils/observer.utils';

interface IPhotoGallery {
  inLineCount?: number;
  photoHeight?: number | string;
  children?: React.ReactNode[] | React.ReactNode;
}

const PhotoGallery: FC<IPhotoGallery> = ({
  children,
  inLineCount = 3,
  photoHeight = 250,
}) => {
  const [items, setItems] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const componentFirst = document.querySelector('.photo-gallery');
    const observerFirst =
      componentFirst && observer(componentFirst, 'smooth-render');

    componentFirst && observerFirst?.observe(componentFirst);

    return () => {
      observerFirst?.disconnect();
    };
  }, []);

  useEffect(() => {
    setItems((state) => {
      if (!Array.isArray(children)) {
        if (children) return [children];
        else return state;
      }

      return (
        children.map((el) => {
          if (!isValidElement(el)) return;
          const { src } = el.props;

          return (
            <li
              key={String(Math.random())}
              style={{
                width: `calc(100% / ${inLineCount})`,
                height: photoHeight,
              }}
              className="photo-gallery__photo"
            >
              <div style={{ backgroundImage: `url(${src})`, height: '100%' }} />
            </li>
          );
        }) || state
      );
    });
  }, [children, inLineCount, photoHeight]);

  return <ul className="photo-gallery">{items}</ul>;
};

export default PhotoGallery;

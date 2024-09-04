import { FC, useEffect, useState, isValidElement } from 'react';

import './PhotoGallery.scss';

interface IPhotoGallery {
  inLineCount?: number;
  children?: React.ReactNode[] | React.ReactNode;
}

const PhotoGallery: FC<IPhotoGallery> = ({ children, inLineCount = 3 }) => {
  const [items, setItems] = useState<React.ReactNode[]>([]);

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
              style={{ width: `calc(100% / ${inLineCount})` }}
              className="photo-gallery__photo"
            >
              <div style={{ backgroundImage: `url(${src})`, height: '100%' }} />
            </li>
          );
        }) || state
      );
    });
  }, [children, inLineCount]);

  return <ul className="photo-gallery">{items}</ul>;
};

export default PhotoGallery;

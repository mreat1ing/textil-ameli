import { FC, useEffect, useState, isValidElement } from 'react';

import './PhotoGallery.scss';
import observer from 'src/utils/observer.utils';

interface IPhotoGallery {
  inLineCount?: number;
  photoHeight?: number | string;
  photoWidth?: number | string;
  children?: React.ReactNode[] | React.ReactNode;
  type?: 'default' | 'assortment' | 'gallery';
  className?: string;
}

const PhotoGallery: FC<IPhotoGallery> = ({
  children,
  inLineCount,
  photoHeight,
  photoWidth,
  type = 'default',
  className,
}) => {
  const [items, setItems] = useState<React.ReactNode[]>([]);
  const additionalClass =
    type === 'default'
      ? ''
      : type === 'assortment'
        ? ' photo-gallery-assortment'
        : ' photo-gallery-gallery';

  useEffect(() => {
    const componentFirst = document.querySelector('.photo-gallery');
    const observerFirst =
      componentFirst && observer(componentFirst, 'smooth-render');

    componentFirst && observerFirst?.observe(componentFirst);

    return () => {
      observerFirst?.disconnect();
    };
  }, []);

  const normalizeNodes = (nodes: React.ReactNode[]) => {
    return nodes.map((el) => {
      if (!isValidElement(el)) return;
      const { src } = el.props;
      return (
        <li
          key={String(Math.random())}
          style={
            type !== 'assortment'
              ? {
                  width: inLineCount
                    ? `calc(100% / ${inLineCount})`
                    : photoWidth
                      ? photoWidth
                      : undefined,
                  height: photoHeight ? photoHeight : undefined,
                }
              : undefined
          }
          className={`photo-gallery__photo${additionalClass}`}
        >
          <div style={{ backgroundImage: `url(${src})`, height: '100%' }} />
        </li>
      );
    });
  };

  useEffect(() => {
    setItems(() => {
      if (!Array.isArray(children)) {
        return normalizeNodes([children]);
      }
      return normalizeNodes(children);
    });
  }, [additionalClass, children, inLineCount, photoHeight, type]);

  return (
    <ul
      className={`photo-gallery${additionalClass}${className ? ' ' + className : ''}`}
    >
      {items}
    </ul>
  );
};

export default PhotoGallery;

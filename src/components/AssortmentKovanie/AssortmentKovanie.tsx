import { FC, Fragment, useEffect } from 'react';

import './AssortmentKovanie.scss';
import PhotoGallery from 'src/common/PhotoGallery';
import Button from 'src/ui/button';
import { normalizedHeaderImages } from 'src/utils/normalizeHeaderImage.utils';

type descrList = {
  title: string;
  items: string[];
};

interface IAssortmentKovanie {
  description?: string[];
  images?: string[];
  headerImage: string[];
  images2?: string[];
  descriptionText?: string;
  desctriptionList?: descrList[];
  imagesTitle?: string;
  images2Title?: string;
  images3?: string[];
  images3Title?: string;
  multicolor?: boolean;
}

const AssortmentKovanie: FC<IAssortmentKovanie> = ({
  description = [],
  images = [],
  headerImage,
  images2 = [],
  descriptionText = '',
  desctriptionList = [],
  imagesTitle = '',
  images2Title = '',
  images3 = [],
  images3Title = '',
  multicolor = false,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const normalizedDescription = description.map((text) => (
    <li key={text} className="assortment-decription__item">
      {text}
    </li>
  ));

  const normalizedImages = images.map((image) => (
    <img src={image} alt="" key={image} />
  ));

  const normalizedImages2 = images2.map((image) => (
    <img src={image} alt="" key={image} />
  ));

  const normalizedImages3 = images3.map((image) => (
    <img src={image} alt="" key={image} />
  ));

  const normalizedDescriptionList = desctriptionList.map((item) => (
    <Fragment key={item.title}>
      <h4 className="services-h4">{item.title}</h4>
      <ul className="assortment-item-header__list">
        {item.items.map((elem) => (
          <li key={elem} className="assortment-decription__item">
            {elem}
          </li>
        ))}
      </ul>
    </Fragment>
  ));

  return (
    <div className="assortment-rimskie">
      <div className="assortment-item-header">
        {normalizedHeaderImages(headerImage)}
        <div className="assortment-item-header__right-block-wrapper">
          {descriptionText ? (
            <p className="services-p assortment-card-description-p">
              {descriptionText}
            </p>
          ) : null}
          {desctriptionList.length ? (
            normalizedDescriptionList
          ) : (
            <>
              <h4 className="services-h4">{'Характеристики'}</h4>
              <ul className="assortment-item-header__list">
                {normalizedDescription}
              </ul>
            </>
          )}

          <Button className="assortment-item-button">Отправить запрос</Button>
        </div>
      </div>
      {images.length ? (
        <>
          {imagesTitle ? <h2 className="services-h2">{imagesTitle}</h2> : null}
          {multicolor ? (
            <div className="assortment-electro__image">{normalizedImages}</div>
          ) : (
            <PhotoGallery
              type="gallery"
              photoHeight={120}
              inLineCount={4}
              className="assortment-colors"
            >
              {normalizedImages}
            </PhotoGallery>
          )}
        </>
      ) : null}
      {images2.length ? (
        <>
          {images2Title ? (
            <h2 className="services-h2">{images2Title}</h2>
          ) : null}
          <PhotoGallery type="assortment">{normalizedImages2}</PhotoGallery>
        </>
      ) : null}
      {images3.length ? (
        <>
          {images3Title ? (
            <h2 className="services-h2">{images3Title}</h2>
          ) : null}
          <PhotoGallery type="assortment">{normalizedImages3}</PhotoGallery>
        </>
      ) : null}
    </div>
  );
};

export default AssortmentKovanie;

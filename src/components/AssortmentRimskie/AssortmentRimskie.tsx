import { FC } from 'react';

import './AssortmentRimskie.scss';
import PhotoGallery from 'src/common/PhotoGallery';
import Button from 'src/ui/button';
type descrList = {
  title: string;
  items: string[];
};

interface IAssortmentRimskie {
  description?: string[];
  images?: string[];
  headerImage: string;
  isProfiles?: boolean;
  images2?: string[];
  descriptionText?: string;
  desctriptionList?: descrList[];
}

const AssortmentRimskie: FC<IAssortmentRimskie> = ({
  description = [],
  images = [],
  headerImage,
  isProfiles = false,
  images2 = [],
  descriptionText = '',
  desctriptionList = [],
}) => {
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
  const normalizedDescriptionList = desctriptionList.map((item) => (
    <>
      <h4 className="services-h4">{item.title}</h4>
      <ul className="assortment-item-header__list">
        {item.items.map((elem) => (
          <li key={elem} className="assortment-decription__item">
            {elem}
          </li>
        ))}
      </ul>
    </>
  ));

  return (
    <div className="assortment-rimskie">
      <div className="assortment-item-header">
        <PhotoGallery className="assortment-item-header__photo">
          <img src={headerImage} alt="" />
        </PhotoGallery>
        <div className="assortment-item-header__right-block-wrapper">
          {descriptionText ? (
            <p className="assortment-rimskie__description">{descriptionText}</p>
          ) : null}
          {desctriptionList.length ? (
            normalizedDescriptionList
          ) : (
            <>
              <h4 className="services-h4">
                {isProfiles ? 'Характеристики' : 'Характеристики карниза'}
              </h4>
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
          <h2 className="services-h2">Комплектующие и схемы:</h2>
          <PhotoGallery className="animated smooth-render" type="assortment">
            {normalizedImages}
          </PhotoGallery>
        </>
      ) : null}
      {images2.length ? (
        <>
          <h2 className="services-h2">Чертеж и нагрузка:</h2>
          <PhotoGallery type="assortment">{normalizedImages2}</PhotoGallery>
        </>
      ) : null}
      {!isProfiles ? (
        <p className="services-p">
          На всех видах карнизов Компакт возможно исполнение с боковой фиксацией
          (для мансардных окон)
        </p>
      ) : null}
    </div>
  );
};

export default AssortmentRimskie;

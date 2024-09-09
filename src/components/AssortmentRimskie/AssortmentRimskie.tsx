import { FC } from 'react';

import './AssortmentRimskie.scss';
import PhotoGallery from 'src/common/PhotoGallery';
import Button from 'src/ui/button';

interface IAssortmentRimskie {
  description: string[];
  images: string[];
  headerImage: string;
}

const AssortmentRimskie: FC<IAssortmentRimskie> = ({
  description,
  images,
  headerImage,
}) => {
  const normalizedDescription = description.map((text) => (
    <li key={text} className="assortment-decription__item">
      {text}
    </li>
  ));
  const normalizedImages = images.map((image) => (
    <img src={image} alt="" key={image} />
  ));

  return (
    <div className="assortment-rimskie">
      <div className="assortment-item-header">
        <PhotoGallery className="assortment-item-header__photo">
          <img src={headerImage} alt="" />
        </PhotoGallery>
        <div className="assortment-item-header__right-block-wrapper">
          <h4 className="services-h4">Характеристики карниза</h4>
          <ul className="assortment-item-header__list">
            {normalizedDescription}
          </ul>
          <Button className="assortment-item-button">Отправить запрос</Button>
        </div>
      </div>
      <h2 className="services-h2">Комплектующие и схемы:</h2>
      <PhotoGallery type="assortment">{normalizedImages}</PhotoGallery>
      <p className="services-p">
        На всех видах карнизов Компакт возможно исполнение с боковой фиксацией
        (для мансардных окон)
      </p>
    </div>
  );
};

export default AssortmentRimskie;

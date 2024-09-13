import { FC } from 'react';

import './AssortmentElectro.scss';
import PhotoGallery from 'src/common/PhotoGallery';
import Button from 'src/ui/button';
type privod = {
  title: string;
  items: string[];
};
type pluses = {
  title: string;
  text: string;
};

interface IAssortmentElectro {
  description: string[];
  headerImage: string;
  privods: privod[];
  variants?: string[];
  images?: string[];
  variantsText?: string[];
  imagesTitle?: string;
  pluses?: pluses[];
  descriptionText?: string;
  descrTitle?: boolean;
  showPrivodsTitles?: boolean;
  showHarakteristics?: boolean
}

const AssortmentElectro: FC<IAssortmentElectro> = ({
  description,
  headerImage,
  privods,
  variants = [],
  images = [],
  variantsText = [],
  imagesTitle = '',
  pluses = [],
  descriptionText = '',
  descrTitle = false,
  showPrivodsTitles = true,
  showHarakteristics = false,
}) => {
  const normalizedDescription = description.map((text) => (
    <li key={text} className="assortment-decription__item">
      {text}
    </li>
  ));
  const normalizedPrivods = privods.map((item) => (
    <li key={item.title} className="assortment-electro__list-item">
      {item.items.length ? (
        <>
        <h3 className='assortment-electro__item--title'>{item.title}</h3>
        <ul>
          {item.items.map((elem) => (
            <li key={elem} className="assortment-electro__item">
              {elem}
            </li>
          ))}
        </ul>
        </> 
      ) : null}
    </li>
  ));
  const normalizedPrivodTitles = privods.map((text) => (
    <span key={text.title}>{text.title}</span>
  ));
  const normalizedVariants = variants.map((text) => (
    <span key={text}>{text}</span>
  ));
  const normalizedVariantsText = variantsText.map((text) => (
    <li key={text} className="assortment-decription__item">
      {text}
    </li>
  ));
  const normalizedPluses = pluses.map((item) => (
    <p className="assortment-electro__pluses-item" key={item.text}>
      <b>{item.title}</b>
      {item.text}
    </p>
  ));
  const normalizedImages = images.map((image) => (
    <img src={image} alt="" key={image} />
  ));

  return (
    <div className="assortment-electro">
      <div className="assortment-item-header">
        <PhotoGallery className="assortment-item-header__photo">
          <img src={headerImage} alt="" />
        </PhotoGallery>
        <div className="assortment-item-header__right-block-wrapper">
          {descriptionText ? (
            <p className="assortment-electro__description">{descriptionText}</p>
          ) : null}
          {descrTitle ? (
            <h4 className="services-h4">Преимущества</h4>
          ) : (
            <h4 className="services-h4">Максимальные и минимальные размеры</h4>
          )}
          <ul className="assortment-item-header__list">
            {normalizedDescription}
          </ul>
          <Button className="assortment-item-button">Отправить запрос</Button>
        </div>
      </div>
      {showHarakteristics ? <h3 className='assortment-electro__harakteristics'>Характеристики</h3> : null}
      {showPrivodsTitles ? (
        <div className="assortment-electro__privods">
          <div className="assortment-electro__privods__title">
            <h3 className="assortment-electro__privods__title--title">
              Варианты приводов:
            </h3>
            <p className="assortment-electro__privods__title--items">
              {normalizedPrivodTitles}
            </p>
          </div>
          <hr className="assrtment-electro__privods__line" />
        </div>
      ) : null}
      {variants.length ? (
        <div className="assortment-electro__privods">
          <div className="assortment-electro__privods__title">
            <h3 className="assortment-electro__privods__title--title">
              {showPrivodsTitles ? 'Варианты управления:' : 'Варианты приводов:'}
            </h3>
            <p className="assortment-electro__privods__title--items">
              {normalizedVariants}
            </p>
          </div>
          <hr className="assrtment-electro__privods__line" />
        </div>
      ) : null}
      {variants.length ? (
        <ul className="assortment-electro__variants__list">
          {normalizedVariantsText}
        </ul>
      ) : null}
      {privods.length ? (
        <ul className="assortment-electro__privods__list">
          {normalizedPrivods}
        </ul>
      ) : null}
      {pluses.length ? (
        <ul className="assortment-electro__pluses">{normalizedPluses}</ul>
      ) : null}
      {imagesTitle ? (
        <h2 className="assortment-electro__images-title">{imagesTitle}</h2>
      ) : null}
      {images.length ? (
        <div className='assortment-electro__images'>{normalizedImages}</div>
      ) : null}
    </div>
  );
};

export default AssortmentElectro;

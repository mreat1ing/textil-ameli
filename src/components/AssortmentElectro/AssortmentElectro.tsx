import { FC, useEffect, useState } from 'react';

import './AssortmentElectro.scss';
import Button from 'src/ui/button';
import { normalizedHeaderImages } from 'src/utils/normalizeHeaderImage.utils';
import { toggleModalOrder } from 'src/utils/modalOrderToggle.utils';
import OrderModal from 'src/modals/order';
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
  headerImage: string[];
  privods: privod[];
  variants?: string[];
  images?: string[];
  variantsText?: string[];
  imagesTitle?: string;
  pluses?: pluses[];
  descriptionText?: string;
  descrTitle?: boolean;
  showPrivodsTitles?: boolean;
  showHarakteristics?: boolean;
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
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const normalizedDescription = description.map((text) => (
    <li key={text} className="assortment-decription__item">
      {text}
    </li>
  ));

  const normalizedPrivods = privods[0].items.length
    ? privods.map((item) => {
        if (!item.items.length) return null;
        return (
          <li
            key={item.title}
            className="assortment-electro__list-item no-style"
          >
            <h3 className="assortment-electro__item--title">{item.title}</h3>
            <ul style={{ marginBottom: '16px' }}>
              {item.items.map((elem) => (
                <li key={elem} className="assortment-electro__item">
                  {elem}
                </li>
              ))}
            </ul>
          </li>
        );
      })
    : [];

  const normalizedPrivodTitles = privods.map((text, index) => {
    const isComma = privods[index + 1];
    return (
      <li key={text.title}>
        {text.title}
        {isComma ? ', ' : ''}
      </li>
    );
  });

  const normalizedVariants = variants.map((text, index) => {
    const isComma = variants[index + 1];
    return (
      <li key={text}>
        {text}
        {isComma ? ', ' : ''}
      </li>
    );
  });

  const normalizedVariantsText = variantsText.map((text) => (
    <li key={text}>{text}</li>
  ));

  const normalizedPluses = pluses.map((item) => (
    <li className="assortment-electro__pluses-item no-style" key={item.text}>
      <b style={{ paddingRight: '8px' }}>{item.title}</b>
      {item.text}
    </li>
  ));

  const normalizedImages = images.map((image) => (
    <img src={image} alt="" key={image} />
  ));
  return (
    <div className="assortment-electro">
      {isModalOpen && (
        <OrderModal
          type="request"
          onClose={() => toggleModalOrder(true, () => setModalOpen(false))}
        />
      )}
      <div className="assortment-item-header justify-start">
        {normalizedHeaderImages(headerImage)}
        <div className="assortment-item-header__right-block-wrapper">
          {descriptionText ? (
            <p className="services-p assortment-card-description-p">
              {descriptionText}
            </p>
          ) : null}
          {descrTitle ? (
            <h4 className="services-h4">Преимущества</h4>
          ) : (
            <h4 className="services-h4">Максимальные и минимальные размеры</h4>
          )}
          <ul className="assortment-item-header__list">
            {normalizedDescription}
          </ul>
          <Button
            className="assortment-item-button center"
            onClick={() => toggleModalOrder(false, () => setModalOpen(true))}
          >
            Отправить запрос
          </Button>
        </div>
      </div>
      {showHarakteristics ? (
        <h3 className="assortment-electro__harakteristics services-h3">
          Характеристики
        </h3>
      ) : null}
      {showPrivodsTitles ? (
        <div className="assortment-electro__privods">
          <div className="assortment-electro__list">
            <b className="assortment-b">Варианты приводов:</b>
            <ul className="assortment-inline-list">{normalizedPrivodTitles}</ul>
          </div>
          <hr className="assortment-electro__line" />
        </div>
      ) : null}
      {variants.length ? (
        <div className="assortment-electro__privods">
          <div className="assortment-electro__list">
            <b className="assortment-b">
              {showPrivodsTitles
                ? 'Варианты управления:'
                : 'Варианты приводов:'}
            </b>
            <ul className="assortment-inline-list">{normalizedVariants}</ul>
          </div>
          <hr className="assortment-electro__line" />
        </div>
      ) : null}
      {normalizedVariantsText.length ? (
        <ul className="assortment-item-header__list">
          {normalizedVariantsText}
        </ul>
      ) : null}
      {normalizedPrivods.length ? (
        <ul className="assortment-item-header__list">{normalizedPrivods}</ul>
      ) : null}
      {pluses.length ? (
        <ul className="assortment-item-header__list">{normalizedPluses}</ul>
      ) : null}
      {imagesTitle ? (
        <h3 className="services-h3" style={{ textAlign: 'start' }}>
          {imagesTitle}
        </h3>
      ) : null}
      {images.length ? (
        <div className="assortment-electro__image">{normalizedImages}</div>
      ) : null}
    </div>
  );
};

export default AssortmentElectro;

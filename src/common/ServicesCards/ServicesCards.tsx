import { FC } from 'react';

import Button from 'src/ui/button';
import design from 'src/assets/img/serviceCards/nashi-raboti-1.jpg';
import zhaluzi from 'src/assets/img/serviceCards/zhalyuzi-img.jpg';
import window from 'src/assets/img/serviceCards/nashi-raboti-10.jpg';
import karniz from 'src/assets/img/serviceCards/karniz-img.jpg';
import pled from 'src/assets/img/serviceCards/pled-img.jpg';

import './ServicesCards.scss';

const ServicesCards: FC = () => {
  return (
    <div className="services-cards">
      <div className="services-cards__wrapper">
        <h1 className="services-cards__title">Услуги студии</h1>
        <div className="services-cards__cards">
          <div className="services-cards__item">
            <div className="services-cards__image">
              <div
                style={{
                  backgroundImage: `url(${design})`,
                  backgroundSize: 'inherit',
                }}
              />
            </div>
            <h2 className="services-cards__name">Дизайн и пошив</h2>
            <Button className="services-cards__button">подробнее</Button>
          </div>
          <div className="services-cards__item">
            <div className="services-cards__image">
              <div
                style={{
                  backgroundImage: `url(${zhaluzi})`,
                  backgroundSize: 'inherit',
                }}
              />
            </div>
            <h2 className="services-cards__name">Сервисное обслуживание</h2>
            <Button className="services-cards__button">подробнее</Button>
          </div>
          <div className="services-cards__item">
            <div className="services-cards__image">
              <div
                style={{
                  backgroundImage: `url(${window})`,
                  backgroundSize: 'inherit',
                }}
              />
            </div>
            <h2 className="services-cards__name">Солнцезащита</h2>
            <Button className="services-cards__button">подробнее</Button>
          </div>
          <div className="services-cards__item">
            <div className="services-cards__image">
              <div
                style={{
                  backgroundImage: `url(${karniz})`,
                  backgroundSize: 'inherit',
                }}
              />
            </div>
            <h2 className="services-cards__name">Карнизы</h2>
            <Button className="services-cards__button">подробнее</Button>
          </div>
          <div className="services-cards__item">
            <div className="services-cards__image">
              <div
                style={{
                  backgroundImage: `url(${pled})`,
                  backgroundSize: 'inherit',
                }}
              />
            </div>
            <h2 className="services-cards__name">Покрывала и скатерти</h2>
            <Button className="services-cards__button">подробнее</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;

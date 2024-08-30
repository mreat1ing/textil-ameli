import { FC, useEffect } from 'react';

import observer from 'src/utils/observer.utils';
import design from 'src/assets/img/serviceCards/nashi-raboti-1.jpg';
import zhaluzi from 'src/assets/img/serviceCards/zhalyuzi-img.jpg';
import window from 'src/assets/img/serviceCards/nashi-raboti-10.jpg';
import karniz from 'src/assets/img/serviceCards/karniz-img.jpg';
import pled from 'src/assets/img/serviceCards/pled-img.jpg';

import './ServicesCards.scss';
import ServicesItem from '../ServicesItem';

const ServicesCards: FC = () => {
  useEffect(() => {
    const component = document.querySelector('.services-cards__title');
    const componentSecond = document.querySelector('.services-cards__cards');
    const observerFirst = component && observer(component, 'from-left');
    const observerSecond =
      componentSecond && observer(componentSecond, 'smooth-render');

    component && observerFirst?.observe(component);
    componentSecond && observerSecond?.observe(componentSecond);

    return () => {
      observerFirst?.disconnect();
      observerSecond?.disconnect();
    };
  }, []);

  return (
    <div className="services-cards">
      <div className="services-cards__wrapper">
        <h1 className="services-cards__title">Услуги студии</h1>
        <div className="services-cards__cards">
          <ServicesItem image={design} name="Дизайн и пошив" />
          <ServicesItem image={zhaluzi} name="Сервисное обслуживание" />
          <ServicesItem image={window} name="Солнцезащита" />
          <ServicesItem image={karniz} name="Карнизы" />
          <ServicesItem image={pled} name="Покрывала и скатерти" />
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;

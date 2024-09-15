import { FC, useEffect } from 'react';

import observer from 'src/utils/observer.utils';
import { hostImages } from 'src/constants/hosting';

import ServicesItem from '../ServicesItem';
import './ServicesCards.scss';

const design = `${hostImages}/serviceCards/nashi-raboti-1.jpg`;
const zhaluzi = `${hostImages}/serviceCards/zhalyuzi-img.jpg`;
const window = `${hostImages}/serviceCards/nashi-raboti-10.jpg`;
const karniz = `${hostImages}/serviceCards/karniz-img.jpg`;
const pled = `${hostImages}/serviceCards/pled-img.jpg`;

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
        <ul className="services-cards__cards">
          <li className="services-cards__item">
            <ServicesItem image={design} name="Дизайн и пошив" src="design" />
          </li>
          <li className="services-cards__item">
            <ServicesItem
              image={zhaluzi}
              name="Сервисное обслуживание"
              src="maintenance"
            />
          </li>
          <li className="services-cards__item">
            <ServicesItem
              image={window}
              name="Солнцезащита"
              src="sun-protection"
            />
          </li>
          <li className="services-cards__item">
            <ServicesItem image={karniz} name="Карнизы" src="cornices" />
          </li>
          <li className="services-cards__item">
            <ServicesItem
              image={pled}
              name="Покрывала и скатерти"
              src="bedspreads"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesCards;

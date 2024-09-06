import { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './ServicesPageLinks.scss';

import design from 'src/assets/img/serviceCards/nashi-raboti-1.jpg';
import maintenance from 'src/assets/img/serviceCards/zhalyuzi-img.jpg';
import sunProtection from 'src/assets/img/serviceCards/nashi-raboti-10.jpg';
import cornices from 'src/assets/img/serviceCards/karniz-img.jpg';
import bedspreads from 'src/assets/img/serviceCards/pled-img.jpg';

type components =
  | 'design'
  | 'maintenance'
  | 'sun-protection'
  | 'cornices'
  | 'bedspreads';

const components = {
  design: {
    component: <h1>Design</h1>,
    image: design,
    title: 'Дизайн и пошив',
  },
  maintenance: {
    component: <h1>Maintenance</h1>,
    image: maintenance,
    title: 'Сервисное обслуживание',
  },
  'sun-protection': {
    component: <h1>Sun protection</h1>,
    image: sunProtection,
    title: 'Солнцезащита',
  },
  cornices: { component: <h1>Cornices</h1>, image: cornices, title: 'Карнизы' },
  bedspreads: {
    component: <h1>Bedspreads</h1>,
    image: bedspreads,
    title: 'Покрывала и скатерти',
  },
};

interface IServicesPageLinks {
  current: components;
}

const ServicesPageLinks: FC<IServicesPageLinks> = ({ current }) => {
  const [items, setItems] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const allItems = [];
    const keys = Object.keys(components) as components[];
    for (const i of keys) {
      if (i !== current) {
        const { image, title } = components[i];
        allItems.push(
          <li key={i}>
            <NavLink to={`/services/${i}`}>
              <div className="services-page-item-link">
                <div className="services-page-item-link__image-wrapper">
                  <div
                    className="services-page-item-link__image"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                </div>
                <h3 className="services-page-item-link__title">{title}</h3>
              </div>
            </NavLink>
          </li>
        );
      }

      setItems(allItems);
    }
  }, [current]);

  return (
    <div className="services-page-links">
      <h4 className="services-page-link-title">Другие услуги</h4>
      <ul className="services-page-link-items">{items}</ul>
    </div>
  );
};

export default ServicesPageLinks;

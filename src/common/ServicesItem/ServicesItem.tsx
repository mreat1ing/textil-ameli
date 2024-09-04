import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './ServicesItem.scss';
import Button from 'src/ui/button';

interface IServicesItem {
  image: string;
  name: string;
  src: string;
}

const ServicesItem: FC<IServicesItem> = ({ image, name, src }) => {
  return (
    <div className="services-item">
      <div className="services-item__image">
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'inherit',
          }}
        />
      </div>
      <NavLink to={`/services/${src}`}>
        <h2 className="services-item__name">{name}</h2>
      </NavLink>
      <NavLink to={`/services/${src}`}>
        <Button className="services-item__button">подробнее</Button>
      </NavLink>
    </div>
  );
};

export default ServicesItem;

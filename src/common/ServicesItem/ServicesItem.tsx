import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './ServicesItem.scss';
import Button from 'src/ui/button';

interface IServicesItem {
  image: string;
  name: string;
  src: string;
}

const ServicesItem: FC<IServicesItem> = ({ image, name, src }) => {
  const { pathname } = useLocation();

  return (
    <div className="services-item">
      <div className="services-item__image">
        <NavLink to={pathname + '/' + src}>
          <div
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'inherit',
            }}
          />
        </NavLink>
      </div>
      <NavLink to={pathname + '/' + src}>
        <h2 className="services-item__name">{name}</h2>
      </NavLink>
      <NavLink to={pathname + '/' + src}>
        <Button className="services-item__button">подробнее</Button>
      </NavLink>
    </div>
  );
};

export default ServicesItem;

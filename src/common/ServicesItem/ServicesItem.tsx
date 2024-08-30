import { FC } from 'react';

import './ServicesItem.scss';
import Button from 'src/ui/button';

interface IServicesItem {
  image: string;
  name: string;
}

const ServicesItem: FC<IServicesItem> = ({ image, name }) => {
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
      <h2 className="services-item__name">{name}</h2>
      <Button className="services-item__button">подробнее</Button>
    </div>
  );
};

export default ServicesItem;

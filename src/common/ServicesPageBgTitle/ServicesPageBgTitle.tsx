import { FC } from 'react';

import './ServicesPageBgTitle.scss';

interface IServicesPageBgTitle {
  image: string;
  title: string;
}

const ServicesPageBgTitle: FC<IServicesPageBgTitle> = ({ image, title }) => {
  return (
    <div className="services-page-top-block">
      <div
        className="services-page-top-block__image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <h1 className="services-page-top-block__title">{title}</h1>
    </div>
  );
};

export default ServicesPageBgTitle;

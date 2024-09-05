import { FC, useEffect } from 'react';

import './ServicesBedspreads.scss';

const ServicesBedspreads: FC = () => {
  useEffect(() => {
    document.title = 'Покрывала и скатерти';
  }, []);

  return (
    <div className="services-bedspreads">
      <p className="services-p">
        Студия текстильного дизайна &quot;Амели&quot; (г. Севастополь)
        осуществляет <b>пошив любого домашнего текстиля:</b>
      </p>
    </div>
  );
};

export default ServicesBedspreads;

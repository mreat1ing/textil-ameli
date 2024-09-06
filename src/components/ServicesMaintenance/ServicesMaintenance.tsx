import { FC, useEffect } from 'react';

import './ServicesMaintenance.scss';

const ServicesMaintenance: FC = () => {
  useEffect(() => {
    document.title = 'Сервисное обслуживание';
  }, []);

  return (
    <div className="services-maintenance">
      <ul className="services-maintenance__list">
        <li className="services-maintenance__list-item">
          <span>выезд на бесплатный замер</span>
        </li>
        <li className="services-maintenance__list-item">
          <span>создание масштабированного эскиза в акварели</span>
        </li>
        <li className="services-maintenance__list-item">
          <span>просчёт</span>
        </li>
        <li className="services-maintenance__list-item">
          <span>индивидуальный пошив текстильных изделий</span>
        </li>
        <li className="services-maintenance__list-item">
          <span>навешивание текстильных изделий</span>
        </li>
        <li className="services-maintenance__list-item">
          <span>снятие текстильных изделий</span>
        </li>
        <li className="services-maintenance__list-item">
          <span>чистка и сухая хим.чистка текстильных изделий</span>
        </li>
      </ul>

      <h3 className="services-h3">Добавьте уюта в ваш дом с «Амели»!</h3>
    </div>
  );
};

export default ServicesMaintenance;

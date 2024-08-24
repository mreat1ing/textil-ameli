import { FC } from 'react';

import './AboutUsServices.scss';

const AboutUsServices: FC = () => {
  return (
    <div className="services">
      <div className="services__wrapper">
        <h2 className="services__title">Также среди наших услуг</h2>
        <div className="services__cards">
          <div className="services__card">
            <p className="card__title">
              Изготовление постельного белья и покрывал на заказ из материалов
              мировых брендов
            </p>
          </div>
          <div className="services__card">
            <p className="card__title">Произведение замеров</p>
          </div>
          <div className="services__card">
            <p className="card__title">
              Визуализация заказа с помощью эскизов, а также 3-D моделирования
            </p>
          </div>
          <div className="services__card">
            <p className="card__title">Монтаж и демонтаж изделий</p>
          </div>
          <div className="services__card">
            <p className="card__title">Навешивание текстильных изделий</p>
          </div>
          <div className="services__card">
            <p className="card__title">Снятие и стирка</p>
          </div>
          <div className="services__card">
            <p className="card__title">Полное сопровождение заказа</p>
          </div>
          <div className="services__card">
            <p className="card__title">Пошив</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsServices;

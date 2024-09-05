import { FC, useEffect } from 'react';

import './ServicesBedspreads.scss';
import TitleCard from 'src/common/TitleCard';
import sofa from 'src/assets/img/bg-service-sofa.jpg';
import { Calculator, Clock, Delivery, Pencil } from 'src/common/icons';

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
      <div className="services-bedspread__flex-box">
        <ul className="services-bedspread__list">
          <li className="services-bedspread__list-item">
            покрывала для кровати
          </li>
          <li className="services-bedspread__list-item">покрывала на диван</li>
          <li className="services-bedspread__list-item">
            декоративные подушки
          </li>
          <li className="services-bedspread__list-item">скатерти и др</li>
        </ul>
        <div
          className="services-bedspread__bg-image"
          style={{ backgroundImage: `url(${sofa})` }}
        />
      </div>
      <p className="services-p">
        Если вы ищете, где заказать комплектацию вашего интерьера текстилем
        &quot;под ключ&quot;, вы на верном пути. Студия &quot;Амели&quot;
        гарантирует вам качество материалов, соблюдение сроков пошива и учёт
        всех ваших пожеланий.
      </p>
      <div className="services-design__cards">
        <TitleCard
          image={<Calculator width={60} height={60} />}
          text="Оптовые цены на ткани"
          className="services-design__item"
        />
        <TitleCard
          image={<Clock width={60} height={60} />}
          text="Время пошива до 4 недель"
          className="services-design__item"
        />
        <TitleCard
          image={<Pencil width={60} height={60} />}
          text="Бесплатный замер"
          className="services-design__item"
        />
        <TitleCard
          image={<Delivery width={60} height={60} />}
          text="Доставим и оформим"
          className="services-design__item"
        />
      </div>
      <p className="services-p">
        У нас всегда в наличии более 500 видов ткани. Ознакомиться с образцами
        вы можете в нашей студии в МЦ &quot;Domino&quot; на 1 этаже или вызвать
        дизайнера на дом.
      </p>
    </div>
  );
};

export default ServicesBedspreads;

import { FC, useEffect } from 'react';

import './ServicesDesign.scss';
import TitleCard from 'src/common/TitleCard';
import Order from 'src/components/Order';
import { Calculator, Clock, Pencil, Delivery } from 'src/common/icons';
import { hostImages } from 'src/constants/hosting';
import PhotoGallery from 'src/common/PhotoGallery';
const photo1 = `${hostImages}/ourWorks/1.jpg`;
const photo2 = `${hostImages}/ourWorks/2.jpg`;
const photo3 = `${hostImages}/ourWorks/3.jpg`;
const photo4 = `${hostImages}/ourWorks/4.jpg`;
const photo5 = `${hostImages}/ourWorks/5.jpg`;
const photo6 = `${hostImages}/ourWorks/6.jpg`;

const ServicesDesign: FC = () => {
  useEffect(() => {
    document.title = 'Дизайн и пошив';
  }, []);

  return (
    <div className="services-design">
      <p className="services-p">
        Семейная студия текстильного дизайна «Амели» уже много лет предлагает
        севастопольцам шторы с индивидуальным дизайном. За это время нами пошиты
        километры комплектов штор и покрывал. Мы работаем как с частными
        заказчиками, так и с юридическими лицами.
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
        У нас всегда в наличии более <b>7000 вариантов ткани</b> под любую
        задачу — от небольшой шторы для ванной комнаты до оснащения текстилем
        отеля. Мы работаем только с проверенными поставщиками ткани
        премиум-класса. Как результат, наши изделия служат долгие годы и
        выдерживают множество стирок.
      </p>
      <p className="services-p">
        Портьеры, шторы с ламбрекенами, кисея, французские и японские шторы —
        разрабатываем любой дизайн, подходящий под ваш интерьер.
      </p>
      <PhotoGallery inLineCount={3} photoHeight={250}>
        <img src={photo1} alt="photo1" />
        <img src={photo2} alt="photo2" />
        <img src={photo3} alt="photo3" />
        <img src={photo4} alt="photo4" />
        <img src={photo5} alt="photo5" />
        <img src={photo6} alt="photo6" />
      </PhotoGallery>
      <p className="services-p">
        Заходите в нашу студию в Севастополе или пригласите мастера для замера в
        вашу квартиру или дом. Вы ознакомитесь с образцами тканей и получите
        консультацию дизайнера текстиля.
      </p>
      <Order className="services__form" textarea categories />
      <p className="services-p">
        Мы знаем всё о шторах, о том, как ведёт себя та или иная ткань. В нашей
        студии вы можете не только заказать индивидуальный пошив, но и выбрать
        из готовых вариантов. Каждый день мы готовы предложить более 50 готовых
        изделий отличного качества.
      </p>
    </div>
  );
};

export default ServicesDesign;

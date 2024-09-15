import { FC, useEffect } from 'react';

import './ServicesSunProtection.scss';
import TitleCard from 'src/common/TitleCard';
import PhotoGallery from 'src/common/PhotoGallery';
import {
  Calculator,
  Clock,
  Consultation,
  Delivery,
  Guarantee,
  Pencil,
} from 'src/common/icons';
import { hostImages } from 'src/constants/hosting';

const photo1 = `${hostImages}/ourWorks/6.jpg`;
const photo2 = `${hostImages}/ourWorks/7.jpg`;
const photo3 = `${hostImages}/ourWorks/8.jpg`;
const photo4 = `${hostImages}/serviceCards/nashi-raboti-10.jpg`;

const ServicesSunProtection: FC = () => {
  useEffect(() => {
    document.title = 'Солнцезащита';
  }, []);

  return (
    <div className="services-sun-protection">
      <p className="services-p">
        Рулонные шторы и шторы-плиссе одновременно сочетают в себе удобство
        жалюзи и мягкость текстиля. Рынок предлагает огромное количество готовых
        изделий разных тканей, расцветок и качества.
      </p>
      <p className="services-p">
        Для тех, кто хочет идеального сочетания материалов в своём интерьере,
        семейная студия текстильного дизайна &quot;Амели&quot; предлагает
        <b> изготовление жалюзи, рулонных штор и штор плиссе на заказ.</b>
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
        Мы воплотим в жизнь самую смелую идею на высшем уровне. Всегда в нашей
        студии в Севастополе есть в наличии огромное количество вариантов ткани,
        подходящей именно для штор-плиссе или для рулонных штор.
      </p>
      <PhotoGallery inLineCount={2} photoHeight={350}>
        <img src={photo1} alt="" />
        <img src={photo2} alt="" />
        <img src={photo3} alt="" />
        <img src={photo4} alt="" />
      </PhotoGallery>
      <h2 className="services-h2">Жалюзи</h2>
      <p className="services-p">
        Студия &quot;Амели&quot; занимается производством и установкой жалюзи в
        Севастополе. У нас вы можете заказать горизонтальные, вертикальные
        жалюзи, рулонные шторы и роллеты.
      </p>
      <h3 className="services-h3">Почему сотни клиентов обращаются к нам?</h3>
      <div className="services-design__cards services-design__cards--row-two">
        <TitleCard
          image={<Clock width={60} height={60} />}
          text="Изготовление за 1 сутки"
          description="Замер в день заказа, изготовление в течение 1 суток, установка за час"
          className="services-design__item"
        />
        <TitleCard
          image={<Calculator width={60} height={60} />}
          text="Без предоплаты"
          description="Оплата по факту установки, 0% предоплаты"
          className="services-design__item"
        />
        <TitleCard
          image={<Consultation width={60} height={60} />}
          text="Консультация дизайнера"
          description="Подберём лучший вариант для вашего помещения"
          className="services-design__item"
        />
        <TitleCard
          image={<Guarantee width={60} height={60} />}
          text="Гарантия"
          description="На каждое изделие даём гарантию 12 месяцев"
          className="services-design__item"
        />
      </div>
      <p className="services-p">
        Мы предлагаем более 500 расцветок жалюзи и только надёжные
        комплектующие. При необходимости обеспечим ваши жалюзи удобным
        электрическим приводом с дистанционным управлением.
      </p>
      <h4 className="services-h4">Добавьте уюта в ваш дом с «Амели»!</h4>
      <p className="services-p">
        Заходите к нам в гости в МЦ «Domino» на 2 этаж или пригласите к себе
        мастера для замера. Вы ознакомитесь с образцами тканей и получите
        консультацию дизайнера текстиля.
      </p>
    </div>
  );
};

export default ServicesSunProtection;

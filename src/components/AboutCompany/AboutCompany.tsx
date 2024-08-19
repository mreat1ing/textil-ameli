import { FC } from 'react';

import { ReactComponent as Curtain } from 'src/assets/icons/curtain.svg';
import { ReactComponent as Photos } from 'src/assets/icons/photos.svg';
import { ReactComponent as Calculator } from 'src/assets/icons/calculator.svg';
import { ReactComponent as Delivery } from 'src/assets/icons/delivery.svg';
import { ReactComponent as Pencil } from 'src/assets/icons/pencil.svg';
import { ReactComponent as Clock } from 'src/assets/icons/clock.svg';

import './AboutCompany.scss';

const AboutCompany: FC = () => {
  return (
    <div className="about-company">
      <div className="about-company__wrapper">
        <div className="about-company__top-block">
          <div className="about-company__description">
            <h2 className="about-company__title">
              Студия текстильного дизайна в Севастополе «Амели»
            </h2>
            <p className="about-company__about">
              Шторы &quot;под ключ&quot;- ЭТО К НАМ! Опытные дизайнеры с
              нежностью и скурпулезностью подойдут к любому вашему текстильному
              вопросу. Более 7000 образцов интерьерных тканей, уж точно не
              оставят вас равнодушными! Обещаем, вы обязательно найдете у нас
              воплощение своих текстильных фантазий.
              <br /> P. S. Все изделия являются гарантийными!
            </p>
          </div>
          <div className="about-company__expanded-block">
            <div className="about-company__card">
              <div className="about-company__card-image">
                <Curtain width={48} height={48} />
              </div>

              <h3 className="about-company__card-title">
                Для дома под любые задачи
              </h3>
              <p className="about-company__card-description">
                Индивидуальное изготовление штор любой сложности
              </p>
            </div>
            <div className="about-company__card">
              <div className="about-company__card-image">
                <Photos width={48} height={48} />
              </div>
              <h3 className="about-company__card-title">
                В коммерческое помещение
              </h3>
              <p className="about-company__card-description">
                Шторы, жалюзи в офис, конференц-зал, ресторан и др.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-company__bottom-block">
        <div className="about-company__bottom-block-image"></div>
        <div className="about-company__bottom-block-cards">
          <div className="about-company__bottom-block-card">
            <Calculator width={60} height={60} />
            <h4 className="about-company__bottom-block-title">
              Оптовые цены на ткани
            </h4>
          </div>
          <div className="about-company__bottom-block-card">
            <Clock width={60} height={60} />
            <h4 className="about-company__bottom-block-title">
              Время пошива до 4 недель
            </h4>
          </div>
          <div className="about-company__bottom-block-card">
            <Pencil width={60} height={60} />
            <h4 className="about-company__bottom-block-title">
              Бесплатный замер
            </h4>
          </div>
          <div className="about-company__bottom-block-card">
            <Delivery width={60} height={60} />
            <h4 className="about-company__bottom-block-title">
              Доставим и оформим
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;

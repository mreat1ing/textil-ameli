import { FC } from 'react';

import { Calculator, Delivery, Pencil, Clock } from 'src/common/icons';
import TitleCard from 'src/common/TitleCard';
import ParallaxBgImage from 'src/common/ParallaxBgImage';
import './AboutCompanyBottom.scss';

const AboutCompanyBottom: FC = () => {
  return (
    <ParallaxBgImage
      image="https://cd11149.tw1.ru/assets/images/bg-curtains.jpg"
      padding={150}
    >
      <div className="about-company__bottom-block-cards">
        <TitleCard
          className="about-company__bottom-block-card"
          image={<Calculator width={60} height={60} />}
          text="Оптовые цены на ткани"
        />
        <TitleCard
          className="about-company__bottom-block-card"
          image={<Clock width={60} height={60} />}
          text="Время пошива до 4 недель"
        />
        <TitleCard
          className="about-company__bottom-block-card"
          image={<Pencil width={60} height={60} />}
          text="Бесплатный замер"
        />
        <TitleCard
          className="about-company__bottom-block-card"
          image={<Delivery width={60} height={60} />}
          text="Доставим и оформим"
        />
      </div>
    </ParallaxBgImage>
  );
};

export default AboutCompanyBottom;

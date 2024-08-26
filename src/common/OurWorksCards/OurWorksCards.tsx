import { FC } from 'react';

import PhotoLink from 'src/common/PhotoLink';
import balcony from 'src/assets/img/assortmentCards/balcony.jpg';
import bathroom from 'src/assets/img/assortmentCards/bathroom.jpg';
import accessories from 'src/assets/img/assortmentCards/accessories.jpg';
import arcWindow from 'src/assets/img/assortmentCards/arcWindow.jpg';
import alcove from 'src/assets/img/assortmentCards/alcove.jpg';
import childrenRoom from 'src/assets/img/assortmentCards/childrenRoom.jpg';
import bedCurtain from 'src/assets/img/assortmentCards/bedCurtain.jpg';
import cover from 'src/assets/img/assortmentCards/cover.png';
import bedCover from 'src/assets/img/assortmentCards/bedCover.jpg';

import './OurWorksCards.scss';

const OurWorksCards: FC = () => {
  return (
    <div className="assortment-cards">
      <div className="assortment-cards__wrapper">
        <div className="assortment-cards__items">
          <PhotoLink name="Балкон" image={balcony} />
          <PhotoLink name="Ванная" image={bathroom} />
          <PhotoLink name="Аксессуары" image={accessories} />
          <PhotoLink name="Арочные окна" image={arcWindow} />
          <PhotoLink name="Беседки" image={alcove} />
          <PhotoLink name="Детская" image={childrenRoom} />
          <PhotoLink name="Зонирование" image={bedCurtain} />
          <PhotoLink name="Чехлы" image={cover} />
          <PhotoLink name="Покрывала" image={bedCover} />
        </div>
      </div>
    </div>
  );
};

export default OurWorksCards;

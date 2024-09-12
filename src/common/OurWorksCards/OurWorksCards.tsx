import { FC, useEffect } from 'react';

import PhotoLink from 'src/common/PhotoLink';
import balcony from 'src/assets/img/ourWorksCards/balcony.jpg';
import bathroom from 'src/assets/img/ourWorksCards/bathroom.jpg';
import accessories from 'src/assets/img/ourWorksCards/accessories.jpg';
import arcWindow from 'src/assets/img/ourWorksCards/arcWindow.png';
import alcove from 'src/assets/img/ourWorksCards/alcove.jpg';
import childrenRoom from 'src/assets/img/ourWorksCards/childrenRoom.jpg';
import bedCurtain from 'src/assets/img/ourWorksCards/bedCurtain.jpg';
import cover from 'src/assets/img/ourWorksCards/cover.png';
import bedCover from 'src/assets/img/ourWorksCards/bedCover.jpg';
import rimskie from 'src/assets/img/ourWorksCards/rimskie.jpg';
import plisse from 'src/assets/img/ourWorksCards/plisse.jpg';
import curtains from 'src/assets/img/ourWorksCards/curtains.jpg';
import observer from 'src/utils/observer.utils';

import './OurWorksCards.scss';

const OurWorksCards: FC = () => {
  useEffect(() => {
    const componentFirst = document.querySelector('.assortment-cards');
    const observerFirst =
      componentFirst && observer(componentFirst, 'smooth-render');

    componentFirst && observerFirst?.observe(componentFirst);

    return () => {
      observerFirst?.disconnect();
    };
  }, []);

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
          <PhotoLink name="Римские шторы" image={rimskie} />
          <PhotoLink name="Шторы плиссе" image={plisse} />
          <PhotoLink name="Шторы, Тюль" image={curtains} />
        </div>
      </div>
    </div>
  );
};

export default OurWorksCards;

import { FC, useEffect } from 'react';

import PhotoLink from 'src/common/PhotoLink';
import observer from 'src/utils/observer.utils';
import { hostImages } from 'src/constants/hosting';

import './OurWorksCards.scss';

const balcony = `${hostImages}/ourWorksCards/balcony.jpg`;
const bathroom = `${hostImages}/ourWorksCards/bathroom.jpg`;
const accessories = `${hostImages}/ourWorksCards/accessories.jpg`;
const arcWindow = `${hostImages}/ourWorksCards/arcWindow.png`;
const alcove = `${hostImages}/ourWorksCards/alcove.jpg`;
const childrenRoom = `${hostImages}/ourWorksCards/childrenRoom.jpg`;
const bedCurtain = `${hostImages}/ourWorksCards/bedCurtain.jpg`;
const cover = `${hostImages}/ourWorksCards/cover.png`;
const bedCover = `${hostImages}/ourWorksCards/bedCover.jpg`;
const rimskie = `${hostImages}/ourWorksCards/rimskie.jpg`;
const plisse = `${hostImages}/ourWorksCards/plisse.jpg`;
const curtains = `${hostImages}/ourWorksCards/curtains.jpg`;

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
          <PhotoLink name="Шторы, Тюль" image={curtains} />
          <PhotoLink name="Покрывала" image={bedCover} />
          <PhotoLink name="Детская" image={childrenRoom} />
          <PhotoLink name="Шторы плиссе" image={plisse} />
          <PhotoLink name="Аксессуары" image={accessories} />
          <PhotoLink name="Арочные окна" image={arcWindow} />
          <PhotoLink name="Римские шторы" image={rimskie} />
          <PhotoLink name="Чехлы" image={cover} />
          <PhotoLink name="Беседки" image={alcove} />
          <PhotoLink name="Зонирование" image={bedCurtain} />
          <PhotoLink name="Балкон" image={balcony} />
          <PhotoLink name="Ванная" image={bathroom} />
        </div>
      </div>
    </div>
  );
};

export default OurWorksCards;

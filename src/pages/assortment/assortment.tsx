import { FC, useEffect } from 'react';

import AssortmentPageContainer from 'src/common/AssortmentPageContainer';
import ServicesItem from 'src/common/ServicesItem';
import cornices from 'src/assets/img/serviceCards/karniz-img.jpg';
import rimka from 'src/assets/img/assormentCards/rimka.jpg';
import tkani from 'src/assets/img/assormentCards/tkani.webp';
import accessories from 'src/assets/img/assormentCards/accessories.jpeg';
import pokrivalo from 'src/assets/img/assormentCards/pokrivalo.webp';

const Assortment: FC = () => {
  useEffect(() => {
    document.title = 'Ассортимент';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <AssortmentPageContainer>
        <ServicesItem
          image={cornices}
          name="Карнизы"
          key="Карнизы"
          src="karnisy"
        />
        <ServicesItem
          image={rimka}
          name="Римские механизмы"
          key="Римские механизмы"
          src="rimskie-mekhanizmy"
        />
        <ServicesItem
          image={tkani}
          name="Портьерные и тюлевые ткани"
          key="Портьерные и тюлевые ткани"
          src="porternye-tkani"
        />
        <ServicesItem
          image={accessories}
          name="Аксессуары"
          key="Аксессуары"
          src="accessories"
        />
        <ServicesItem
          image={pokrivalo}
          name="Покрывала"
          key="Покрывала"
          src="pokrivala"
        />
      </AssortmentPageContainer>
    </>
  );
};

export default Assortment;

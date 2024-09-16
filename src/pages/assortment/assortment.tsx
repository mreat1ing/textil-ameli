import { FC, useEffect } from 'react';

import AssortmentPageContainer from 'src/common/AssortmentPageContainer';
import ServicesItem from 'src/common/ServicesItem';
import { hostImages } from 'src/constants/hosting';

const cornices = `${hostImages}/serviceCards/karniz-img.jpg`;
const rimka = `${hostImages}/assormentCards/rimka.jpg`;
const tkani = `${hostImages}/assormentCards/tkani.webp`;
const accessories = `${hostImages}/assormentCards/accessories.jpeg`;
const pokrivalo = `${hostImages}/assormentCards/pokrivalo.webp`;

const Assortment: FC = () => {
  useEffect(() => {
    document.title = 'Ассортимент';
    window.scrollTo({ top: 0 });
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

import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './ServicesPageContainer.scss';

import Error from 'src/common/Error';
import ServicesPageLinks from 'src/common/ServicesPageLinks';
import ServicesPageBgTitle from 'src/common/ServicesPageBgTitle';
import ServicesDesign from 'src/components/ServicesDesign';
import AboutUsInvite from 'src/common/AboutUsInvite';
import ServicesSunProtection from 'src/components/ServicesSunProtection';
import ServicesMaintenance from 'src/components/ServicesMaintenance';
import ServicesCornices from 'src/components/ServicesCornices';
import ServicesBedspreads from 'src/components/ServicesBedspreads';
import { hostImages } from 'src/constants/hosting';

const design = `${hostImages}/serviceCards/nashi-raboti-1.jpg`;
const maintenance = `${hostImages}/serviceCards/zhalyuzi-img.jpg`;
const sunProtection = `${hostImages}/serviceCards/nashi-raboti-10.jpg`;
const cornices = `${hostImages}/serviceCards/karniz-img.jpg`;
const bedspreads = `${hostImages}/serviceCards/pled-img.jpg`;

type components =
  | 'design'
  | 'maintenance'
  | 'sun-protection'
  | 'cornices'
  | 'bedspreads';

const components = {
  design: {
    component: <ServicesDesign />,
    image: design,
    title: 'Дизайн и пошив',
  },
  maintenance: {
    component: <ServicesMaintenance />,
    image: maintenance,
    title: 'Сервисное обслуживание',
  },
  'sun-protection': {
    component: <ServicesSunProtection />,
    image: sunProtection,
    title: 'Солнцезащита',
  },
  cornices: {
    component: <ServicesCornices />,
    image: cornices,
    title: 'Карнизы',
  },
  bedspreads: {
    component: <ServicesBedspreads />,
    image: bedspreads,
    title: 'Покрывала и скатерти',
  },
};

const ServicesPageContainer: FC = () => {
  const { id }: { id?: components } = useParams();
  const element = id && components[id];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  if (!element) return <Error />;

  const { title, image, component } = element || components.design;

  return (
    <div className="services-card-page">
      <div className="services-card-page__wrapper">
        <div className="services-card-page__content">
          <ServicesPageBgTitle title={title} image={image} />
          {component}
          <AboutUsInvite description={false} />
        </div>
        <ServicesPageLinks current={id} />
      </div>
    </div>
  );
};

export default ServicesPageContainer;

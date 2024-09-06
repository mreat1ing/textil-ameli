import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './ServicesPageContainer.scss';

import Error from 'src/common/Error';
import ServicesPageLinks from 'src/common/ServicesPageLinks';
import ServicesPageBgTitle from 'src/common/ServicesPageBgTitle';
import ServicesDesign from 'src/components/ServicesDesign';
import AboutUsInvite from 'src/common/AboutUsInvite';
import design from 'src/assets/img/serviceCards/nashi-raboti-1.jpg';
import maintenance from 'src/assets/img/serviceCards/zhalyuzi-img.jpg';
import sunProtection from 'src/assets/img/serviceCards/nashi-raboti-10.jpg';
import cornices from 'src/assets/img/serviceCards/karniz-img.jpg';
import bedspreads from 'src/assets/img/serviceCards/pled-img.jpg';
import ServicesSunProtection from 'src/components/ServicesSunProtection';
import ServicesMaintenance from 'src/components/ServicesMaintenance';
import ServicesCornices from 'src/components/ServicesCornices';
import ServicesBedspreads from 'src/components/ServicesBedspreads';

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
    window.scrollTo({ top: 0, behavior: 'instant' });
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

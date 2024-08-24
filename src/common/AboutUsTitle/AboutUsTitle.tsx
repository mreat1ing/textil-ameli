import { FC, useEffect } from 'react';

import observer from 'src/utils/observer.utils';

import './AboutUsTitle.scss';

const AboutUsTitle: FC = () => {
  useEffect(() => {
    const component = document.querySelector('.about-us-title');
    const observerFirst = component && observer(component, 'smooth-render');

    component && observerFirst?.observe(component);

    return () => {
      observerFirst?.disconnect();
    };
  }, []);

  return (
    <div className="about-us-title">
      <p className="about-us-title__description shadow">
        Семейная Студия текстильного дизайна «АМЕЛИ»
      </p>
      <h1 className="about-us-title__title">О нашей студии</h1>
    </div>
  );
};

export default AboutUsTitle;

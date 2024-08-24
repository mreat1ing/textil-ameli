import { FC } from 'react';

import './AboutUsTitle.scss';

const AboutUsTitle: FC = () => {
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

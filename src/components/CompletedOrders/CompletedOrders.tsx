import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PhotoGallery from 'src/common/PhotoGallery';
import Button from 'src/ui/button';
import observer from 'src/utils/observer.utils';
import photo1 from 'src/assets/img/ourWorks/1.jpg';
import photo2 from 'src/assets/img/ourWorks/2.jpg';
import photo3 from 'src/assets/img/ourWorks/3.jpg';
import photo4 from 'src/assets/img/ourWorks/4.jpg';
import photo5 from 'src/assets/img/ourWorks/5.jpg';
import photo6 from 'src/assets/img/ourWorks/6.jpg';

import './CompletedOrders.scss';

const CompletedOrders: FC = () => {
  useEffect(() => {
    const componentFirst = document.querySelector('.our-projects__title');
    const componentSecond = document.querySelector('.our-projects__content');
    const observerFirst =
      componentFirst && observer(componentFirst, 'from-top');
    const observerSecond =
      componentSecond && observer(componentSecond, 'smooth-render');

    componentFirst && observerFirst?.observe(componentFirst);
    componentSecond && observerSecond?.observe(componentSecond);

    return () => {
      observerFirst?.disconnect();
      observerSecond?.disconnect();
    };
  }, []);

  return (
    <div className="our-projects">
      <div className="our-projects__wrapper">
        <h2 className="our-projects__title">
          Посмотрите наши выполненные проекты
        </h2>
        <PhotoGallery photoHeight={350} inLineCount={3}>
          <img src={photo1} alt="card" />
          <img src={photo2} alt="card" />
          <img src={photo3} alt="card" />
          <img src={photo4} alt="card" />
          <img src={photo5} alt="card" />
          <img src={photo6} alt="card" />
        </PhotoGallery>
        <Link to="/our-works">
          <Button className="our-projects__button">Показать еще</Button>
        </Link>
      </div>
    </div>
  );
};

export default CompletedOrders;

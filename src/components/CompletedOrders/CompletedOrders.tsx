import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

import placeholder from 'src/assets/img/item-placeholder.png';
import Button from 'src/ui/button';
import observer from 'src/utils/observer.utils';

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
        <ul className="our-projects__content">
          <li className="our-projects__item">
            <img src={placeholder} alt="card" />
          </li>
          <li className="our-projects__item">
            <img src={placeholder} alt="card" />
          </li>
          <li className="our-projects__item">
            <img src={placeholder} alt="card" />
          </li>
          <li className="our-projects__item">
            <img src={placeholder} alt="card" />
          </li>
          <li className="our-projects__item">
            <img src={placeholder} alt="card" />
          </li>
          <li className="our-projects__item">
            <img src={placeholder} alt="card" />
          </li>
        </ul>
        <Link to="/our-works">
          <Button className="our-projects__button">Показать еще</Button>
        </Link>
      </div>
    </div>
  );
};

export default CompletedOrders;

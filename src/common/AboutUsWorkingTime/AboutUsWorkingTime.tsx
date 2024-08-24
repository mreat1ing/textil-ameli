import { FC, useEffect } from 'react';

import observer from 'src/utils/observer.utils';

import './AboutUsWorkingTime.scss';

const AboutUsWorkingTime: FC = () => {
  useEffect(() => {
    const component = document.querySelector('.working-time__description-box');
    const componentSecond = document.querySelector('.working-time__box');
    const observerFirst = component && observer(component, 'from-left');
    const observerSecond =
      componentSecond && observer(componentSecond, 'from-right');

    component && observerFirst?.observe(component);
    componentSecond && observerSecond?.observe(componentSecond);

    return () => {
      observerFirst?.disconnect();
      observerSecond?.disconnect();
    };
  }, []);

  return (
    <div className="working-time">
      <div className="working-time__wrapper">
        <div className="working-time__description-box">
          <p className="working-time__description">
            Семейная Студия текстильного дизайна «Amelie» начала свою работу в
            2009 году. Предоставляя своим клиентам европейский уровень услуг, мы
            быстро стали одной из самых стабильно работающих студий текстильного
            дизайна.
          </p>
          <p className="working-time__description">
            Доказательством этого может служить реализация большого количества
            частных интерьеров, а также сотрудничество со многими
            представителями бизнеса.
          </p>
        </div>
        <div className="working-time__box">
          <div className="working-time__info">
            <p className="working-time__row">работаем с</p>
            <span className="working-time__numbers">2009</span>
            <p className="working-time__row">года</p>
          </div>
          <div className="working-time__info">
            <p className="working-time__row">более</p>
            <span className="working-time__numbers">30</span>
            <p className="working-time__row">корпоративных клиентов</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsWorkingTime;

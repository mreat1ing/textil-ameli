import { FC, useEffect } from 'react';

import { Curtain, Photos } from 'src/common/icons';
import observer from 'src/utils/observer.utils';
import AssortmentCart from 'src/common/AssortmentCart';

import './AboutCompany.scss';

const AboutCompany: FC = () => {
  useEffect(() => {
    const component = document.querySelector('.about-company__top-block');
    const componentSecond = document.querySelector(
      '.about-company__bottom-block-cards'
    );
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
    <div className="about-company">
      <div className="about-company__wrapper">
        <div className="about-company__top-block">
          <div className="about-company__description">
            <h2 className="about-company__title">
              Студия текстильного дизайна в Севастополе «Амели»
            </h2>
            <p className="about-company__about">
              Шторы &quot;под ключ&quot;- ЭТО К НАМ! Опытные дизайнеры с
              нежностью и скурпулезностью подойдут к любому вашему текстильному
              вопросу. Более 7000 образцов интерьерных тканей, уж точно не
              оставят вас равнодушными! Обещаем, вы обязательно найдете у нас
              воплощение своих текстильных фантазий.
              <br /> P. S. Все изделия являются гарантийными!
            </p>
          </div>
          <div className="about-company__expanded-block">
            <AssortmentCart
              className="about-company__card"
              icon={<Curtain width={48} height={48} />}
              description="Индивидуальное изготовление штор любой сложности"
              title="Для дома под любые задачи"
            />
            <AssortmentCart
              className="about-company__card"
              icon={<Photos width={48} height={48} />}
              description="В коммерческое помещение"
              title="Шторы, жалюзи в офис, конференц-зал, ресторан и др."
            />
          </div>
        </div>
      </div>
      {/* <div className="about-company__bottom-block"> */}

      {/* </div> */}
    </div>
  );
};

export default AboutCompany;

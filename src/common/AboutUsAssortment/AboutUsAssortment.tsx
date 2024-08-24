import { FC, useEffect } from 'react';

import { ReactComponent as Curtain } from 'src/assets/icons/curtain.svg';
import AssortmentCart from 'src/common/AssortmentCart';
import observer from 'src/utils/observer.utils';

import './AboutUsAssortment.scss';

const AboutUsAssortment: FC = () => {
  useEffect(() => {
    const component = document.querySelector('.assortment__title');
    const componentSecond = document.querySelector('.assortment__cards');
    const observerFirst = component && observer(component, 'from-top');
    const observerSecond =
      componentSecond && observer(componentSecond, 'smooth-render');

    component && observerFirst?.observe(component);
    componentSecond && observerSecond?.observe(componentSecond);

    return () => {
      observerFirst?.disconnect();
      observerSecond?.disconnect();
    };
  }, []);

  return (
    <div className="assortment">
      <div className="assortment__wrapper">
        <h2 className="assortment__title">Наш ассортимент</h2>
        <div className="assortment__cards">
          <AssortmentCart
            title="Тюль от 260 руб./м"
            description="Производство Турция, Китай, Италия, Испания, Германия, США"
            icon={<Curtain fill="rgb(235, 87, 183)" width={48} height={48} />}
            className="assortment__card"
          />
          <AssortmentCart
            title="Портьеры от 600 руб./м"
            description="Производство Турция, Китай, Италия, Испания, Германия, США"
            icon={<Curtain fill="rgb(235, 87, 183)" width={48} height={48} />}
            className="assortment__card"
          />
          <AssortmentCart
            title="Негорючие ткани"
            description="Негорючие сертифицированные тюлевые и портьерные ткани"
            icon={<Curtain fill="rgb(235, 87, 183)" width={48} height={48} />}
            className="assortment__card"
          />
          <AssortmentCart
            title="Скатертные ткани"
            description="С пропиткой Teflon, из огнестойкого волокна Trevira"
            icon={<Curtain fill="rgb(235, 87, 183)" width={48} height={48} />}
            className="assortment__card"
          />
          <AssortmentCart
            title="Уличные ткани"
            description="Уличные невыгораемые ткани Dralon (гарантия на невыгораемость 2 года!)"
            icon={<Curtain fill="rgb(235, 87, 183)" width={48} height={48} />}
            className="assortment__card"
          />
          <AssortmentCart
            title="Текстильные аксессуары"
            description="Магниты, подхваты, держатели, утяжелители, бахрома, стеклярус и т.д"
            icon={<Curtain fill="rgb(235, 87, 183)" width={48} height={48} />}
            className="assortment__card"
          />
          <AssortmentCart
            title="Принадлежности"
            description="Всё необходимое для изготовления текстильных изделий (тесьма, бандо, липучки, синтепух, молнии, стеганый синтепон и т.д.)"
            icon={<Curtain fill="rgb(235, 87, 183)" width={48} height={48} />}
            className="assortment__card"
          />
          <AssortmentCart
            title="Карнизы"
            description="Карнизы, рулонные шторы, шторы плиссе, маркизы"
            icon={<Curtain fill="rgb(235, 87, 183)" width={48} height={48} />}
            className="assortment__card"
          />
          <AssortmentCart
            title="Автоматика"
            description="Автоматические электро-карнизы, рулонные шторы, маркизы, римские шторы, плиссе"
            icon={<Curtain fill="rgb(235, 87, 183)" width={48} height={48} />}
            className="assortment__card"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsAssortment;

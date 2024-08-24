import { FC } from 'react';

import AssortmentCart from 'src/common/AssortmentCart';
import { ReactComponent as Curtain } from 'src/assets/icons/curtain.svg';

import './AboutUsAssortment.scss';

const AboutUsAssortment: FC = () => {
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

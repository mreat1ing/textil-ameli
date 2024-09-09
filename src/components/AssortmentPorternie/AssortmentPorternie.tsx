import { FC } from 'react';

import './AssortmentPorternie.scss';
import AssortmentPorternieListItem from 'src/common/AssortmentPorternieListItem';

import bgadeco1 from './assets/img/background/adeco1-img.jpg';
import bgadeco2 from './assets/img/background/adeco2-img.jpg';
import bgadeco3 from './assets/img/background/adeco3-img.jpg';
import bgyork from './assets/img/background/york-img.jpg';
import bgepocada from './assets/img/background/epocada-img.jpg';
import bgdesign from './assets/img/background/el-design-img.jpg';
import bgkado from './assets/img/background/kado-img.jpg';
import bgmirodim from './assets/img/background/microdim-img.jpg';
import bgdali from './assets/img/background/dali-img.jpg';
import bgsg from './assets/img/background/sg-img.jpg';
import bgrunotex from './assets/img/background/runotex-img.jpg';
import logoadeco from './assets/img/logos/adeco.png';
import logoyork from './assets/img/logos/york.png';
import logoepocada from './assets/img/logos/epocada.png';
import logodesign from './assets/img/logos/el-design.png';
import logokado from './assets/img/logos/kado.png';
import logomirodim from './assets/img/logos/mirodim.png';
import logodali from './assets/img/logos/dali.png';
import logosg from './assets/img/logos/sg.png';
import logorunotex from './assets/img/logos/runotex.png';

const AssortmentPorternie: FC = () => {
  return (
    <div className="assortment-porternie">
      <p className="services-p">
        Наш ассортимент насчитывает около 7000 образцов тканей. С каталогами вы
        можете ознакомиться на сайтах наших надёжных поставщиков:
      </p>
      <ul className="assortment-porternie-list">
        <AssortmentPorternieListItem
          background={bgadeco1}
          link="http://www.adekodesign.com/ru/ru/koleksiyonlar/adeko-221/"
          logo={logoadeco}
          title="ADEKO"
        />
        <AssortmentPorternieListItem
          background={bgadeco2}
          link="http://www.adekodesign.com/ru/ru/koleksiyonlar/adeko-222/"
          logo={logoadeco}
          title="ADEKO GLAMOROUS"
        />
        <AssortmentPorternieListItem
          background={bgadeco3}
          link="http://www.adekodesign.com/ru/ru/koleksiyonlar/adeko-224/"
          logo={logoadeco}
          title="INDOOR & OUTDOOR"
        />
        <AssortmentPorternieListItem
          background={bgyork}
          link="http://yorkmoscow.ru/"
          logo={logoyork}
          title="Ткани York"
        />
        <AssortmentPorternieListItem
          background={bgepocada}
          link="https://espocada.com/"
          logo={logoepocada}
          title="Ткани Epocada"
        />
        <AssortmentPorternieListItem
          background={bgdesign}
          link="http://www.eldesing.ru/"
          logo={logodesign}
          title="Ткани EL DESIGN"
        />
        <AssortmentPorternieListItem
          background={bgkado}
          link="https://kado.ru/"
          logo={logokado}
          title="Ткани KADO"
        />
        <AssortmentPorternieListItem
          background={bgmirodim}
          link="https://mirodim.ru/"
          logo={logomirodim}
          title="Ткани Миродим"
        />
        <AssortmentPorternieListItem
          background={bgdali}
          link="https://fabrik-dali.ru/"
          logo={logodali}
          title="Ткани DALI"
        />
        <AssortmentPorternieListItem
          background={bgsg}
          link="https://sghogar.ru/"
          logo={logosg}
          title="Испанские ткани SG"
        />
        <AssortmentPorternieListItem
          background={bgrunotex}
          link="https://runotex.net/catalog/"
          logo={logorunotex}
          title="Ткани RUNOtex"
        />
      </ul>
    </div>
  );
};

export default AssortmentPorternie;

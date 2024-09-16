import { FC } from 'react';

import './AssortmentPorternie.scss';
import AssortmentPorternieListItem from 'src/common/AssortmentPorternieListItem';
import { hostImages } from 'src/constants/hosting';

const bgadeco1 = `${hostImages}/background/adeco1-img.jpg`;
const bgadeco2 = `${hostImages}/background/adeco2-img.jpg`;
const bgadeco3 = `${hostImages}/background/adeco3-img.jpg`;
const bgyork = `${hostImages}/background/york-img.jpg`;
const bgepocada = `${hostImages}/background/epocada-img.jpg`;
const bgdesign = `${hostImages}/background/el-design-img.jpg`;
const bgkado = `${hostImages}/background/kado-img.jpg`;
const bgmirodim = `${hostImages}/background/microdim-img.jpg`;
const bgdali = `${hostImages}/background/dali-img.jpg`;
const bgsg = `${hostImages}/background/sg-img.jpg`;
const bgrunotex = `${hostImages}/background/runotex-img.jpg`;
const logoadeco = `${hostImages}/logos/adeco.png`;
const logoyork = `${hostImages}/logos/york.png`;
const logoepocada = `${hostImages}/logos/epocada.png`;
const logodesign = `${hostImages}/logos/el-design.png`;
const logokado = `${hostImages}/logos/kado.png`;
const logomirodim = `${hostImages}/logos/mirodim.png`;
const logodali = `${hostImages}/logos/dali.png`;
const logosg = `${hostImages}/logos/sg.png`;
const logorunotex = `${hostImages}/logos/runotex.png`;

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

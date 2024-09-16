import { FC, useEffect } from 'react';

import { hostImages } from 'src/constants/hosting';
import observer from 'src/utils/observer.utils';
import './OurClients.scss';

const chayka = `${hostImages}/companies/chayka.jpg`;
const discovery = `${hostImages}/companies/discovery.jpg`;
const fns = `${hostImages}/companies/fns.jpg`;
const institut = `${hostImages}/companies/institut.jpg`;
const kirov = `${hostImages}/companies/kirov.jpg`;
const montazh = `${hostImages}/companies/montazh.jpg`;
const palmira = `${hostImages}/companies/palmira.jpg`;
const tavros = `${hostImages}/companies/tavros.jpg`;

const OurClients: FC = () => {
  useEffect(() => {
    const component = document.querySelector('.our-clients__title');
    const componentSecond = document.querySelector('.our-clients__cards');
    const componentThird = document.querySelector('.our-clients__description');
    const observerFirst = component && observer(component, 'from-top');
    const observerSecond =
      componentSecond && observer(componentSecond, 'smooth-render');
    const observerThird =
      componentThird && observer(componentThird, 'from-left');

    component && observerFirst?.observe(component);
    componentSecond && observerSecond?.observe(componentSecond);
    componentThird && observerThird?.observe(componentThird);

    return () => {
      observerFirst?.disconnect();
      observerSecond?.disconnect();
      observerThird?.disconnect();
    };
  }, []);

  return (
    <div className="our-clients">
      <div className="our-clients__wrapper">
        <h2 className="our-clients__title">Среди наших клиентов</h2>
        <div className="our-clients__cards">
          <div className="our-clients__item">
            <img src={chayka} alt="chayka" />
            <div className="item__caption">
              <div className="item__background" />
              <h3 className="item__title">Гостиница «Чайка» (г.Гурзуф)</h3>
            </div>
          </div>
          <div className="our-clients__item">
            <img src={discovery} alt="discovery" />
            <div className="item__caption">
              <div className="item__background" />
              <h3 className="item__title">Отель «Discovery» (г.Кастрополь)</h3>
            </div>
          </div>
          <div className="our-clients__item">
            <img src={fns} alt="fns" />
            <div className="item__caption">
              <div className="item__background" />
              <h3 className="item__title">
                Налоговая служба РФ в г.Севастополе
              </h3>
            </div>
          </div>
          <div className="our-clients__item">
            <img src={institut} alt="institut" />
            <div className="item__caption">
              <div className="item__background" />
              <h3 className="item__title">
                Севастопольский Гидрофизический Институт
              </h3>
            </div>
          </div>
          <div className="our-clients__item">
            <img src={kirov} alt="kirov" />
            <div className="item__caption">
              <div className="item__background" />
              <h3 className="item__title">Санаторий им. Кирова (г.Ялта)</h3>
            </div>
          </div>
          <div className="our-clients__item">
            <img src={montazh} alt="montazh" />
            <div className="item__caption">
              <div className="item__background" />
              <h3 className="item__title">
                Гостиничный комплекс «Palmira Palace» (г.Ялта)
              </h3>
            </div>
          </div>
          <div className="our-clients__item">
            <img src={palmira} alt="palmira" />
            <div className="item__caption">
              <div className="item__background" />
              <h3 className="item__title">
                Строительная компания «СевПроектМонтаж» (г.Севастополь)
              </h3>
            </div>
          </div>
          <div className="our-clients__item">
            <img src={tavros} alt="tavros" />
            <div className="item__caption">
              <div className="item__background" />
              <h3 className="item__title">Отель «Таврос» (г.Балаклава)</h3>
            </div>
          </div>
        </div>
        <p className="our-clients__description">
          + более 30 компаний в Севастополе, Симферополе, Ялте, Донецке,
          Гурзуфе, Ласпи, Орловке и др.
        </p>
      </div>
    </div>
  );
};

export default OurClients;

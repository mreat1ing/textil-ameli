import { FC } from 'react';

import chayka from 'src/assets/img/companies/chayka.jpg';
import discovery from 'src/assets/img/companies/discovery.jpg';
import fns from 'src/assets/img/companies/fns.jpg';
import institut from 'src/assets/img/companies/institut.jpg';
import kirov from 'src/assets/img/companies/kirov.jpg';
import montazh from 'src/assets/img/companies/montazh.jpg';
import palmira from 'src/assets/img/companies/palmira.jpg';
import tavros from 'src/assets/img/companies/tavros.jpg';

import './OurClients.scss';

const OurClients: FC = () => {
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

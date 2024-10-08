import { FC, useEffect } from 'react';

import './ServicesCornices.scss';

const ServicesCornices: FC = () => {
  useEffect(() => {
    document.title = 'Карнизы';
  }, []);

  return (
    <div className="services-cornices">
      <p className="services-p">
        Карниз — это отдельный элемент дизайна, который может быть акцентом
        интерьера. Разобраться в многообразии моделей и конструкций сложно с
        первого раза. Металлические (кованные и литые), экологичные деревянные,
        удобные пластиковые, комбинированные. Круглые, багетные, струнные,
        шинные, телескопические, карнизы-кафе.
      </p>

      <p className="services-p">
        Мы поможем вам правильно подобрать карниз с учётом стиля, веса и
        крепления штор, расположения подоконника и других факторов.
      </p>

      <p className="services-p">
        У нас в студии вы вы можете приобрести карниз для любой обстановки —
        настенные или потолочные, скрытые, специализированные карнизы для
        римских штор и др.
      </p>

      <p className="services-p">
        А наши мастера осуществят монтаж аккуратно и чисто.
      </p>

      <p className="services-p">
        Также в наличии и под заказ мы предлагаем <b>электронные карнизы</b> с
        дистанционным управлением — через пульт или со смартфона.
      </p>
      <h3 className="services-h3">Электронные римские механизмы</h3>
      <p className="services-p">
        Автоматизированные электрические римские шторы позволят Вам с легкостью
        спрятаться от солнышка даже при очень высоких окнах.{' '}
        <b>Бесшумный мотор</b> и разные{' '}
        <b>варианты дистанционного управления</b> (пульт или смартфон)
        обеспечивают максимальный комфорт пользования.{' '}
      </p>
      <p className="services-p">
        Наша студия имеет большой опыт установки в Севастополе электронных
        римских штор &quot;под ключ&quot;, в том числе в помещениях с высотой
        окон более 5 метров.
      </p>
      <p className="services-p">
        Но что, если хочется сделать интерьер полностью индивидуальным? Как
        гармонично смотрятся, к примеру, <b>римские шторы</b>, выполненные из
        той же ткани, что и покрывало и подушки!
      </p>
      <p className="services-p">
        Заходите в нашу студию «Амели» в МЦ «Domino» на 2 этаж и получите
        консультацию специалиста по карнизам бесплатно.
      </p>
    </div>
  );
};

export default ServicesCornices;

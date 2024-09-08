import { FC, useEffect } from 'react';

import './AboutUsInvite.scss';
import Number from 'src/ui/number';
import Button from 'src/ui/button';
import observer from 'src/utils/observer.utils';

interface IAboutUsInvite {
  description?: boolean;
  className?: string;
}

const AboutUsInvite: FC<IAboutUsInvite> = ({
  description = true,
  className,
}) => {
  useEffect(() => {
    const component = document.querySelector('.invitation__description');
    const componentSecond = document.getElementById('first-block');
    const componentThird = document.getElementById('second-block');
    const observerFirst = component && observer(component, 'from-top');
    const observerSecond =
      componentSecond && observer(componentSecond, 'from-left');
    const observerThird =
      componentThird && observer(componentThird, 'from-right');

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
    <div className="invitation">
      <div className="invitation__wrapper">
        {description && (
          <p className="invitation__description">
            Будем рады разработать для Вас дизайн-проекты текстильного
            оформления. Напоминаем, что ценовая политика очень разнообразна. Наш
            ассортимент на данный момент насчитывает{' '}
            <span style={{ color: 'rgb(19, 162, 197)' }}>
              около 7000 образцов
            </span>{' '}
            тканей. Потому мы уверены, что сможем заинтересовать и порадовать
            нашего любого заказчика.
          </p>
        )}

        <div
          className={`invitation__blocks-wrapper${className ? ' ' + className : ''}`}
        >
          <div className="invitation__block" id="first-block">
            <p className="block__description">
              Мы работаем ежедневно с 10:00 до 18:00. Наберите номер или
              нажмите, чтобы позвонить:
            </p>
            <Number
              className="block__number"
              value="8 978 828 05 25"
              width="18"
              hover="rgb(253, 7, 178)"
              color="black"
            />
          </div>
          <div className="invitation__block" id="second-block">
            <p className="block__description">
              В нерабочее время нажмите, чтобы заказать звонок — мы перезвоним
              вам:
            </p>
            <Button className="block__button">заказать звонок</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsInvite;

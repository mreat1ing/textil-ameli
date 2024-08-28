import { FC, FormEvent, useEffect, useRef } from 'react';

import Eskiz from 'src/assets/img/eskiz.jpg';
import Input from 'src/ui/input';
import Button from 'src/ui/button';
import observer from 'src/utils/observer.utils';
import { PaperPlane } from 'src/common/icons';

import './Order.scss';

const Order: FC = () => {
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputPhoneRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    const component = document.querySelector('.order__image-wrapper');
    const observerFirst = component && observer(component, 'from-left');

    component && observerFirst?.observe(component);

    return () => {
      observerFirst?.disconnect();
    };
  }, []);

  return (
    <div className="order">
      <div className="order__wrapper">
        <div className="order__main">
          <div className="order__image-wrapper">
            <img className="order__image" src={Eskiz} alt="Эскиз" />
          </div>
          <form className="order__form" onSubmit={handleSubmit}>
            <h2 className="order__title">Ваши шторы начинаются с эскиза</h2>
            <p className="order__description">
              Для пошива штор наш дизайнер бесплатно нарисует эскиз. Это
              позволит представить, как будут выглядеть шторы на окнах.
            </p>
            <div className="order__input-wrapper">
              <Input
                ref={inputNameRef}
                label="Ваше имя: *"
                className="order__input"
              />
              <Input
                ref={inputPhoneRef}
                label="Ваш телефон: *"
                className="order__input"
                pattern=""
                type="number"
              />
            </div>
            <div className="order__button-wrapper">
              <Button type="submit" className="order__button">
                <div className="order__button-text">
                  <PaperPlane width={30} height={30} />
                  <span>Отправить</span>
                </div>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;

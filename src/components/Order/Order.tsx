import { FC, useEffect } from 'react';

import Eskiz from 'src/assets/img/eskiz.jpg';
import Input from 'src/ui/input';
import Button from 'src/ui/button';
import observer from 'src/utils/observer.utils';
import CheckboxWithImage from 'src/common/CheckboxWithImage';
import placeholder from 'src/assets/img/item-placeholder.png';
import { PaperPlane } from 'src/common/icons';

import './Order.scss';

interface IOrder {
  image?: boolean;
  textarea?: JSX.Element;
  title?: string;
  description?: boolean;
  titleSize?: string | number;
  className?: string;
  categories?: boolean;
}

const Order: FC<IOrder> = ({
  image = true,
  textarea = false,
  categories = false,
  title,
  description = true,
  titleSize = 40,
  className,
}) => {
  useEffect(() => {
    const component = document.querySelector('.order__image-wrapper');
    const observerFirst = component && observer(component, 'from-left');

    component && observerFirst?.observe(component);

    return () => {
      observerFirst?.disconnect();
    };
  }, []);

  return (
    <div className={`order${className ? ' ' + className : ''}`}>
      <div className="order__wrapper">
        <div
          className={`order__main${className ? ' ' + className + '--main' : ''}`}
        >
          {image && (
            <div className="order__image-wrapper">
              <img
                className={`order__image${className ? ' ' + className + '--image' : ''}`}
                src={Eskiz}
                alt="Эскиз"
              />
            </div>
          )}
          <form
            className={`order__form${className ? ' ' + className + '--form' : ''}`}
          >
            <h2
              className={`order__title${className ? ' ' + className + '--title' : ''}`}
              style={{ fontSize: titleSize }}
            >
              {title ? title : 'Ваши шторы начинаются с эскиза'}
            </h2>
            {description && (
              <p
                className={`order__description${className ? ' ' + className + '--description' : ''}`}
              >
                Для пошива штор наш дизайнер бесплатно нарисует эскиз. Это
                позволит представить, как будут выглядеть шторы на окнах.
              </p>
            )}
            {categories && (
              <>
                <h4 className="order__categories-title">
                  Куда вам нужны шторы?
                </h4>
                <div className="order__categories">
                  <CheckboxWithImage image={placeholder} label="test" />
                  <CheckboxWithImage image={placeholder} label="test" />
                  <CheckboxWithImage image={placeholder} label="test" />
                  <CheckboxWithImage image={placeholder} label="test" />
                  <CheckboxWithImage image={placeholder} label="test" />
                  <CheckboxWithImage image={placeholder} label="test" />
                </div>
              </>
            )}
            <div className="order__input-wrapper">
              <Input
                label="Ваше имя: *"
                className="order__input"
                placeholder="Как к вам обращаться?"
                required
              />
              <Input
                label="Ваш телефон: *"
                className="order__input"
                pattern=""
                type="number"
                required
              />
            </div>
            {textarea && textarea}
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

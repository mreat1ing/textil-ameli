import { FC, useEffect } from 'react';

import { hostImages, hostIcons } from 'src/constants/hosting';
import Input from 'src/ui/input';
import Button from 'src/ui/button';
import observer from 'src/utils/observer.utils';
import CheckboxWithImage from 'src/common/CheckboxWithImage';
import { PaperPlane } from 'src/common/icons';

const Eskiz = `${hostImages}/eskiz.jpg`;
const bathroom = `${hostIcons}/bathroom.svg`;
const bedroom = `${hostIcons}/bedroom.svg`;
const kitchen = `${hostIcons}/kitchen.svg`;
const livingRoom = `${hostIcons}/living-room.svg`;
const other = `${hostIcons}/other.svg`;
const playroom = `${hostIcons}/playroom.svg`;
const reception = `${hostIcons}/reception.svg`;

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
                  <CheckboxWithImage image={livingRoom} label="В гостинную" />
                  <CheckboxWithImage image={bedroom} label="В спальню" />
                  <CheckboxWithImage image={playroom} label="В детскую" />
                  <CheckboxWithImage image={kitchen} label="На кухню" />
                  <CheckboxWithImage image={bathroom} label="В ванную" />
                  <CheckboxWithImage
                    image={reception}
                    label="Для коммерческих помещений"
                  />
                  <CheckboxWithImage image={other} label="Другое" />
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

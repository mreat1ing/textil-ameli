import { FC, FormEvent, useEffect, useRef, useState } from 'react';
import { InputMask } from 'primereact/inputmask';

import { hostImages, hostIcons } from 'src/constants/hosting';
import Input from 'src/ui/input';
import Button from 'src/ui/button';
import observer from 'src/utils/observer.utils';
import CheckboxWithImage from 'src/common/CheckboxWithImage';
import { PaperPlane } from 'src/common/icons';
import Textarea from 'src/ui/textarea';
import {
  getSessionChecks,
  getSessionComment,
  getSessionName,
  getSessionPhone,
  setSessionChecks,
  setSessionComment,
  setSessionName,
  setSessionPhone,
} from 'src/utils/sessionOrder.utils';

import './Order.scss';

const Eskiz = `${hostImages}/eskiz.jpg`;
const bathroom = `${hostIcons}/bathroom.svg`;
const bedroom = `${hostIcons}/bedroom.svg`;
const kitchen = `${hostIcons}/kitchen.svg`;
const livingRoom = `${hostIcons}/living-room.svg`;
const other = `${hostIcons}/other.svg`;
const playroom = `${hostIcons}/playroom.svg`;
const reception = `${hostIcons}/reception.svg`;

interface IOrder {
  image?: boolean;
  textarea?: boolean;
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
  const checkListRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<InputMask>(null);
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const [checks, setChecks] = useState<string[]>(getSessionChecks());

  useEffect(() => {
    const component = document.querySelector('.order__image-wrapper');
    const observerFirst = component && observer(component, 'from-left');

    component && observerFirst?.observe(component);

    return () => {
      observerFirst?.disconnect();
    };
  }, []);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    sessionStorage.clear();
  };

  const setCheck = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const label = target.children[1] as HTMLLabelElement;
    let newArr = [];
    const itemId = checks.findIndex((el) => label.innerText === el);
    if (!target.classList.contains('checked') && itemId < 0) {
      newArr = [...checks, label.innerText];
    } else {
      newArr = [...checks.slice(0, itemId), ...checks.slice(itemId + 1)];
    }
    setChecks(newArr);
    setSessionChecks(newArr);
  };

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
            onSubmit={submitHandler}
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
                <div
                  className="order__categories"
                  ref={checkListRef}
                  onClick={setCheck}
                >
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
                ref={nameRef}
                defaultValue={getSessionName()}
                label="Ваше имя: *"
                className="order__input"
                placeholder="Как к вам обращаться?"
                required
                autoComplete="name webauthn"
                onChange={() => setSessionName(nameRef.current?.value)}
              />
              <label className="label" htmlFor="number">
                Ваш телефон: *
                <InputMask
                  ref={phoneRef}
                  value={getSessionPhone()}
                  className="input order__input"
                  required
                  id="number"
                  mask={'+7 (999) 999-99-99'}
                  placeholder={'+7 (___) ___-__-__'}
                  autoComplete="tel webauthn"
                  onChange={(e) => {
                    setSessionPhone(e.value as string);
                  }}
                />
              </label>
            </div>
            {textarea && (
              <Textarea
                defaultValue={getSessionComment()}
                placeholder="Добавьте ваш комментарий"
                label="Комментарий:"
                className="modal-content__order-textarea"
                ref={commentRef}
                onChange={() => setSessionComment(commentRef.current?.value)}
              />
            )}
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

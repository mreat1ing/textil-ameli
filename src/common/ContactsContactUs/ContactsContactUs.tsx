import { FC } from 'react';

import './ContactsContactUs.scss';
import Order from 'src/components/Order';
import Number from 'src/ui/number';
import Address from 'src/ui/address';
import Mail from 'src/ui/mail';
import Instagram from 'src/ui/instagram';
import YMap from 'src/common/YMap';

const ContactsContactUs: FC = () => {
  return (
    <div className="contacts-contact-us">
      <div className="contacts-contact-us__wrapper">
        <div className="contacts-contact-us__content">
          <div className="contacts-contact-us__contacts">
            <h1 className="contacts-contact-us__title">Контакты</h1>
            <p className="contacts-contact-us__description">
              &quot;Амели&quot; — Семейная студия
              <br />
              текстильного дизайна
            </p>
            <div className="contacts-contact-us__numbers">
              <Number
                className="contacts-contact-us__phone"
                value="8 978 828 05 25"
                color="black"
                hover="rgb(253, 7, 178)"
                width="25px"
                height="25px"
              />
              <Number
                className="contacts-contact-us__phone"
                value="8 978 979 53 43"
                color="black"
                hover="rgb(253, 7, 178)"
                width="25px"
                height="25px"
              />
              <Number
                className="contacts-contact-us__phone"
                value="8 978 979 06 90"
                color="black"
                hover="rgb(253, 7, 178)"
                width="25px"
                height="25px"
              />
              <Number
                className="contacts-contact-us__phone"
                value="8 978 164 97 10"
                color="black"
                hover="rgb(253, 7, 178)"
                width="25px"
                height="25px"
              />
            </div>
            <p className="contacts-contact-us__time">
              Ежедневно, 10:00 – 18:00
            </p>
            <Address className="contacts-contact-us__address" />
            <Mail className="contacts-contact-us__mail" />
            <Instagram
              className="contacts-contact-us__instagram"
              description="Пишите в direct"
              width="35px"
              height="35px"
            />
          </div>
          <Order
            image={false}
            description={false}
            titleSize={21}
            title="Оставьте ваши контакты и мы перезвоним:"
            className="contacts-contact-us__order"
            textarea
          />
        </div>
        <YMap className="contact-contact-us__map" />
      </div>
    </div>
  );
};

export default ContactsContactUs;

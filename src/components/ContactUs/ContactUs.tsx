import { FC, useEffect } from 'react';

import Number from 'src/ui/number';
import observer from 'src/utils/observer.utils';

import './ContactUs.scss';

const ContactUs: FC = () => {
  useEffect(() => {
    const component = document.querySelector('.contact-us');
    const observerFirst = component && observer(component);

    component && observerFirst?.observe(component);

    return () => {
      observerFirst?.disconnect();
    };
  }, []);

  return (
    <div className="contact-us">
      <div className="contact-us__wrapper">
        <div className="contact-us__content">
          <h3 className="contact-us__title">Есть вопросы?</h3>
          <p className="contact-us__description">Задайте их прямо сейчас!</p>
          <Number
            className="contact-us__number"
            value="8 978 828 05 25"
            color="rgb(66, 66, 66)"
            hover="rgb(253, 7, 178)"
            width="45"
            height="45"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

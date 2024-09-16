import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import Button from 'src/ui/button';
import './Error.scss';
import { hostImages } from 'src/constants/hosting';

const Error: FC = () => {
  return (
    <div className="error">
      <div className="error__wrapper">
        <div className="error__content">
          <div
            className="error__background"
            style={{ backgroundImage: `url(${hostImages}/bg-curtains.jpg)` }}
          />
          <div className="error__overlay" />
          <h1 className="error__title">404</h1>
          <p className="error__description">Страница не найдена</p>
          <NavLink to="/" replace>
            <Button className="error__button">на главную</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Error;

import { FC } from 'react';

import Address from 'src/ui/address';
import Mail from 'src/ui/mail';
import Logo from 'src/ui/logo';
import Number from 'src/ui/number';
import Button from 'src/ui/button';
import Instagram from 'src/ui/instagram';

import './Header.scss';

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header--desktop">
        <div className="header__top-wrapper">
          <div className="header__top">
            <Address />
            <Mail />
          </div>
        </div>
        <div className="header__bottom-wrapper">
          <div className="header__bottom">
            <div className="header__logo-wrapper">
              <Logo width="200px" />
              <p className="header__title">
                Семейная студия
                <br /> текстильного дизайна
              </p>
            </div>
            <div className="header__number-wrapper">
              <Number value="8 978 828 05 25" />
              <p className="header__number-description">
                Ежедневно, 10:00 – 18:00
              </p>
            </div>
            <div className="header__button-wrapper">
              <Button>Заказать звонок</Button>
            </div>
            <div className="header__instagram-wrapper">
              <Instagram />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

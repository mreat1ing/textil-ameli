import { FC, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Address from 'src/ui/address';
import Mail from 'src/ui/mail';
import Logo from 'src/ui/logo';
import Number from 'src/ui/number';
import Button from 'src/ui/button';
import Instagram from 'src/ui/instagram';

import './Header.scss';

const Header: FC = () => {
  const [instaShow, setInstaShow] = useState(true);

  const handleResize = useCallback(() => {
    if (window.innerWidth <= 990) {
      setInstaShow(false);
    } else setInstaShow(true);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => removeEventListener('resize', handleResize);
  }, [handleResize]);

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
              <Link to="/">
                <Logo width="200px" />
              </Link>
              <p className="header__title">
                Семейная студия
                <br /> текстильного дизайна
              </p>
            </div>
            <div className="header__number-wrapper">
              <div className="header__number-container">
                <Number
                  value="8 978 828 05 25"
                  width="25"
                  height="25"
                  color="rgb(19, 162, 197)"
                  hover="rgb(8, 189, 232)"
                />
                <p className="header__number-description">
                  Ежедневно, 10:00 – 18:00
                </p>
              </div>
              <div className="header__button-wrapper">
                <Button>Заказать звонок</Button>
              </div>
            </div>
            <div className="header__instagram-wrapper">
              {instaShow && <Instagram width="40" height="40" />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

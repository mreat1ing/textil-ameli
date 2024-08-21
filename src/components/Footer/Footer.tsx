import { FC, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from 'src/ui/logo';
import Address from 'src/ui/address';
import Navigation from 'src/components/Navigation';
import Number from 'src/ui/number';
import Mail from 'src/ui/mail';
import Instagram from 'src/ui/instagram';

import './Footer.scss';

const Footer: FC = () => {
  const [navShow, setNavShow] = useState(true);

  const handleResize = useCallback(() => {
    if (window.innerWidth <= 580) {
      setNavShow(false);
    } else setNavShow(true);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__about-us">
          <Link to="/">
            <Logo fill="white" width="150px" />
          </Link>
          <p className="footer__description">
            Семейная студия
            <br />
            текстильного дизайна
          </p>
          <Address />
        </div>
        {navShow && (
          <div className="footer__navigation">
            <Navigation type="footer" />
          </div>
        )}

        <div className="footer__contacts">
          <Number
            className="footer__number"
            value="8 978 828 05 25"
            height="25"
            width="25"
            color="white"
            hover="rgb(8, 189, 232)"
          />
          <Number
            className="footer__number"
            value="8 978 979 53 43"
            height="25"
            width="25"
            color="white"
            hover="rgb(8, 189, 232)"
          />
          <Number
            className="footer__number"
            value="8 978 979 06 90"
            height="25"
            width="25"
            color="white"
            hover="rgb(8, 189, 232)"
          />
          <Number
            className="footer__number"
            value="8 978 164 97 10"
            height="25"
            width="25"
            color="white"
            hover="rgb(8, 189, 232)"
          />
          <p className="footer__time-work">Ежедневно, 10:00 - 18:00</p>
          <Mail className="footer__mail" />
          <Instagram width="25px" height="25" description="наш инстаграм" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

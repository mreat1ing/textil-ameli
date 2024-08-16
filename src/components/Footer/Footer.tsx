import { FC } from 'react';
import { Link } from 'react-router-dom';

import Logo from 'src/ui/logo';
import Address from 'src/ui/address';
import Navigation from 'src/components/Navigation';
import Number from 'src/ui/number';
import Mail from 'src/ui/mail';
import Instagram from 'src/ui/instagram';

import './Footer.scss';

const Footer: FC = () => {
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
        <div className="footer__navigation">
          <Navigation type="footer" />
        </div>
        <div className="footer__contacts">
          <Number value="8 978 828 05 25" />
          <Number value="8 978 979 53 43" />
          <Number value="8 978 979 06 90" />
          <Number value="8 978 164 97 10" />
          <p className="footer__time-work">Ежедневно, 10:00 - 18:00</p>
          <Mail className="footer__mail" />
          <Instagram width="35px" description="наш инстаграм" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { FC } from 'react';
import { Link } from 'react-router-dom';

import './Navigation.scss';

interface INavigation {
  type?: 'header' | 'footer';
}

const Navigation: FC<INavigation> = ({ type }) => {
  const classType =
    type === 'header' || !type ? 'navigation' : 'navigation-footer';

  return (
    <div className={`navigation-wrapper${!type ? '' : ' no-border'}`}>
      <nav className={classType}>
        <ul className={`${classType}__list`}>
          <li className={`${classType}__item active`}>
            <Link to="/">Главная</Link>
          </li>
          <li className={`${classType}__item`}>
            <Link to="/about">О нас</Link>
          </li>
          <li className={`${classType}__item`}>
            <Link to="/services">Услуги</Link>
          </li>
          <li className={`${classType}__item`}>
            <Link to="/assortment">Ассортимент</Link>
          </li>
          <li className={`${classType}__item`}>
            <Link to="/our-works">Наши работы</Link>
          </li>
          <li className={`${classType}__item`}>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

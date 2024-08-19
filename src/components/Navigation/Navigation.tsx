import { FC } from 'react';
import { NavLink } from 'react-router-dom';

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
          <li className={`${classType}__item`}>
            <NavLink to="/">Главная</NavLink>
          </li>
          <li className={`${classType}__item`}>
            <NavLink to="/about">О нас</NavLink>
          </li>
          <li className={`${classType}__item`}>
            <NavLink to="/services">Услуги</NavLink>
          </li>
          <li className={`${classType}__item`}>
            <NavLink to="/assortment">Ассортимент</NavLink>
          </li>
          <li className={`${classType}__item`}>
            <NavLink to="/our-works">Наши работы</NavLink>
          </li>
          <li className={`${classType}__item`}>
            <NavLink to="/contacts">Контакты</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

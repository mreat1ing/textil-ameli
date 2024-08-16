import { FC } from 'react';

import './Navigation.scss';

const Navigation: FC = () => {
  return (
    <div className="navigation-wrapper">
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item active">
            <a href="/">Главная</a>
          </li>
          <li className="navigation__item">
            <a href="/">О нас</a>
          </li>
          <li className="navigation__item">
            <a href="/">Услуги</a>
          </li>
          <li className="navigation__item">
            <a href="/">Ассортимент</a>
          </li>
          <li className="navigation__item">
            <a href="/">Наши работы</a>
          </li>
          <li className="navigation__item">
            <a href="/">Контакты</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

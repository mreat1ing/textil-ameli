import { FC } from 'react';

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
            <a href="/">Главная</a>
          </li>
          <li className={`${classType}__item`}>
            <a href="/">О нас</a>
          </li>
          <li className={`${classType}__item`}>
            <a href="/">Услуги</a>
          </li>
          <li className={`${classType}__item`}>
            <a href="/">Ассортимент</a>
          </li>
          <li className={`${classType}__item`}>
            <a href="/">Наши работы</a>
          </li>
          <li className={`${classType}__item`}>
            <a href="/">Контакты</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

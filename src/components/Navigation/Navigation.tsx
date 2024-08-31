import { FC, useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import BurgerMenu from 'src/common/BurgerMenu';
import burgerToggle from 'src/utils/burgerToggle.utils';
import CloseButton from 'src/ui/closeButton';
import Instagram from 'src/ui/instagram';
import ExpandableNavLink from 'src/common/ExpandableNavLink';

import './Navigation.scss';

type navType = 'header' | 'footer' | 'burger';

interface INavigation {
  type?: navType;
}

const Navigation: FC<INavigation> = ({ type = 'header' }) => {
  const [navType, setNavType] = useState<navType>(type);

  const handleResize = useCallback(() => {
    if (window.innerWidth <= 990) {
      setNavType('burger');
    } else setNavType(type);
  }, [type]);

  useEffect(() => {
    if (type === 'footer') return;
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => removeEventListener('resize', handleResize);
  }, [handleResize, type]);

  if (navType === 'burger') {
    return (
      <div className="burger">
        <div className="burger-bg" onClick={burgerToggle} />
        <BurgerMenu />
        <div className="navigation-wrapper no-border">
          <nav className="navigation-burger">
            <CloseButton handleClick={burgerToggle} />
            <ul className="navigation-burger__list" onClick={burgerToggle}>
              <li className="navigation-burger__item">
                <NavLink to="/">Главная</NavLink>
              </li>
              <li className="navigation-burger__item">
                <NavLink to="/about">О нас</NavLink>
              </li>
              <li className="navigation-burger__item">
                <ExpandableNavLink
                  to="/services"
                  items={[
                    <NavLink key="cheta" to={'services/cheta'}>
                      Чета
                    </NavLink>,
                  ]}
                >
                  Услуги
                </ExpandableNavLink>
              </li>
              <li className="navigation-burger__item">
                <NavLink to="/assortment">Ассортимент</NavLink>
              </li>
              <li className="navigation-burger__item">
                <NavLink to="/our-works">Наши работы</NavLink>
              </li>
              <li className="navigation-burger__item">
                <NavLink to="/contacts">Контакты</NavLink>
              </li>
              <li className="navigation-burger__item">
                <Instagram width="40" height="40" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }

  const classType =
    type === 'header' || !type ? 'navigation' : 'navigation-footer';

  return (
    <div
      className={`navigation-wrapper${type === 'header' ? '' : ' no-border'}`}
    >
      <nav className={classType}>
        <ul className={`${classType}__list`}>
          <li className={`${classType}__item`}>
            <NavLink to="/">Главная</NavLink>
          </li>
          <li className={`${classType}__item`}>
            <NavLink to="/about">О нас</NavLink>
          </li>
          <li className={`${classType}__item`}>
            <ExpandableNavLink
              to="/services"
              items={[
                <NavLink key="design" to={'services/design'}>
                  Дизайн и пошив
                </NavLink>,
                <NavLink key="maintenance" to={'services/maintenance'}>
                  Сервисное обслуживание
                </NavLink>,
                <NavLink key="sun-protection" to={'services/sun-protection'}>
                  Солнцезащита
                </NavLink>,
                <NavLink key="cornices" to={'services/cornices'}>
                  Карнизы
                </NavLink>,
                <NavLink key="bedspreads" to={'services/bedspreads'}>
                  Покрывала и скатерти
                </NavLink>,
              ]}
            >
              Услуги
            </ExpandableNavLink>
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

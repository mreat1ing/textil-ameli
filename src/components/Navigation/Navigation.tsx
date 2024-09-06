import { FC, useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import BurgerMenu from 'src/common/BurgerMenu';
import burgerToggle from 'src/utils/burgerToggle.utils';
import CloseButton from 'src/ui/closeButton';
import Instagram from 'src/ui/instagram';
import ExpandableNavLink from 'src/common/ExpandableNavLink';
import {
  Completed,
  Assortment,
  Contact,
  Heart,
  House,
  Services,
} from 'src/common/icons';

import './Navigation.scss';

type navType = 'header' | 'footer' | 'burger';

interface INavigation {
  type?: navType;
}

const Navigation: FC<INavigation> = ({ type = 'header' }) => {
  const [navType, setNavType] = useState<navType>(type);
  // TODO: Навигация для всех страниц кроме главной //////////////////
  //
  //
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   console.log(pathname);
  // }, [pathname]);
  // /////////////////////////////////////////////////////////////////

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
                  key="services"
                  to="/services"
                  type="burger"
                  items={[
                    <NavLink key="design" to={'services/design'}>
                      Дизайн и пошив
                    </NavLink>,
                    <NavLink key="maintenance" to={'services/maintenance'}>
                      Сервисное обслуживание
                    </NavLink>,
                    <NavLink
                      key="sun-protection"
                      to={'services/sun-protection'}
                    >
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
              <li className="navigation-burger__item">
                <ExpandableNavLink
                  key="assortment"
                  to="/assortment"
                  type="burger"
                  items={[
                    <ExpandableNavLink
                      key="karnisy"
                      to="/assortment/karnisy"
                      type="burger"
                      items={[
                        <NavLink
                          key="elektrokarnisy"
                          to="/assortment/karnisy/elektrokarnisy"
                        >
                          Электрокарнизы
                        </NavLink>,
                        <NavLink
                          key="alyuminievye-profilya"
                          to="/assortment/karnisy/alyuminievye-profilya"
                        >
                          Алюминиевые профиля
                        </NavLink>,
                        <NavLink key="kovanie" to="/assortment/karnisy/kovanie">
                          Кованые
                        </NavLink>,
                        <NavLink
                          key="wood"
                          to="/assortment/karnisy/derevyannie"
                        >
                          Деревянные
                        </NavLink>,
                        <NavLink
                          key="exclusive"
                          to="/assortment/karnisy/exclusive"
                        >
                          Эксклюзив
                        </NavLink>,
                      ]}
                    >
                      Карнизы
                    </ExpandableNavLink>,
                    <NavLink
                      key="rimskie-mekhanizmy"
                      to="/assortment/rimskie-mekhanizmy"
                    >
                      Римские механизмы
                    </NavLink>,
                    <NavLink
                      key="porternye-tkani"
                      to="/assortment/porternye-tkani"
                    >
                      Портьерные и тюлевые ткани
                    </NavLink>,
                    <ExpandableNavLink
                      key="accessories"
                      to="/assortment/accessories"
                      type="burger"
                      items={[
                        <NavLink
                          key="podhvati"
                          to="/assortment/accessories/podhvati"
                        >
                          Подхваты
                        </NavLink>,
                        <NavLink key="kisti" to="/assortment/accessories/kisti">
                          Кисти
                        </NavLink>,
                        <NavLink
                          key="magnets"
                          to="/assortment/accessories/magnets"
                        >
                          Магниты
                        </NavLink>,
                      ]}
                    >
                      Аксессуары
                    </ExpandableNavLink>,
                    <NavLink key="pokrivala" to="/assortment/pokrivala">
                      Покрывала
                    </NavLink>,
                  ]}
                >
                  Ассортимент
                </ExpandableNavLink>
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
            <NavLink to="/">
              {type === 'header' && <House width={25} height={25} />}
              Главная
            </NavLink>
          </li>
          <li className={`${classType}__item`}>
            <NavLink to="/about">
              {type === 'header' && (
                <Heart className="stroke" width={25} height={25} />
              )}
              О нас
            </NavLink>
          </li>
          <li className={`${classType}__item`}>
            {type === 'footer' && <NavLink to="/services">Услуги</NavLink>}
            {type === 'header' && (
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
                <Services width={25} height={25} />
                Услуги
              </ExpandableNavLink>
            )}
          </li>
          <li className={`${classType}__item`}>
            {type === 'footer' && (
              <NavLink to="/assortment">Ассортимент</NavLink>
            )}
            {type === 'header' && (
              <ExpandableNavLink
                to="/assortment"
                items={[
                  <ExpandableNavLink
                    key="karnisy"
                    to="/assortment/karnisy"
                    direction="left"
                    timeoutOver={200}
                    items={[
                      <NavLink
                        key="elektrokarnisy"
                        to="/assortment/karnisy/elektrokarnisy"
                      >
                        Электрокарнизы
                      </NavLink>,
                      <NavLink
                        key="alyuminievye-profilya"
                        to="/assortment/karnisy/alyuminievye-profilya"
                      >
                        Алюминиевые профиля
                      </NavLink>,
                      <NavLink key="kovanie" to="/assortment/karnisy/kovanie">
                        Кованые
                      </NavLink>,
                      <NavLink key="wood" to="/assortment/karnisy/derevyannie">
                        Деревянные
                      </NavLink>,
                      <NavLink
                        key="exclusive"
                        to="/assortment/karnisy/exclusive"
                      >
                        Эксклюзив
                      </NavLink>,
                    ]}
                  >
                    Карнизы
                  </ExpandableNavLink>,
                  <NavLink
                    key="rimskie-mekhanizmy"
                    to="/assortment/rimskie-mekhanizmy"
                  >
                    Римские механизмы
                  </NavLink>,
                  <NavLink
                    key="porternye-tkani"
                    to="/assortment/porternye-tkani"
                  >
                    Портьерные и тюлевые ткани
                  </NavLink>,
                  <ExpandableNavLink
                    key="accessories"
                    to="/assortment/accessories"
                    direction="right"
                    timeoutOver={200}
                    items={[
                      <NavLink
                        key="podhvati"
                        to="/assortment/accessories/podhvati"
                      >
                        Подхваты
                      </NavLink>,
                      <NavLink key="kisti" to="/assortment/accessories/kisti">
                        Кисти
                      </NavLink>,
                      <NavLink
                        key="magnets"
                        to="/assortment/accessories/magnets"
                      >
                        Магниты
                      </NavLink>,
                    ]}
                  >
                    Аксессуары
                  </ExpandableNavLink>,
                  <NavLink key="pokrivala" to="/assortment/pokrivala">
                    Покрывала
                  </NavLink>,
                ]}
              >
                <Assortment
                  width={25}
                  height={25}
                  stroke="black"
                  className="stroke"
                />
                Ассортимент
              </ExpandableNavLink>
            )}
          </li>
          <li className={`${classType}__item`}>
            <NavLink to="/our-works">
              {type === 'header' && <Completed width={25} height={25} />}
              Наши работы
            </NavLink>
          </li>
          <li className={`${classType}__item`}>
            <NavLink to="/contacts">
              {type === 'header' && <Contact width={25} height={25} />}
              Контакты
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

import { FC, useEffect } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';

import { getItems } from 'src/db/assortment';
import observer from 'src/utils/observer.utils';

import './AssortmentItemContainer.scss';
import AboutUsInvite from '../AboutUsInvite';

const AssortmentItemContainer: FC = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const splittedPath = pathname.split('/');
  const pathWoId = splittedPath.slice(0, splittedPath.length - 1).join('/');
  const item = id ? getItems(pathname.split('/')[2], id) : null;

  useEffect(() => {
    const component = document.querySelector('.services-cards__title');
    const componentSecond = document.querySelector('.assortment-item__content');
    const observerFirst = component && observer(component, 'from-left');
    const observerSecond =
      componentSecond && observer(componentSecond, 'smooth-render');

    component && observerFirst?.observe(component);
    componentSecond && observerSecond?.observe(componentSecond);

    return () => {
      observerFirst?.disconnect();
      observerSecond?.disconnect();
    };
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="left-background" />
        <NavLink className="back-link" to={pathWoId}>
          Назад
        </NavLink>
        <h1 className="services-cards__title">{item?.name}</h1>
        <div className="assortment-item__content">{item?.component}</div>
        <AboutUsInvite description={false} />
      </div>
    </div>
  );
};

export default AssortmentItemContainer;

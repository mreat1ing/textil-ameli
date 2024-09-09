import { FC, useEffect } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';

import { getItems } from 'src/db/assortment';
import observer from 'src/utils/observer.utils';

import './AssortmentItemContainer.scss';
import AboutUsInvite from '../AboutUsInvite';

interface IAssortmentItemContainer {
  component?: JSX.Element;
  title?: string;
}

const AssortmentItemContainer: FC<IAssortmentItemContainer> = ({
  component,
  title,
}) => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const splittedPath = pathname.split('/');
  const pathWoId = splittedPath.slice(0, splittedPath.length - 1).join('/');
  let item;

  if (!component) {
    item = id ? getItems(pathname.split('/')[2], id) : null;
  } else item = { name: title, component: component };

  useEffect(() => {
    const element = document.querySelector('.services-cards__title');
    const elementSecond = document.querySelector('.assortment-item__content');
    const observerFirst = element && observer(element, 'from-left');
    const observerSecond =
      elementSecond && observer(elementSecond, 'smooth-render');

    element && observerFirst?.observe(element);
    elementSecond && observerSecond?.observe(elementSecond);

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

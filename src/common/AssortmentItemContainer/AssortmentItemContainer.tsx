import { FC, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { getItems } from 'src/db/assortment';
import observer from 'src/utils/observer.utils';

import './AssortmentItemContainer.scss';
import AboutUsInvite from '../AboutUsInvite';
import Error from '../Error';

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
  let item;

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

  if (!component) {
    item = id
      ? getItems(pathname.split('/')[splittedPath.length - 2], id)
      : null;
  } else if (component) item = { name: title, component: component };

  if (!item) return <Error />;

  return (
    <div className="container">
      <div className="wrapper">
        <div className="left-background" />
        <h1 className="services-cards__title">{item?.name}</h1>
        <div className="assortment-item__content">{item?.component}</div>
        <AboutUsInvite description={false} />
      </div>
    </div>
  );
};

export default AssortmentItemContainer;

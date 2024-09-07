import { FC, useEffect } from 'react';

import './AssortmentPageContainer.scss';
import observer from 'src/utils/observer.utils';

interface IAssortmentPageContainer {
  children?: JSX.Element | JSX.Element[];
  title?: string;
  count?: 1 | 2 | 3;
}

const AssortmentPageContainer: FC<IAssortmentPageContainer> = ({
  children,
  title = 'Ассортимент',
  count = 3,
}) => {
  const itemsCount = count === 3 ? 'row--3' : count === 2 ? 'row--2' : 'row--1';
  const elements = Array.isArray(children)
    ? children.map((el) => (
        <li className={`assortment-list__item ${itemsCount}`} key={el.key}>
          {el}
        </li>
      ))
    : children;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    const component = document.querySelector('.services-cards__title');
    const componentSecond = document.querySelector('.assortment-list');
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
    <div className="assortment-container">
      <div className="assortment-wrapper">
        <h1 className="services-cards__title">{title}</h1>
        <ul className="assortment-list">{elements}</ul>
      </div>
    </div>
  );
};

export default AssortmentPageContainer;

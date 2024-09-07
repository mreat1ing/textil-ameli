import { FC, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import './AssortmentPageItems.scss';
import AssortmentPageContainer from 'src/common/AssortmentPageContainer';
import Error from 'src/common/Error';
import ServicesItem from 'src/common/ServicesItem';
import assortmentNames from 'src/types/assortmentNames.type';
import {
  accessoriesAssortment,
  assortment,
  cornicesAssortment,
} from 'src/db/assortment';

const AssortmentPageItems: FC = () => {
  const { id }: { id?: assortmentNames } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!id) return <Error />;

  const splittedPath = pathname.split('/');
  let findObject = assortment;
  if (splittedPath.length > 3) {
    if (splittedPath[2] === 'karnisy') findObject = cornicesAssortment;
    else if (splittedPath[2] === 'accessories')
      findObject = accessoriesAssortment;
  }

  const elementId = findObject.findIndex((el) => el.url === id);
  const element = findObject[elementId] && findObject[elementId];

  let items, title;
  if (element) {
    items = element.items;
    title = element.title;
  } else return <Error />;

  const normalItems = [];
  for (const item of items) {
    const { image, key, name, src } = item;
    const tempItem = (
      <ServicesItem name={name} image={image} key={key} src={src} />
    );
    normalItems.push(tempItem);
  }

  const itemsCount = id !== 'karnisy' && id !== 'accessories' ? 2 : 3;
  return (
    <AssortmentPageContainer title={title} count={itemsCount}>
      {normalItems}
    </AssortmentPageContainer>
  );
};

export default AssortmentPageItems;

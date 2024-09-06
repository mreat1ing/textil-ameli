import { FC, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import './AssortmentPageItems.scss';
import AssortmentPageContainer from 'src/common/AssortmentPageContainer';
import Error from 'src/common/Error';
import ServicesItem from 'src/common/ServicesItem';
import electro from 'src/assets/img/assormentCards/cornices/electro.png';
import alluminum from 'src/assets/img/assormentCards/cornices/alluminum.jpg';
import kovannii from 'src/assets/img/assormentCards/cornices/kovannii.webp';
import wood from 'src/assets/img/assormentCards/cornices/wood.jpg';
import exclusive from 'src/assets/img/assormentCards/cornices/exclusive.png';
import kist from 'src/assets/img/assormentCards/accesories/kist.jpg';
import podhvat from 'src/assets/img/assormentCards/accesories/podhvat.jpg';
import magnet from 'src/assets/img/assormentCards/accesories/magnet.jpg';

interface IItem {
  name: string;
  src: string;
  image: string;
  key: string;
}
type assortment = { title: string; items: { [x: string]: IItem } };
type assortmentNames = 'karnisy' | 'rimskie-mekhanizmy';

interface IAssortment {
  url: string;
  title: string;
  items: IItem[];
}

const assortment: IAssortment[] = [
  {
    url: 'karnisy',
    title: 'Карнизы',
    items: [
      {
        name: 'Электрокарнизы',
        src: 'elektrokarnisy',
        image: electro,
        key: 'Электрокарнизы',
      },
      {
        name: 'Алюминиевые профиля',
        src: 'alyuminievye-profilya',
        image: alluminum,
        key: 'Алюминиевые профиля',
      },
      {
        name: 'Кованые',
        src: 'kovanie',
        image: kovannii,
        key: 'Кованые',
      },
      {
        name: 'Деревянные',
        src: 'derevyannie',
        image: wood,
        key: 'Деревянные',
      },
      {
        name: 'Эксклюзив',
        src: 'exclusive',
        image: exclusive,
        key: 'Эксклюзив',
      },
    ],
  },
  {
    url: 'rimskie-mekhanizmy',
    title: 'Римские механизмы',
    items: [],
  },
  {
    url: 'porternye-tkani',
    title: 'Портьерные и тюлевые ткани',
    items: [],
  },
  {
    url: 'accessories',
    title: 'Аксессуары',
    items: [
      {
        image: podhvat,
        key: 'Подхваты',
        name: 'Подхваты',
        src: 'podhvati',
      },
      {
        image: kist,
        key: 'Кисти',
        name: 'Кисти',
        src: 'kisti',
      },
      {
        image: magnet,
        key: 'Магниты',
        name: 'Магниты',
        src: 'magnets',
      },
    ],
  },
  {
    url: 'pokrivala',
    title: 'Покрывала',
    items: [],
  },
];

const cornicesAssortment: IAssortment[] = [
  {
    url: 'elektrokarnisy',
    title: 'Электрокарнизы',
    items: [],
  },
  {
    url: 'alyuminievye-profilya',
    title: 'Алюминиевые профиля',
    items: [],
  },
  {
    url: 'kovanie',
    title: 'Кованые',
    items: [],
  },
  {
    url: 'derevyannie',
    title: 'Деревянные',
    items: [],
  },
  {
    url: 'exclusive',
    title: 'Эксклюзив',
    items: [],
  },
];

const accessoriesAssortment: IAssortment[] = [
  {
    url: 'podhvati',
    title: 'Подхваты',
    items: [],
  },
  {
    url: 'kisti',
    title: 'Кисти',
    items: [],
  },
  {
    url: 'magnets',
    title: 'Магниты',
    items: [],
  },
];

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

  return (
    <AssortmentPageContainer title={title}>
      {normalItems}
    </AssortmentPageContainer>
  );
};

export default AssortmentPageItems;

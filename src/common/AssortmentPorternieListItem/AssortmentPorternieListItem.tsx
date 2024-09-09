import { FC } from 'react';

import './AssortmentPorternieListItem.scss';

interface IAssortmentPorternieListItem {
  link: string;
  logo: string;
  background: string;
  title: string;
}

const AssortmentPorternieListItem: FC<IAssortmentPorternieListItem> = ({
  background,
  link,
  logo,
  title,
}) => {
  return (
    <li className="assortment-porternie-list__item">
      <a href={link} target="_blank" rel="noreferrer">
        <div
          className="list-item__background"
          style={{ backgroundImage: `url(${background})` }}
        />
        <div className="list-item__card">
          <div className="list-item__image-container">
            <img src={logo} alt={title} />
          </div>
          <p className="list-item__title">{title}</p>
        </div>
      </a>
    </li>
  );
};

export default AssortmentPorternieListItem;

import { FC } from 'react';

import './AssortmentCart.scss';

interface IAssortmentCart {
  title: string;
  icon: JSX.Element;
  description: string;
  className?: string;
}

const AssortmentCart: FC<IAssortmentCart> = ({
  description,
  icon,
  title,
  className,
}) => {
  const cardClasses = 'assortment-card' + (className ? ' ' + className : '');

  return (
    <div className={cardClasses}>
      <div className="assortment-card__image">{icon}</div>

      <h3 className="assortment-card__title">{title}</h3>
      <p className="assortment-card__description">{description}</p>
    </div>
  );
};

export default AssortmentCart;

import { FC } from 'react';

import './TitleCard.scss';

interface ITitleCard {
  text: string;
  image: JSX.Element;
  className?: string;
  description?: string;
}

const TitleCard: FC<ITitleCard> = ({ image, text, className, description }) => {
  return (
    <div
      className={`title-card${className ? ' ' + className : ''}`}
      style={description ? { height: '220px' } : undefined}
    >
      {image}
      <h4 className="title-card__text">{text}</h4>
      {description && <p className="title-card__description">{description}</p>}
    </div>
  );
};

export default TitleCard;

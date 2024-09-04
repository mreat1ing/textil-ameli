import { FC } from 'react';

import './TitleCard.scss';

interface ITitleCard {
  text: string;
  image: JSX.Element;
  className?: string;
}

const TitleCard: FC<ITitleCard> = ({ image, text, className }) => {
  return (
    <div className={`title-card${className ? ' ' + className : ''}`}>
      {image}
      <h4 className="title-card__text">{text}</h4>
    </div>
  );
};

export default TitleCard;

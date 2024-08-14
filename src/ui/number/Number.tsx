import { FC } from 'react';

import './Number.scss';

interface INumber {
  value: string;
}

const Number: FC<INumber> = ({ value }) => {
  const stripedValue = value.replaceAll(' ', '');
  return (
    <div className="number">
      <a href={`tel:${stripedValue}`}>
        <span className="number__phone">{value}</span>
      </a>
    </div>
  );
};

export default Number;

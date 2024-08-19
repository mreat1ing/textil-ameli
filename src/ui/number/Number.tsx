import { FC } from 'react';

import './Number.scss';

interface INumber {
  value: string;
  className?: string;
}

const Number: FC<INumber> = ({ value, className }) => {
  const stripedValue = value.replaceAll(' ', '');
  const numberClass = 'number__phone' + (className ? ' ' + className : '');

  return (
    <div className="number">
      <a href={`tel:${stripedValue}`}>
        <span className={numberClass}>{value}</span>
      </a>
    </div>
  );
};

export default Number;

import { FC } from 'react';

import './Address.scss';

interface IAddress {
  className?: string;
}

const Address: FC<IAddress> = ({ className }) => {
  const addressClass = 'address' + (className ? ' ' + className : '');

  return (
    <p className={addressClass}>
      Севастополь, МЦ “DOMINO” (б-р Гидронавтов, 60, 1 эт.)
    </p>
  );
};

export default Address;

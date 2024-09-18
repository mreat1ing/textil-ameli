import { FC } from 'react';

import './Address.scss';

interface IAddress {
  className?: string;
}

const Address: FC<IAddress> = ({ className }) => {
  const addressClass = 'address' + (className ? ' ' + className : '');

  return (
    <a href="/">
      <p className={addressClass}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            id="place_outline_20"
            width={20}
            height={20}
          >
            <g fill="none" fillRule="evenodd">
              <path d="M0 0h20v20H0z" opacity=".4"></path>
              <path
                fill="currentColor"
                fillRule="nonzero"
                d="M10 1c4.148 0 7.5 3.433 7.5 7.5 0 2.85-1.843 6.172-5.435 10.095a2.8 2.8 0 0 1-4.13 0C4.343 14.672 2.5 11.35 2.5 8.5 2.5 4.433 5.852 1 10 1m0 1.5c-3.382 0-6 2.825-6 6q0 3.574 5.041 9.082a1.3 1.3 0 0 0 1.918 0Q15.999 12.075 16 8.5c0-3.175-2.618-6-6-6M10 5a3.5 3.5 0 1 1-.001 7.001A3.5 3.5 0 0 1 10 5m0 1.5a2 2 0 1 0 .001 4.001A2 2 0 0 0 10 6.5"
              ></path>
            </g>
          </svg>
          Севастополь, МЦ “DOMINO” (б-р Гидронавтов, 60, 1 эт.)
        </span>
      </p>
    </a>
  );
};

export default Address;

import { FC } from 'react';

import IIcon from 'src/interfaces/icon.interface';

const pencil: FC<IIcon> = ({ className, height, width }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className ? className : ''}
      fill="#000000"
      viewBox="0 0 256 256"
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
      transform="matrix(1, 0, 0, -1, 0, 0)"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {' '}
        <path d="M198.71,57.28906A99.99968,99.99968,0,1,0,57.29,198.71094,99.99968,99.99968,0,1,0,198.71,57.28906ZM104.71313,132h46.57374l17.28344,37.44739A27.96132,27.96132,0,0,0,128,177.595a27.96132,27.96132,0,0,0-40.57031-8.14764Zm3.69239-8L128,81.54541,147.59448,124ZM132,192a20,20,0,0,1,40,0v16.82654a91.31453,91.31453,0,0,1-40,11.07611Zm-48,0a20,20,0,0,1,40,0v27.90265a91.31453,91.31453,0,0,1-40-11.07611Zm109.05371,1.05371A92.99269,92.99269,0,0,1,180,203.89941V176a4.00605,4.00605,0,0,0-.36816-1.67627l-48-104a4,4,0,0,0-7.26368,0l-48,104A4.00605,4.00605,0,0,0,76,176v27.89941a92.99269,92.99269,0,0,1-13.05371-10.8457,92,92,0,1,1,130.10742,0Z" />{' '}
      </g>
    </svg>
  );
};

export default pencil;

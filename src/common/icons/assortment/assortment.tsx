import { FC } from 'react';

import IIcon from 'src/interfaces/icon.interface';

const assortment: FC<IIcon> = ({ height, width }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="5 5 22 22"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 12h4v-4h-4v4zM8 18h4v-4h-4v4zM8 24h4v-4h-4v4zM14 8v4h10v-4h-10zM14 18h10v-4h-10v4zM14 24h10v-4h-10v4z"></path>
    </svg>
  );
};

export default assortment;

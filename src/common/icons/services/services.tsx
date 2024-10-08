import { FC } from 'react';

import IIcon from 'src/interfaces/icon.interface';

const services: FC<IIcon> = ({ height, width }) => {
  return (
    <svg
      fill="#000000"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M2,14H5V11H2Zm9,0h3V11H11ZM2,5H5V2H2Zm9-3V5h3V2ZM6.5,5h3V2h-3Zm0,9h3V11h-3ZM11,9.5h3v-3H11Zm-4.5,0h3v-3h-3ZM2,9.5H5v-3H2Z" />
      </g>
    </svg>
  );
};

export default services;

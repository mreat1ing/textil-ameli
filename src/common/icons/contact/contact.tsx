import { FC } from 'react';

import IIcon from 'src/interfaces/icon.interface';

const contact: FC<IIcon> = ({ fill, height, width }) => {
  return (
    <svg
      fill={fill}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20,1H4A1,1,0,0,0,3,2V22a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V2A1,1,0,0,0,20,1ZM19,21H5V3H19ZM9,8.5a3,3,0,1,1,3,3A3,3,0,0,1,9,8.5Zm-2,9a5,5,0,0,1,10,0,1,1,0,0,1-2,0,3,3,0,0,0-6,0,1,1,0,0,1-2,0Z" />
    </svg>
  );
};

export default contact;

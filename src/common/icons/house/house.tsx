import { FC } from 'react';

import IIcon from 'src/interfaces/icon.interface';

const house: FC<IIcon> = ({ className, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m12 5.634 6.6 4.4V19.1h-4.35V13h-4.5v6.1H5.4v-9.066l6.6-4.4ZM9.75 21.5H3V8.75l9-6 9 6V21.5H9.75Z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default house;

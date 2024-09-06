import { FC } from 'react';

import IIcon from 'src/interfaces/icon.interface';

const consultation: FC<IIcon> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="-7 -10 60 60"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      stroke="#000000"
      strokeWidth="0.9600000000000002"
    >
      <g id="SVGRepo_iconCarrier">
        <path
          id="consultation"
          d="M440.618,340.924A.994.994,0,0,1,440,340V308a5.005,5.005,0,0,1,5-5h1v-1a5.005,5.005,0,0,1,5-5h32a5.005,5.005,0,0,1,5,5v22a5.005,5.005,0,0,1-5,5h-1v1a5.005,5.005,0,0,1-5,5H447.414l-5.707,5.707A.994.994,0,0,1,441,341,.981.981,0,0,1,440.618,340.924ZM442,308v29.586l4.293-4.292A1,1,0,0,1,447,333h30a3,3,0,0,0,3-3V308a3,3,0,0,0-3-3H445A3,3,0,0,0,442,308Zm5-6v1h30a5.005,5.005,0,0,1,5,5v20h1a4,4,0,0,0,4-4V302a4,4,0,0,0-4-4H451A4,4,0,0,0,447,302Zm4,21a1,1,0,0,1,0-2h20a1,1,0,0,1,0,2Zm0-6a1,1,0,1,1,0-2h20a1,1,0,0,1,0,2Z"
          transform="translate(-440 -297)"
          fill="#000000"
        />
      </g>
    </svg>
  );
};

export default consultation;

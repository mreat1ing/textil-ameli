import { FC } from 'react';

import IIcon from 'src/interfaces/icon.interface';

const paperPlane: FC<IIcon> = ({ className, height, width }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className ? className : ''}
      viewBox="0 0 24.00 24.00"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#ffffff"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {' '}
        <title>paper-plane</title> <desc>Created with sketchtool.</desc>{' '}
        <g
          id="web-app"
          strokeWidth="0.00024000000000000003"
          fill="none"
          fillRule="evenodd"
        >
          {' '}
          <g id="paper-plane" fill="#ffffff" fillRule="nonzero">
            {' '}
            <path
              d="M13.7612096,12.010246 L3.00114069,10.9260828 L3.00000002,4.07390726 C2.9999013,3.48090338 3.4805459,3.00009873 4.07354978,3.00000001 C4.24030125,2.99997226 4.40476746,3.03878301 4.55391451,3.11335654 L20.4062223,11.0395104 C20.9366211,11.3047098 21.1516077,11.9496696 20.8864083,12.4800684 C20.78252,12.6878448 20.6140494,12.8563254 20.4062791,12.960226 L4.55631145,20.8863826 C4.02592835,21.1516134 3.38095585,20.936665 3.11572505,20.4062819 C3.04118163,20.2572172 3.00236221,20.092846 3.0023401,19.9261816 L3.00143069,13.0735399 L13.7612096,12.010246 Z"
              id="Shape"
            >
              {' '}
            </path>{' '}
          </g>{' '}
        </g>{' '}
      </g>
    </svg>
  );
};

export default paperPlane;

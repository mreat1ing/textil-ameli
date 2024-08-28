import { FC } from 'react';

import IIcon from 'src/interfaces/icon.interface';
const calculator: FC<IIcon> = ({ className, height, width }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className ? className : ''}
      fill="#000000"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-10 -10 80 80"
    >
      <g>
        <path
          d="M21,14h-5V9c0-0.553-0.448-1-1-1s-1,0.447-1,1v5H9c-0.552,0-1,0.447-1,1s0.448,1,1,1h5v5c0,0.553,0.448,1,1,1s1-0.447,1-1
       v-5h5c0.552,0,1-0.447,1-1S21.552,14,21,14z"
        />
        <path d="M49,14H37c-0.552,0-1,0.447-1,1s0.448,1,1,1h12c0.552,0,1-0.447,1-1S49.552,14,49,14z" />
        <path d="M30,0h-2H0v28v2v28h28h2h28V30v-2V0H30z M2,2h26v26H2V2z M2,56V30h26v26H2z M56,56H30V30h26V56z M30,28V2h26v26H30z" />
        <path d="M37,47h12c0.552,0,1-0.447,1-1s-0.448-1-1-1H37c-0.552,0-1,0.447-1,1S36.448,47,37,47z" />
        <path d="M37,41h12c0.552,0,1-0.447,1-1s-0.448-1-1-1H37c-0.552,0-1,0.447-1,1S36.448,41,37,41z" />
        <path
          d="M20.707,37.293c-0.391-0.391-1.023-0.391-1.414,0L15,41.586l-4.293-4.293c-0.391-0.391-1.023-0.391-1.414,0
       s-0.391,1.023,0,1.414L13.586,43l-4.293,4.293c-0.391,0.391-0.391,1.023,0,1.414C9.488,48.902,9.744,49,10,49
       s0.512-0.098,0.707-0.293L15,44.414l4.293,4.293C19.488,48.902,19.744,49,20,49s0.512-0.098,0.707-0.293
       c0.391-0.391,0.391-1.023,0-1.414L16.414,43l4.293-4.293C21.098,38.316,21.098,37.684,20.707,37.293z"
        />
      </g>
    </svg>
  );
};

export default calculator;

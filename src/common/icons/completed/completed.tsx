import { FC } from 'react';

import IIcon from 'src/interfaces/icon.interface';

const completed: FC<IIcon> = ({ className, fill, height, width }) => {
  return (
    <svg
      className={className}
      fill={fill}
      width={width}
      height={height}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 220"
    >
      <path
        d="M194,133.48V199H34V39h119.25l32.09-32H2v224h224V101.57L194,133.48z M114.109,168.111l-60.048-60.048l22.627-22.627
   l37.453,37.452L235.404,2.007L258,24.667L114.109,168.111z"
      />
    </svg>
  );
};

export default completed;

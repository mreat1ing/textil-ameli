import { FC, useRef } from 'react';

import { ReactComponent as Phone } from 'src/assets/icons/phone.svg';

import './Number.scss';

interface INumber {
  value: string;
  className?: string;
  width?: string;
  height?: string;
  color?: string;
  hover?: string;
}

const Number: FC<INumber> = ({
  value,
  className,
  height,
  width,
  color,
  hover,
}) => {
  const iconRef = useRef<SVGSVGElement>(null);
  const stripedValue = value.replaceAll(' ', '');
  const numberClass = 'number__phone' + (className ? ' ' + className : '');

  const handleOver = () => {
    if (iconRef.current && hover) {
      iconRef.current.style.fill = hover;
    }
  };

  const handleOut = () => {
    if (iconRef.current && color) {
      iconRef.current.style.fill = color;
    }
  };

  return (
    <div className="number">
      <a href={`tel:${stripedValue}`} style={{}}>
        <Phone ref={iconRef} width={width} height={height} fill={color} />
        <span
          className={numberClass}
          onMouseOver={handleOver}
          onMouseOut={handleOut}
        >
          {value}
        </span>
      </a>
    </div>
  );
};

export default Number;

import { FC } from 'react';

import './YMap.scss';

interface IMap {
  className?: string;
}

const YMap: FC<IMap> = ({ className }) => {
  return (
    <iframe
      className={`map${className ? ' ' + className : ''}`}
      src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae7085e432aba851ddee287ae6408e607f4facd57fdf8f8c75fe76795e3150e89&amp;source=constructor"
      title="amelie"
    />
  );
};

export default YMap;

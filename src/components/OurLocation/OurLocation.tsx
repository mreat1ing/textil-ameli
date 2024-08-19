import { FC } from 'react';

import './OurLocation.scss';
import Address from 'src/ui/address';
import Instagram from 'src/ui/instagram';

const OurLocation: FC = () => {
  return (
    <div className="our-location">
      <div className="our-location__studio">
        <h4 className="our-location__title">Загляните в нашу студию</h4>
        <Address className="our-location__address" />
        <Instagram
          className="our-location__instagram"
          description="пишите в direct"
        />
      </div>
      <iframe
        className="our-location__map"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae7085e432aba851ddee287ae6408e607f4facd57fdf8f8c75fe76795e3150e89&amp;source=constructor"
        height="547"
        title="amelie"
      />
    </div>
  );
};

export default OurLocation;

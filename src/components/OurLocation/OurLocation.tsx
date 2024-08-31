import { FC } from 'react';

import './OurLocation.scss';
import Address from 'src/ui/address';
import Instagram from 'src/ui/instagram';
import YMap from 'src/common/YMap';

const OurLocation: FC = () => {
  return (
    <div className="our-location">
      <div className="our-location__studio">
        <h4 className="our-location__title">Загляните в нашу студию</h4>
        <Address className="our-location__address" />
        <Instagram
          className="our-location__instagram"
          description="пишите в direct"
          width="35"
          height="35"
        />
      </div>
      <YMap />
    </div>
  );
};

export default OurLocation;

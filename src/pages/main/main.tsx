import { FC } from 'react';

import AboutCompany from 'src/components/AboutCompany';
import BgVideo from 'src/components/BgVideo';
import Order from 'src/components/Order';

const Main: FC = () => {
  return (
    <>
      <BgVideo />
      <AboutCompany />
      <Order />
    </>
  );
};

export default Main;

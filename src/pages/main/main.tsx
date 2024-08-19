import { FC } from 'react';

import AboutCompany from 'src/components/AboutCompany';
import BgVideo from 'src/components/BgVideo';
import CompletedOrders from 'src/components/CompletedOrders';
import Order from 'src/components/Order';

const Main: FC = () => {
  return (
    <>
      <BgVideo />
      <AboutCompany />
      <Order />
      <CompletedOrders />
    </>
  );
};

export default Main;

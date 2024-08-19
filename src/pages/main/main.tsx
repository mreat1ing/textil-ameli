import { FC } from 'react';

import AboutCompany from 'src/components/AboutCompany';
import BgVideo from 'src/components/BgVideo';
import CompletedOrders from 'src/components/CompletedOrders';
import ContactUs from 'src/components/ContactUs';
import Order from 'src/components/Order';

const Main: FC = () => {
  return (
    <>
      <BgVideo />
      <AboutCompany />
      <Order />
      <CompletedOrders />
      <ContactUs />
    </>
  );
};

export default Main;

import { FC } from 'react';

import AboutCompany from 'src/components/AboutCompany';
import TopBlock from 'src/components/TopBlock';
import CompletedOrders from 'src/components/CompletedOrders';
import ContactUs from 'src/common/ContactUs';
import Order from 'src/components/Order';
import OurLocation from 'src/components/OurLocation';

const Main: FC = () => {
  return (
    <>
      <TopBlock />
      <AboutCompany />
      <Order />
      <CompletedOrders />
      <ContactUs />
      <OurLocation />
    </>
  );
};

export default Main;

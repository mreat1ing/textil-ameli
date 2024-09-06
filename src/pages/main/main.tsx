import { FC, useEffect } from 'react';

import AboutCompany from 'src/components/AboutCompany';
import TopBlock from 'src/components/TopBlock';
import CompletedOrders from 'src/components/CompletedOrders';
import ContactUs from 'src/common/ContactUs';
import Order from 'src/components/Order';
import OurLocation from 'src/components/OurLocation';

const Main: FC = () => {
  useEffect(() => {
    document.title = 'Амели | Пошив штор в Севастополе';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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

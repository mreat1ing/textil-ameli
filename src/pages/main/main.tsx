import { FC, useEffect } from 'react';

import AboutCompany from 'src/components/AboutCompany';
import TopBlock from 'src/components/TopBlock';
import CompletedOrders from 'src/components/CompletedOrders';
import ContactUs from 'src/common/ContactUs';
import Order from 'src/components/Order';
import OurLocation from 'src/components/OurLocation';
import AboutCompanyBottom from 'src/common/AboutCompanyBottom';

const Main: FC = () => {
  useEffect(() => {
    document.title = 'Амели | Пошив штор в Севастополе';
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <TopBlock />
      <AboutCompany />
      <AboutCompanyBottom />
      <Order />
      <CompletedOrders />
      <ContactUs />
      <OurLocation />
    </>
  );
};

export default Main;

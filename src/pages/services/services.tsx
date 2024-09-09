import { FC, useEffect } from 'react';

import ServicesCards from 'src/common/ServicesCards';

const Services: FC = () => {
  useEffect(() => {
    document.title = 'Услуги';
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <ServicesCards />
    </>
  );
};

export default Services;

import { FC, useEffect } from 'react';

import ServicesPageContainer from 'src/common/ServicesPageContainer';

const ServicesCardLayout: FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <ServicesPageContainer />
    </>
  );
};

export default ServicesCardLayout;

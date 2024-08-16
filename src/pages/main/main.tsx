import { FC } from 'react';

import AboutCompany from 'src/components/AboutCompany';
import BgVideo from 'src/components/BgVideo';

const Main: FC = () => {
  return (
    <>
      <BgVideo />
      <AboutCompany />
    </>
  );
};

export default Main;

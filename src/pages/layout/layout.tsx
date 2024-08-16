import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import BgVideo from 'src/components/BgVideo';
import Header from 'src/components/Header';
import Navigation from 'src/components/Navigation';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Navigation />
      <BgVideo />
      <Outlet />
    </>
  );
};

export default Layout;

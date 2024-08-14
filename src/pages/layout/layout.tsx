import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'src/components/Header';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;

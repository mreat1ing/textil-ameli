import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Navigation from 'src/components/Navigation';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

import { FC, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import ScrollOnTopButton from 'src/common/ScrollOnTopButton';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Navigation from 'src/components/Navigation';

const Layout: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = pathname.split('/')[1];
    if (page === 'assortment') {
      document.title = 'Ассортимент';
    }
  }, [pathname]);

  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollOnTopButton />
    </>
  );
};

export default Layout;

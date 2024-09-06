import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from 'react-router-dom';
import { FC, useEffect } from 'react';

import './App.scss';
import Layout from 'src/pages/layout';
import Main from 'src/pages/main';
import AboutUs from 'src/pages/aboutUs';
import OurWorks from 'src/pages/ourWorks';
import Services from 'src/pages/services';
import Contacts from 'src/pages/contacts';
import Error from 'src/pages/error';
import ServicesCardLayout from 'src/pages/servicesCardLayout';
import Assortment from 'src/pages/assortment';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />}></Route>
      <Route path="/services/:id" element={<ServicesCardLayout />} />
      <Route path="/assortment" element={<Assortment />} />
      <Route path="/our-works" element={<OurWorks />} />
      <Route path="/contacts" element={<Contacts />} />
    </Route>
  )
);

const App: FC = () => {
  useEffect(() => {
    document
      .getElementById('root')
      ?.setAttribute('style', 'scroll-behavior: auto;');
  }, []);

  return <RouterProvider router={router} />;
};

export default App;

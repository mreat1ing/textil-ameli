import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from 'react-router-dom';
import { FC } from 'react';

import './App.scss';
import Layout from 'src/pages/layout';
import Main from 'src/pages/main';
import AboutUs from 'src/pages/aboutUs';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<h2>services</h2>} />
      <Route path="/assortment" element={<h2>assortment</h2>} />
      <Route path="/our-works" element={<h2>Our works</h2>} />
      <Route path="/contacts" element={<h2>contacts</h2>} />
    </Route>
  )
);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;

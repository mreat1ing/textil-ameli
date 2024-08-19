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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<h2>About</h2>} />
      <Route path="/our-works" element={<h2>Our works</h2>} />
    </Route>
  )
);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;

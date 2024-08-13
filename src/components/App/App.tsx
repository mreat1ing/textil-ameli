import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from 'react-router-dom';
import { FC } from 'react';

import './App.scss';
import Layout from 'src/pages/layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<div></div>} />
    </Route>
  )
);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import App from 'src/components/App';

import { imagesReducer } from './store';

import './index.css';
import './variables.scss';
import './normalize.css';

const store = configureStore({ reducer: imagesReducer });

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

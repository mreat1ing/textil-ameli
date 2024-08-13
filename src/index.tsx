import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from 'src/components/App';

import './index.css';
import './variables.scss';
import './normalize.css';

// test line

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

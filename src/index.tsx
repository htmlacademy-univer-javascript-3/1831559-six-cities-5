import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import { OFFERS } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offerCount={OFFERS.length} offers={OFFERS} />
  </React.StrictMode>
);

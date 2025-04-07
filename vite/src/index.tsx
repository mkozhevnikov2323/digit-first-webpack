import * as React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/app/App';
import { AppProviders } from '@/app/AppProvider';

const root = document.getElementById('root');
if (!root) throw new Error('No root element found');

createRoot(root).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
);

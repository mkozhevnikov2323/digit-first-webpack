import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import * as React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/app/App';

const root = document.getElementById('root');
if (!root) throw new Error('No root element found');

createRoot(root).render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);

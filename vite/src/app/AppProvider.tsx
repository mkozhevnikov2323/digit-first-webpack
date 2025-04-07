import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import React from 'react';

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
};

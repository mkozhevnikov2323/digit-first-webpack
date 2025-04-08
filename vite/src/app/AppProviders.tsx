import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { MantineProvider } from '@mantine/core';
import React from 'react';

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <MantineProvider>{children}</MantineProvider>
    </ChakraProvider>
  );
};

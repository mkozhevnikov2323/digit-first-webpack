import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { MantineProvider } from '@mantine/core';
import { Theme as RadixThemeProvider } from '@radix-ui/themes';
import React from 'react';

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <MantineProvider>
        <RadixThemeProvider>{children}</RadixThemeProvider>
      </MantineProvider>
    </ChakraProvider>
  );
};

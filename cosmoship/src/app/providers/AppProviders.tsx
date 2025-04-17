import React from 'react';

import { AuthProvider } from '@/features/Authorization';
import { ThemeWrapper } from '@/widgets/ThemeButton';

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeWrapper>{children}</ThemeWrapper>
    </AuthProvider>
  );
};

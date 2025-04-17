import React from 'react';

import { LoginForm } from '@/features/Authorization';
import { Navbar } from '@/widgets/Navbar';

export const App: React.FC = (): React.ReactNode => {
  return (
    <div>
      <Navbar />
      <LoginForm />
    </div>
  );
};

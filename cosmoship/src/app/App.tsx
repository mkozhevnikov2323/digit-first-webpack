import React from 'react';

import { LoginForm } from '@/features/Authorization';

export const App: React.FC = (): React.ReactNode => {
  return (
    <div>
      <h2>Cosmoship market</h2>
      <LoginForm />
    </div>
  );
};

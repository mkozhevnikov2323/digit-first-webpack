import React from 'react';

import { Button } from '@/components/Button';
import { Tabs } from '@/components/Tabs';

export const App: React.FC = (): React.ReactNode => {
  return (
    <div>
      <Tabs />
      <Button />
    </div>
  );
};

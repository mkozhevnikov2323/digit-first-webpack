import React from 'react';

import { Button } from '@/components/Button';
import { Rating } from '@/components/Rating';
import { Tabs } from '@/components/Tabs';

export const App: React.FC = (): React.ReactNode => {
  return (
    <div>
      <Tabs />
      <Button />
      <Rating />
    </div>
  );
};

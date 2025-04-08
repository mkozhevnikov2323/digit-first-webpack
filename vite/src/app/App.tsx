import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import React from 'react';

import { Button } from '@/components/Button';
import { Calendar } from '@/components/Calendar';
import { Rating } from '@/components/Rating';
import { Tabs } from '@/components/Tabs';

export const App: React.FC = (): React.ReactNode => {
  return (
    <div>
      <Tabs />
      <Button />
      <Rating />
      <Calendar />
    </div>
  );
};

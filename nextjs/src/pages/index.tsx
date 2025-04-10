import '../app/globals.css';

import React from 'react';

import { Card } from '@/components/Card';
import { Hello } from '@/components/Hello';

import { css } from '../../styled-system/css';

export default function Home() {
  return (
    <main className={css({ fontSize: '2xl', p: '20px' })}>
      <h1>Welcome to Next.js with Aliases!</h1>
      <Hello />
      <Card />
    </main>
  );
}

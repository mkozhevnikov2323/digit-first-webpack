import React from 'react';

import { testFnGetSum } from '@/app/components/test';

export default function Index() {
  const a = 345;
  const b = 123;
  const sum = testFnGetSum(a, b);

  return (
    <div>
      <h1>Hello from Remix!</h1>
      <h2>Sum a + b = {sum}</h2>
    </div>
  );
}

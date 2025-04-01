import { TEST_VARS } from '@/constants';

const testFn = (a: number, b: number) => {
  const test_var = 'test';
  return a + b;
};

console.log('Test result: ', testFn(TEST_VARS.A, TEST_VARS.B));

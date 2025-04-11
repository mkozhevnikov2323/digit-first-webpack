import React from 'react';

import { button } from './button';

export const Button = () => {
  return (
    <button className={button({ visual: 'solid', size: 'lg' })}>
      Click Me
    </button>
  );
};

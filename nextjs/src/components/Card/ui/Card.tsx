import React from 'react';

import { Button } from '@/components/Button';

import cls from './Card.module.css';

export const Card = () => {
  return (
    <div className={cls.card}>
      <h2 className={cls.title}>Card component</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
        quas.
      </p>

      <Button />
    </div>
  );
};

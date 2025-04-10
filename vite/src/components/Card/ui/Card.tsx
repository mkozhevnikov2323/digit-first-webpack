import React, { useState } from 'react';

import { ButtonEmotion } from '@/components/ButtonEmotion';

export const Card = () => {
  const [color, setColor] = useState('primary');
  const toggleColor = () =>
    setColor((prev) => (prev === 'primary' ? 'outline' : 'primary'));

  return (
    <div
      className="shadow bg-gray-100 m-4 p-4"
      style={{ padding: '20px' }}
    >
      <h2 className="text-2xl font-semibold">Card component for 3.2</h2>
      <p className="pb-20">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, saepe.
      </p>
      <ButtonEmotion
        label={'Bitton with Emotion, click to toggle color'}
        onClick={toggleColor}
        color={color}
      />
    </div>
  );
};

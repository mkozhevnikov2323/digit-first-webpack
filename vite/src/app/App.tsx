import { Accordion } from '@chakra-ui/react';
import React from 'react';

export const App = () => {
  return (
    <Accordion.Root>
      <Accordion.Item>
        <Accordion.ItemTrigger />
        <Accordion.ItemContent />
      </Accordion.Item>
    </Accordion.Root>
  );
};

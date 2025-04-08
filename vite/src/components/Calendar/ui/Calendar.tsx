import { Container, Title } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import React, { useState } from 'react';

export function Calendar() {
  const [value, setValue] = useState<Date | null>(null);

  const demoProps = {
    bg: 'var(--mantine-color-blue-light)',
    h: 50,
    mt: 'md',
    mx: '0',
  };

  return (
    <Container
      px={0}
      size="xs"
      {...demoProps}
    >
      <Title order={3}>DatePicker from Mantine</Title>
      <DatePickerInput
        label="Pick date:"
        placeholder="Pick date"
        value={value}
        onChange={setValue}
      />
    </Container>
  );
}

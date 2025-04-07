import { Tabs } from '@chakra-ui/react';
import React from 'react';

export const AppTabs = () => {
  return (
    <>
      <h2>Tabs from Chakra v3</h2>
      <Tabs.Root>
        <Tabs.List>
          <Tabs.Trigger value="tab-1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab-2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab-3">Tab 3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab-1">Content Tab 1</Tabs.Content>
        <Tabs.Content value="tab-2">Content Tab 2</Tabs.Content>
        <Tabs.Content value="tab-3">Content Tab 3</Tabs.Content>
      </Tabs.Root>
    </>
  );
};

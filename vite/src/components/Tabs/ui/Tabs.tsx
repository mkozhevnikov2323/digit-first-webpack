import { Tabs } from '@chakra-ui/react';
import React from 'react';
import { LuFolder, LuSquareCheck, LuUser } from 'react-icons/lu';

export const AppTabs = () => {
  return (
    <>
      <h2>Tabs from Chakra v3</h2>
      <Tabs.Root
        lazyMount
        unmountOnExit
        defaultValue="tab-1"
        variant="plain"
      >
        <Tabs.List
          bg="bg.muted"
          rounded="l3"
          p="1"
        >
          <Tabs.Trigger value="tab-1">
            <LuUser />
            Members
          </Tabs.Trigger>
          <Tabs.Trigger value="tab-2">
            <LuFolder />
            Projects
          </Tabs.Trigger>
          <Tabs.Trigger value="tab-3">
            <LuSquareCheck />
            Settings
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab-1">Manage your team members</Tabs.Content>
        <Tabs.Content value="tab-2">Manage your projects</Tabs.Content>
        <Tabs.Content value="tab-3">
          Manage your tasks for freelancers
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
};

import {
  Box,
  Button,
  Dialog,
  Flex,
  Heading,
  Text,
  TextField,
} from '@radix-ui/themes';
import React from 'react';

export function AppModal() {
  return (
    <Box
      width="100%"
      maxWidth="500px"
      mt="80px"
      className="w-full max-w-md mt-20 mx-auto p-4 bg-white rounded-lg shadow"
    >
      <Heading>{`Modal Button from Radix + Tailwind`}</Heading>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button className="shadow bg-gray-800">Open modal</Button>
        </Dialog.Trigger>

        <Dialog.Content
          maxWidth="450px"
          className="bg-gray-800"
        >
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description
            size="2"
            mb="4"
          >
            Make changes to your profile.
          </Dialog.Description>

          <Flex
            direction="column"
            gap="3"
          >
            <label>
              <Text
                as="div"
                size="2"
                mb="1"
                weight="bold"
              >
                Name
              </Text>
              <TextField.Root
                defaultValue="Freja Johnsen"
                placeholder="Enter your full name"
              />
            </label>
            <label>
              <Text
                as="div"
                size="2"
                mb="1"
                weight="bold"
              >
                Email
              </Text>
              <TextField.Root
                defaultValue="freja@example.com"
                placeholder="Enter your email"
              />
            </label>
          </Flex>

          <Flex
            gap="3"
            mt="4"
            justify="end"
          >
            <Dialog.Close>
              <Button
                variant="soft"
                color="gray"
              >
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button>Save</Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </Box>
  );
}

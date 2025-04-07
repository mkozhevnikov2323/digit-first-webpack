import { Button, Typography } from 'antd';
import React from 'react';

const { Title } = Typography;

export const AppButton: React.FC = () => {
  const handleClick = () => console.log('Test click from Button Component');

  return (
    <>
      <Title level={2}>Button from Ant Design</Title>
      <Button
        type="primary"
        onClick={handleClick}
      >
        Click me
      </Button>
    </>
  );
};

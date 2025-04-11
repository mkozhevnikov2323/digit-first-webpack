/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

interface ButtonProps {
  label: string;
  color?: string;
  onClick?: () => void;
}

const primary = css`
  border: 2px solid white;
  border-radius: 4px;
  padding: 10px;
  background-color: lightgreen;
  color: #fff;
`;

const outline = css`
  border: 1px solid black;
`;

const StyledButton = styled.button`
  margin-top: 20px;
  border-radius: 4px;
  padding: 10px;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const ButtonEmotion: React.FC<ButtonProps> = ({
  label,
  color,
  onClick,
}) => {
  const getColor = (color: string) => (color === 'primary' ? primary : outline);

  return (
    <StyledButton
      onClick={onClick}
      css={() => getColor(color)}
    >
      {label}
    </StyledButton>
  );
};

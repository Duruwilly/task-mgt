import { ComponentProps } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ComponentProps<"button"> {
  variant?: 'primary' | 'secondary' | 'danger';
}

const StyledButton = styled.button<{variant?: string}>`
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }

   background-color: ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return '#007bff';
      case 'secondary':
        return '#6c757d';
      case 'danger':
        return '#dc3545';
      default:
        return '#007bff';
    }
  }};
`;

const Button = ({variant, ...props}: ButtonProps) => {
  return <StyledButton {...props} variant={variant} />;
};

export default Button;

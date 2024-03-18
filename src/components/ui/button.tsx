'use client';
import styled from 'styled-components';
import { theme } from '@/theme';

const Button = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white1};
  border: none;
  padding: 0.5rem 1rem;
  font-family: ${theme.fonts.body};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

export default Button;
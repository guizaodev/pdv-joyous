'use client';
import styled from 'styled-components';
import { theme } from '@/theme';

const Button = styled.button`
  background-color: ${(props) => props.color || theme.colors.main1};
  color: ${theme.colors.white1};
  border: none;
  padding: 0.5rem 1rem;
  font-family: ${theme.fonts.body};
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

export default Button;
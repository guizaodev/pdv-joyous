'use client';
import styled from 'styled-components';
import { theme } from '@/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: ${theme.colors.white2};
`;

export default Container;
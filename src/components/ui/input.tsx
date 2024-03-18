'use client';
import styled from 'styled-components';
import { theme } from '@/theme';

const Input = styled.input`
    padding: 0.5rem 1rem;
    font-family: ${theme.fonts.body};
    border: 1px solid ${theme.colors.black1};
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    width: 100%;
    `;

export default Input;
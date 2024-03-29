'use client';
import styled from 'styled-components';
import { theme } from '@/theme';

const Card = styled.div`
    background-color: ${theme.colors.white1};
    color: ${theme.colors.black1};
    padding: 1rem;
    margin: 2rem auto;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
    align-items: center;
    text-align: center;
    width: 500px;
    
    `;

export default Card;
'use client';
import styled from 'styled-components';
import { theme } from '@/theme';

export const ProductCard = styled.div`
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin: 1rem;
    background-color: ${theme.colors.white1};
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 180px;
    height: 294px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        transform: scale(1.05);
    }
    `;

export const ProductImage = styled.img`
    width: 160px;
    height: 163px;
`

export const ProductTitle = styled.h3`

`;

export const ProductPrice = styled.p`
    
`;

export const ProductSession = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    align-items: end;
    width: 100%;
`;

export const ProductSessionTitle = styled.div`
    width: 80%; 
    height: 100%; 
    color: ${theme.colors.black1}; 
    font-size: 30px; 
    font-family: Inter; 
    text-align: left;
    font-weight: 300; 
    word-wrap: break-word;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 80%;
  width: 80%;
`;
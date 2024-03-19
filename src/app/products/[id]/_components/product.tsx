'use client';
import styled from 'styled-components';
import { theme } from '@/theme';

export const ProductContainer = styled.div`
    background-color: ${theme.colors.white1};
    display: flex;
    color: ${theme.colors.black1};
    padding: 1rem;
    margin: 2rem auto;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
    align-items: flex-start;
    text-align: left;
    max-width: 850px;
    height: auto;
    flex-direction: row;
    flex-wrap: wrap;
`

export const ProductColumn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    height: 100%;
    width: 300px;

`

export const ProductCategory = styled.p`
    font-size: 13px;
    font-weight: 500;
    color: ${theme.colors.secondary2};
`

export const ProductDescription = styled.p`
    font-size: 13px;
    font-weight: 500;
    margin-top: 1rem;
`

export const ProductImage = styled.img`
    max-width: 300px;
    max-height: 300px;
    object-fit: contain;
`

export const ProductTitle = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin: 1rem 0;

    @media screen and (max-width: 370px){
        font-size: 1.3rem;
    }
`

export const ProductPrice = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin: 1rem 0;

    @media screen and (max-width: 370px){
        font-size: 1.3rem;
    }
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0rem 0rem 0rem 2rem;
    height: 100%;
    max-width: 850px;
`
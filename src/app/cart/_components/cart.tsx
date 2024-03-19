'use client';
import styled from 'styled-components';
import { theme } from '@/theme';

export const CartContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
`
export const CartColumn = styled.div`
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
    flex-direction: column;
`

export const CartItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid ${theme.colors.main1};
    margin-bottom: 1rem;
`

export const CartItemImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-right: 1rem;
`

export const CartItemTitle = styled.h3`
    margin: 1rem;
`

export const CartItemPrice = styled.p`
    margin: 1rem;
`

export const CartItemQuantity = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    margin: 1rem;
`
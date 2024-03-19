'use client';
import styled from 'styled-components';
import { theme } from '@/theme';

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
`;

export const FormGroup = styled.div`
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const FormLabel = styled.label`
    margin-bottom: 0.5rem;
    font-weight: bold;
`;

export const FormInput = styled.input`
    padding: 0.5rem;
    font-size: 1rem;
    background-color: ${theme.colors.white1};
    color: ${theme.colors.black1};
    border: 1px solid ${theme.colors.black1};
    border-radius: 0.5rem;
`;

export const FormSelector = styled.select`
    padding: 0.5rem;
    font-size: 1rem;
    background-color: ${theme.colors.white1};
    color: ${theme.colors.black1};
    border: 1px solid ${theme.colors.black1};
    border-radius: 0.5rem;
`;

export const FormButton = styled.button`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: ${(props) => props.disabled ? theme.colors.main2 : theme.colors.main1};
    color: ${theme.colors.white1};
    border: none;
    font-weight: 600;
    cursor: pointer;
`;
export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
`;
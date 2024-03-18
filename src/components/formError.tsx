import { theme } from '@/theme';
import { ExclamationTriangle } from '@styled-icons/bootstrap';
import styled from 'styled-components';

interface FormErrorProps {
    message?: string;
}

const FormErrorElement = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${theme.colors.warning4};
    color: ${theme.colors.warning1};
    padding: 10px;
    margin-bottom: 30px;
    border-radius: 5px;
    justify-content: flex-start;
    font-weight: 500;
    margin-top: 1rem;
`;

export const FormError = ({message}:FormErrorProps) => {
    if(!message) return null;
    return (
        <FormErrorElement>
            <ExclamationTriangle size={24} style={{marginRight: 15}}/>
            <span>{message}</span>
        </FormErrorElement>
    );
}
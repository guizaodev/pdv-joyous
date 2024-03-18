import { theme } from '@/theme';
import { CheckCircle } from '@styled-icons/bootstrap';
import styled from 'styled-components';

interface FormSuccessProps {
    message?: string;
}

const FormSuccessElement = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${theme.colors.success3};
    color: ${theme.colors.success4};
    padding: 10px;
    margin-bottom: 30px;
    border-radius: 5px;
    justify-content: flex-start;
    font-weight: 500;
    margin-top: 1rem;
`;

export const FormSuccess = ({message}:FormSuccessProps) => {
    if(!message) return null;
    return (
        <FormSuccessElement>
            <CheckCircle size={24} style={{marginRight: 15}}/>
            <span>{message}</span>
        </FormSuccessElement>
    );
}
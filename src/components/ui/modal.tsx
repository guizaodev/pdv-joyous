"use client";  
import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '@/theme';
import Button from './button';
import { XSquareFill } from '@styled-icons/bootstrap';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

interface ModalProps {
  children: React.ReactNode;
  ButtonText: string;
  ButtonColor?: string;
}

const Modal = ({children, ButtonText, ButtonColor}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <Button color={ButtonColor} onClick={openModal}>{ButtonText}</Button>
      {isOpen && (
        <ModalContainer>
          <ModalContent>
            <XSquareFill size={30} color={theme.colors.main1} onClick={closeModal}>Close Modal</XSquareFill>
            {children}
          </ModalContent>
        </ModalContainer>
      )}
    </div>
  );
};

export default Modal;

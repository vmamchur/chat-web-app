import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
`;

export const ModalContent = styled.div`
  max-width: 500px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  background-color: #464852;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  border-radius: inherit;
  background-color: #5a5c66;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
`;

export const ModalContainer = styled.div`
  padding: 20px 30px;
`;

export const ModalBody = styled.div`
  padding-top: 30px;
`;

export const CloseButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
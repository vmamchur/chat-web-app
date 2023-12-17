import { FC, ReactNode } from 'react';

import { IoCloseCircle } from 'react-icons/io5';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { closeModal } from '../../../redux/slices/modalsSlice';
import { ModalName } from '../../../types/Modal';
import Tabs from '../Tabs';
import {
  CloseButton,
  ModalContainer,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalTitle
} from './style';

interface Props {
  children: ReactNode;
  modalName: ModalName;
  headerTitle?: string;
  tabs?: string[];
  activeTab?: string;
  onSelectTab?: (tab: string) => void;
}

const Modal: FC<Props> = ({
  children,
  modalName,
  headerTitle,
  tabs,
  activeTab,
  onSelectTab
}) => {
  const isOpen = useAppSelector((state) => state.modals[modalName]);
  const dispatch = useAppDispatch();

  const handleClose = () => dispatch(closeModal(modalName));

  const hasTabs = tabs?.length && activeTab && onSelectTab;

  return (
    <>
      {isOpen && (
        <ModalOverlay onClick={handleClose}>
          <ModalContent onClick={(event) => event.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>{headerTitle}</ModalTitle>
              <CloseButton onClick={handleClose}>
                <IoCloseCircle size={32} color="#e1e1e1" />
              </CloseButton>
            </ModalHeader>

            <ModalContainer>
              {hasTabs && (
                <Tabs
                  tabs={tabs}
                  activeTab={activeTab}
                  onSelectTab={onSelectTab}
                />
              )}

              <ModalBody>
                {children}
              </ModalBody>
            </ModalContainer>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Modal;
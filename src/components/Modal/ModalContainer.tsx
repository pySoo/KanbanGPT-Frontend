import { useContext } from 'react';
import ReactDOM from 'react-dom';

import { ModalDispatchContext, ModalStateContext } from '@/contexts/Modal/ModalContext';
import { ModalStateType } from '@/types/modal';

import BaseModal from './BaseModal';
import { MODAL_COMPONENTS } from './ModalComponents';

export default function ModalContainer() {
  const modalList = useContext(ModalStateContext);
  const { closeModal } = useContext(ModalDispatchContext);

  if (!modalList.length) {
    return null;
  }

  const modalContainer = document.getElementById('modal') as HTMLElement;
  const renderModal = modalList.map(({ type, props }: ModalStateType, index) => {
    const ModalComponent = MODAL_COMPONENTS[type];
    return (
      <BaseModal key={type} type={type} {...props} onClose={closeModal}>
        <ModalComponent />
      </BaseModal>
    );
  });
  return ReactDOM.createPortal(<>{renderModal}</>, modalContainer);
}

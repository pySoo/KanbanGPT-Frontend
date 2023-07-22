import { ReactNode, useState } from 'react';

import { ModalStateType } from '@/types/modal';

import { ModalDispatchContext, ModalStateContext } from './ModalContext';

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [modalList, setModalList] = useState<ModalStateType[]>([]);

  const openModal = ({ type, props }: ModalStateType) => {
    setModalList((modals) => {
      return [...modals, { type, props }];
    });
  };

  const closeModal = ({ type }: ModalStateType) => {
    setModalList((modals) => {
      return modals.filter((modal) => modal.type !== type);
    });
  };

  return (
    <ModalDispatchContext.Provider value={{ openModal, closeModal }}>
      <ModalStateContext.Provider value={modalList}>{children}</ModalStateContext.Provider>;
    </ModalDispatchContext.Provider>
  );
}

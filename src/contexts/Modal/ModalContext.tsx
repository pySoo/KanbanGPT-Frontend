import { createContext } from 'react';

import { ModalDispatchType, ModalStateType } from '@/types/modal';

const defaultModalDispatchData: ModalDispatchType = {
  openModal: () => {},
  closeModal: () => {},
};

export const ModalStateContext = createContext<ModalStateType[]>([]);
export const ModalDispatchContext = createContext<ModalDispatchType>(defaultModalDispatchData);

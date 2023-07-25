import { atom } from 'recoil';

import { ModalStateType } from '@/types/modal';

export const modalAtom = atom<ModalStateType[]>({
  key: 'modalState',
  default: [],
});

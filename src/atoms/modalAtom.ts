import { atom } from 'recoil';

import { localStorageKey } from '@/constants/localStorage';
import { ModalStateType } from '@/types/modal';
import { localStorageEffect } from '@/utils/localStorage';

export const modalAtom = atom<ModalStateType[]>({
  key: 'modalState',
  default: [],
  effects: [localStorageEffect<ModalStateType[]>(localStorageKey.modal)],
});

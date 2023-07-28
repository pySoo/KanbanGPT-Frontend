import { atom } from 'recoil';

import { localStorageKey } from '@/constants/localStorage';
import { GptStateType } from '@/types/gpt';
import { localStorageEffect } from '@/utils/localStorage';

const defaultData: GptStateType = {
  key: '',
  isConneted: false,
};

export const gptAtom = atom<GptStateType>({
  key: 'gptState',
  default: defaultData,
  effects: [localStorageEffect<GptStateType>(localStorageKey.gpt)],
});

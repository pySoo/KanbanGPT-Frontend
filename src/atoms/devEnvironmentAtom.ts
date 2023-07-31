import { atom } from 'recoil';

import { localStorageKey } from '@/constants/localStorage';
import { devEnvironmentStateType } from '@/types/devEnvironment';
import { localStorageEffect } from '@/utils/localStorage';

export const devEnvironmentAtom = atom<devEnvironmentStateType>({
  key: 'devState',
  default: {},
  effects: [localStorageEffect<devEnvironmentStateType>(localStorageKey.devEnvironment)],
});

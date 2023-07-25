import { atom } from 'recoil';

import { localStorageKey } from '@/constants/localStorage';
import { RequirementStateType } from '@/types/requirement';
import { localStorageEffect } from '@/utils/localStorage';

export const requirementAtom = atom<RequirementStateType[]>({
  key: 'requirementState',
  default: [],
  effects: [localStorageEffect<RequirementStateType[]>(localStorageKey.requirement)],
});

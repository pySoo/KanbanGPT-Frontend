import { atom } from 'recoil';

import { localStorageKey } from '@/constants/localStorage';
import { IssueStateType } from '@/types/issue';
import { localStorageEffect } from '@/utils/localStorage';

export const issueAtom = atom<IssueStateType[]>({
  key: 'issueState',
  default: [],
  effects: [localStorageEffect<IssueStateType[]>(localStorageKey.issue)],
});

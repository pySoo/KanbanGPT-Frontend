import { atom } from 'recoil';

import { issueData } from '@/data/issue';
import { IssueStateType } from '@/types/issue';

export const issueAtom = atom<IssueStateType[]>({
  key: 'issueState',
  default: issueData,
});

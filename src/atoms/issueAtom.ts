import { atom } from 'recoil';

import { localStorageKey } from '@/constants/localStorage';
import { IssueDataType, IssueStatusType } from '@/types/issue';
import { localStorageEffect } from '@/utils/localStorage';

const defaultIssueData: IssueDataType = {
  [IssueStatusType.TODO]: [],
  [IssueStatusType.IN_PROGRESS]: [],
  [IssueStatusType.DONE]: [],
};

export const issueAtom = atom<IssueDataType>({
  key: 'issueState',
  default: defaultIssueData,
  effects: [localStorageEffect<IssueDataType>(localStorageKey.issue)],
});

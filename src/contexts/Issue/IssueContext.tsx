import { createContext } from 'react';

import { issueData } from '@/data/issue';
import { IssueDispatchType, IssueStateType } from '@/types/issue';

const defaultIssueData: IssueStateType[] = issueData;

const defaultIssueDispatchData: IssueDispatchType = {
  updateIssue: () => {},
};

export const IssueStateContext = createContext<IssueStateType[]>(defaultIssueData);
export const IssueDispatchContext = createContext(defaultIssueDispatchData);

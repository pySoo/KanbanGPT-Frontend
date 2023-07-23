import { ReactNode, useState } from 'react';

import { issueData } from '@/data/issue';
import { IssueStateType } from '@/types/issue';

import { IssueDispatchContext, IssueStateContext } from './IssueContext';

export default function IssueProvider({ children }: { children: ReactNode }) {
  const [issueList, setIssueList] = useState<IssueStateType[]>(issueData);

  const updateIssue = (updatedIssue: IssueStateType[]) => {
    setIssueList(updatedIssue);
  };

  return (
    <IssueDispatchContext.Provider value={{ updateIssue }}>
      <IssueStateContext.Provider value={issueList}>{children}</IssueStateContext.Provider>;
    </IssueDispatchContext.Provider>
  );
}

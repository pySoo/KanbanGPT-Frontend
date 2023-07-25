import { useRecoilState } from 'recoil';

import { issueAtom } from '@/atoms/issueAtom';
import { createIssueProps, IssueStateType, updateIssueProps } from '@/types/issue';
import { createUniqueId } from '@/utils/uniqueId';

export function useIssue() {
  const [issueList, setIssueList] = useRecoilState<IssueStateType[]>(issueAtom);

  const createIssue = ({ status, title }: createIssueProps) => {
    const id = createUniqueId();
    setIssueList((prevIssue) => [
      ...prevIssue,
      {
        status,
        id,
        title,
      },
    ]);
  };

  const updateIssue = ({ id, status, title }: updateIssueProps) => {
    const updatedIssue = issueList.map((issue) =>
      issue.id === id
        ? {
            ...issue,
            status: status ?? issue.status,
            title: title ?? issue.title,
          }
        : issue,
    );
    setIssueList(updatedIssue);
  };

  const deleteIssue = ({ id }: { id: string }) => {
    setIssueList(issueList.filter((issue) => issue.id !== id));
  };

  const getIssueById = ({ id }: { id: string }) => {
    const filteredIssue = issueList.filter((issue) => issue.id === id);
    return filteredIssue[0];
  };

  return { issueList, createIssue, updateIssue, deleteIssue, getIssueById };
}

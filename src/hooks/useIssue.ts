import { produce } from 'immer';
import { useRecoilState } from 'recoil';

import { issueAtom } from '@/atoms/issueAtom';
import { createIssueProps, IssueDataType, IssueStatusType, updateIssueProps } from '@/types/issue';
import { createUniqueId } from '@/utils/uniqueId';

export function useIssue() {
  const [issueData, setIssueData] = useRecoilState<IssueDataType>(issueAtom);

  const createIssue = ({ status, title }: createIssueProps) => {
    const id = createUniqueId();
    setIssueData(
      produce(issueData, (draftIssue) => {
        draftIssue[status].push({ status, id, title });
      }),
    );
  };

  const updateIssue = ({ id, status, title }: updateIssueProps) => {
    setIssueData(
      produce(issueData, (draftIssue) => {
        const issueIndex = draftIssue[status].findIndex((issue) => issue.id === id);
        if (issueIndex > -1) {
          draftIssue[status][issueIndex].title = title;
        }
      }),
    );
  };

  const deleteIssue = ({ id, status }: { id: string; status: IssueStatusType }) => {
    setIssueData(
      produce(issueData, (draftIssue) => {
        const issueIndex = draftIssue[status].findIndex((issue) => issue.id === id);
        if (issueIndex > -1) {
          draftIssue[status].splice(issueIndex, 1);
        }
      }),
    );
  };

  const getIssueById = ({ id }: { id: string }) => {
    for (let status in issueData) {
      const issue = issueData[status as keyof IssueDataType].find((issue) => issue.id === id);
      if (issue) return issue;
    }
    return undefined;
  };

  const reorderIssue = ({
    status,
    sourceIndex,
    destinationIndex,
  }: {
    status: IssueStatusType;
    sourceIndex: number;
    destinationIndex: number;
  }) => {
    setIssueData(
      produce(issueData, (draftIssue) => {
        const [removed] = draftIssue[status].splice(sourceIndex, 1);
        draftIssue[status].splice(destinationIndex, 0, removed);
      }),
    );
  };

  const moveIssue = ({
    sourceStatus,
    destinationStatus,
    sourceIndex,
    destinationIndex,
  }: {
    sourceStatus: IssueStatusType;
    destinationStatus: IssueStatusType;
    sourceIndex: number;
    destinationIndex: number;
  }) => {
    setIssueData(
      produce(issueData, (draftIssue) => {
        let [removed] = draftIssue[sourceStatus].splice(sourceIndex, 1);
        removed.status = destinationStatus;
        draftIssue[destinationStatus].splice(destinationIndex, 0, removed);
      }),
    );
  };

  return {
    issueData,
    setIssueData,
    createIssue,
    updateIssue,
    deleteIssue,
    getIssueById,
    reorderIssue,
    moveIssue,
  };
}

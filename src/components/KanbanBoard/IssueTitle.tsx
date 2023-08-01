import { css } from '@emotion/react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useRecoilValue } from 'recoil';

import deleteStateAtom from '@/atoms/deleteStateAtom';
import { useIssue } from '@/hooks/useIssue';
import { IssueStateType } from '@/types/issue';

import DeleteHoverBtn from '../common/DeleteHoverBtn';
import DeleteConfirmation from '../Toast/DeleteConfirmation';
import IssueInput from './IssueInput';

type IssueTitleProps = {
  issue?: IssueStateType;
  autoFocus?: boolean;
  onBlur?: () => void;
  onCreateIssue?: (title: string) => void;
};

export default function IssueTitle({ issue, autoFocus, onBlur, onCreateIssue }: IssueTitleProps) {
  const isDelete = useRecoilValue(deleteStateAtom(issue?.id));

  const { deleteIssue } = useIssue();

  const handleIssueDelete = () => {
    if (!issue) return;
    toast.warn(<DeleteConfirmation id={issue.id} />);
  };

  useEffect(() => {
    if (isDelete && issue?.id) {
      deleteIssue({ id: issue.id, status: issue.status });
    }
  }, [isDelete]);

  return (
    <div css={issueTitleStyle}>
      <IssueInput
        issue={issue}
        autoFocus={autoFocus}
        onBlur={onBlur}
        onCreateIssue={onCreateIssue}
      />
      {issue && <DeleteHoverBtn onClick={handleIssueDelete} />}
    </div>
  );
}

const issueTitleStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding-bottom: 12px;
  gap: 6px;
  min-height: 38px;
`;

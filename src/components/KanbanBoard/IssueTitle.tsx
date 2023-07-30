import { css } from '@emotion/react';

import { useIssue } from '@/hooks/useIssue';
import { IssueStateType } from '@/types/issue';

import DeleteHoverBtn from '../common/DeleteHoverBtn';
import IssueInput from './IssueInput';

type IssueTitleProps = {
  issue?: IssueStateType;
  autoFocus?: boolean;
  onBlur?: () => void;
  onCreateIssue?: (title: string) => void;
};

export default function IssueTitle({ issue, autoFocus, onBlur, onCreateIssue }: IssueTitleProps) {
  const { deleteIssue } = useIssue();

  const handleIssueDelete = () => {
    if (issue) deleteIssue({ id: issue.id, status: issue.status });
  };

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
`;

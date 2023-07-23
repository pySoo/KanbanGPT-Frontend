import { css } from '@emotion/react';
import { useState } from 'react';

import { IssueStateType } from '@/types/issue';

import Label from '../common/Label';
import CreateIssueBtn from './CreateIssueBtn';
import IssueMemo from './IssueMemo';

type KanbanCardProps = {
  title: string;
  labelColor: string;
  issueList?: IssueStateType[];
};

export default function KanbanCard({ title, labelColor, issueList }: KanbanCardProps) {
  const [isCreateIssue, setIsCreateIssue] = useState(false);

  const handleCreateBtnClick = () => {
    setIsCreateIssue(true);
  };

  const handleIssueBlur = () => {
    setIsCreateIssue(false);
  };

  const handleIssueSubmit = () => {
    setIsCreateIssue(false);
  };

  return (
    <div css={kanbanLayoutStyle}>
      <div css={kanbanCardStyle}>
        <Label bgColor={labelColor}>{title}</Label>
        {issueList?.map((issue) => <IssueMemo key={issue.id} issue={issue} />)}
        {isCreateIssue && <IssueMemo onBlur={handleIssueBlur} onSubmit={handleIssueSubmit} />}
        <CreateIssueBtn onClick={handleCreateBtnClick} />
      </div>
    </div>
  );
}

const kanbanLayoutStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const kanbanCardStyle = css`
  min-height: 185px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  padding: 10px;
  padding-bottom: 15px;
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-top: 15px;
`;

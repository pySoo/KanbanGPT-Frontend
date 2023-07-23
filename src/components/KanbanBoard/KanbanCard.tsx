import { css } from '@emotion/react';

import { IssueStateType } from '@/types/issue';

import IssueMemo from '../IssueMemo';
import Label from '../Label';
import CreateIssueBtn from './CreateIssueBtn';

type KanbanCardProps = {
  title: string;
  labelColor: string;
  issueList?: IssueStateType[];
};

export default function KanbanCard({ title, labelColor, issueList }: KanbanCardProps) {
  return (
    <div css={kanbanLayoutStyle}>
      <div css={kanbanCardStyle}>
        <Label bgColor={labelColor}>{title}</Label>
        <CreateIssueBtn />
        {issueList?.map((issue) => <IssueMemo key={issue.id} issue={issue} />)}
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
  padding-bottom: 20px;
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-top: 15px;
`;

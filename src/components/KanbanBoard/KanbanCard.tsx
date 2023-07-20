import { css } from '@emotion/react';

import IssueMemo from '../IssueMemo';
import Label from '../Label';
import CreateIssueBtn from './CreateIssueBtn';

type KanbanCardProps = {
  title: string;
  labelColor: string;
  issues?: Record<string, string>[];
};

export default function KanbanCard({ title, labelColor, issues }: KanbanCardProps) {
  return (
    <div css={kanbanLayoutStyle}>
      <div css={kanbanCardStyle}>
        <Label bgColor={labelColor}>{title}</Label>
        <CreateIssueBtn />
        {issues?.map(({ id, title }) => <IssueMemo key={id} title={title} />)}
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

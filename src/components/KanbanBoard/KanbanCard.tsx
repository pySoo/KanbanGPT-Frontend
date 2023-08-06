import { css } from '@emotion/react';

import { IssueStateType, IssueStatusType } from '@/types/issue';

import Label from '../common/Label';
import KanbanDroppable from './KanbanDroppable';

type KanbanCardProps = {
  status: IssueStatusType;
  title: string;
  labelColor: string;
  issueList?: IssueStateType[];
};

export default function KanbanCard({ status, title, labelColor, issueList }: KanbanCardProps) {
  return (
    <li css={kanbanLayoutStyle}>
      <article className="kanban-card">
        <Label bgColor={labelColor}>{title}</Label>
        <KanbanDroppable status={status} issueList={issueList} />
      </article>
    </li>
  );
}

const kanbanLayoutStyle = css`
  width: 100%;
  min-width: 280px;
  height: 100%;
  padding: 10px 0;

  .kanban-card {
    min-height: 185px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    padding: 10px;
    padding-bottom: 15px;
    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    scroll-snap-align: center;
  }
`;

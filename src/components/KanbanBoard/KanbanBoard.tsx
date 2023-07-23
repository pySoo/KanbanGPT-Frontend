import { css } from '@emotion/react';
import { useContext } from 'react';

import { kanbanBoardTitleData } from '@/constants/kanbanBoard';
import { IssueStateContext } from '@/contexts/Issue/IssueContext';
import { theme, ThemeType } from '@/styles/theme';
import { IssueStatusType } from '@/types/issue';

import KanbanCard from './KanbanCard';

export default function KanbanBoard() {
  const issueList = useContext(IssueStateContext);

  const issueHandler = (status: IssueStatusType) => {
    return issueList.filter((issue) => issue.status === status);
  };

  return (
    <section css={kanbanBoardListStyle(theme)}>
      {kanbanBoardTitleData.map(({ status, title, labelColor }) => (
        <KanbanCard
          key={status}
          title={title}
          labelColor={labelColor}
          issueList={issueHandler(status)}
        />
      ))}
    </section>
  );
}
const kanbanBoardListStyle = (theme: ThemeType) => css`
  width: 100%;
  max-width: ${theme.screens.lg};
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 0px;
`;

import { css } from '@emotion/react';

import { kanbanBoardList } from '@/constants/kanbanBoard';
import { theme, ThemeType } from '@/styles/theme';

import IssuePopup from './IssuePopup';
import KanbanCard from './KanbanCard';

export default function KanbanBoard() {
  return (
    <section css={kanbanBoardListStyle(theme)}>
      {kanbanBoardList.map(({ title, labelColor, issues }) => (
        <KanbanCard key={title} title={title} labelColor={labelColor} issues={issues} />
      ))}
      <IssuePopup />
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

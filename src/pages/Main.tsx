import { css } from '@emotion/react';

import KanbanBoard from '@/components/KanbanBoard/KanbanBoard';
import { theme, ThemeType } from '@/styles/theme';

export default function Main() {
  return (
    <main css={mainPageStyle(theme)}>
      <h1 className="kanban-title">ISSUE BOARD</h1>
      <KanbanBoard />
    </main>
  );
}

const mainPageStyle = (theme: ThemeType) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  .kanban-title {
    font-size: 1.6rem;
    margin-bottom: 10px;
    font-weight: 700;
    color: ${theme.colors.done};
    :hover {
      color: ${theme.colors.primary};
    }
  }
`;

import { css } from '@emotion/react';

import KanbanBoard from '@/components/KanbanBoard/KanbanBoard';
import { theme, ThemeType } from '@/styles/theme';

export default function Main() {
  return (
    <div css={mainPageStyle(theme)}>
      <h1 className="main-title">ISSUE BOARD</h1>
      <KanbanBoard />
    </div>
  );
}

const mainPageStyle = (theme: ThemeType) => css`
  width: 100vw;
  height: calc(100vh - 56px);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  .main-title {
    font-size: 1.6rem;
    margin-bottom: 20px;
    font-weight: 700;
    color: ${theme.colors.done};
  }
`;

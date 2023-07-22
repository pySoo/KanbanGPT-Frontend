import { css } from '@emotion/react';

import KanbanBoard from '@/components/KanbanBoard/KanbanBoard';

export default function Main() {
  return (
    <div css={mainPageStyle}>
      <h1 css={titleStyle}>ISSUE BOARD</h1>
      <KanbanBoard />
    </div>
  );
}

const mainPageStyle = css`
  height: calc(100vh - 56px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

const titleStyle = css`
  font-size: 1.4rem;
  margin-bottom: 20px;
`;

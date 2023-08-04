import { css } from '@emotion/react';
import { Oval } from 'react-loader-spinner';

import { theme } from '@/styles/theme';

export default function Loading() {
  return (
    <div css={loadingStyle}>
      <Oval
        visible={true}
        height="50"
        width="50"
        ariaLabel="kanban-gpt-loading"
        color={theme.colors.green}
      />
    </div>
  );
}

const loadingStyle = css`
  height: calc(100vh - 56px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 56px;
`;

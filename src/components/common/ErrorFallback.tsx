import { css } from '@emotion/react';
import { useErrorBoundary } from 'react-error-boundary';

import { theme, ThemeType } from '@/styles/theme';

export default function ErrorFallback() {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div css={errorFallbackStyle(theme)}>
      <p>문제가 발생했습니다.</p>
      <button onClick={resetBoundary}>새로고침</button>
    </div>
  );
}

const errorFallbackStyle = (theme: ThemeType) => css`
  height: calc(100vh - 56px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding-bottom: 56px;
  color: ${theme.colors.primary};

  p {
    font-size: 1.2rem;
    font-weight: 500;
  }

  button {
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.green};
    border-radius: 8px;
    padding: 4px;
  }
`;

import { css } from '@emotion/react';
import { Comment } from 'react-loader-spinner';

import { theme, ThemeType } from '@/styles/theme';

export default function GPTLoading() {
  return (
    <div css={gptLoadingStyle(theme)}>
      <Comment
        visible={true}
        height="80"
        width="80"
        ariaLabel="gpt-loading"
        color="#fff"
        backgroundColor={theme.colors.green}
      />
      <span>GPT가 열심히 코드를 생성하고 있어요.</span>
      <span>조금만 기다려 주세요 💬</span>
    </div>
  );
}

const gptLoadingStyle = (theme: ThemeType) => css`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  span {
    color: ${theme.colors.green};
  }
`;

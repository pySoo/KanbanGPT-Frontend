import { css } from '@emotion/react';
import { Comment } from 'react-loader-spinner';

export default function GPTLoading() {
  return (
    <div css={gptLoadingStyle}>
      <Comment
        visible={true}
        height="80"
        width="80"
        ariaLabel="gpt-loading"
        color="#fff"
        backgroundColor="#F4442E"
      />
      <span>GPT가 열심히 코드를 만들고 있어요</span>
    </div>
  );
}

const gptLoadingStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

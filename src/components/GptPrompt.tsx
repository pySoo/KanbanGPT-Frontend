import { css } from '@emotion/react';

import CodeBlock from './CodeBlock';

type GPTPromptProps = {
  prompt?: string;
};

export default function GPTPrompt({ prompt }: GPTPromptProps) {
  return (
    <div css={gptPromptStyle}>
      {prompt ? (
        <div css={codeBlockStyle}>
          <CodeBlock code={prompt} />
        </div>
      ) : (
        <div>
          <span>GPT 버튼을 눌러서 코드를 검색해 보세요!</span>
        </div>
      )}
    </div>
  );
}

const gptPromptStyle = css`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
  flex-shrink: 0;
`;

const codeBlockStyle = css`
  width: 100%;
  height: 100%;
`;

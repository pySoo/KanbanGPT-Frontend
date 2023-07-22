import { css } from '@emotion/react';

import CodeBlock from './CodeBlock';

export default function GPTPrompt() {
  return (
    <div css={gptPromptStyle}>
      <div css={codeBlockStyle}>
        <CodeBlock />
      </div>
    </div>
  );
}

const codeBlockStyle = css`
  width: 100%;
  height: 100%;
`;

const gptPromptStyle = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
  flex-shrink: 0;
`;

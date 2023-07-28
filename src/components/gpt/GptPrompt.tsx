import { css } from '@emotion/react';

import useConnectGpt from '@/hooks/useConnectGpt';
import { RequirementStateType } from '@/types/requirement';

import CodeBlock from './CodeBlock';

type GPTPromptProps = {
  requirement?: RequirementStateType;
};

export default function GPTPrompt({ requirement }: GPTPromptProps) {
  const { isConnected } = useConnectGpt();

  const handleCodeCopy = async () => {
    if (!requirement) return;
    try {
      await navigator.clipboard.writeText(requirement.title);
      window.open('https://chat.openai.com', '_blank');
    } catch (e) {
      alert('링크 복사에 실패했습니다.');
    }
  };

  const handleClick = () => {
    handleCodeCopy();
  };

  return (
    <div css={gptPromptStyle}>
      {isConnected ? (
        <div css={codeBlockStyle}>
          {requirement?.gpt ? (
            <CodeBlock code={requirement.gpt} />
          ) : (
            <p>GPT 버튼을 눌러서 코드를 검색해 보세요 🚀</p>
          )}
        </div>
      ) : (
        <div>
          <div>
            <p>GPT API key가 없나요?</p>
            <p>요구사항을 복사해드릴테니 gpt에 바로 검색해 보세요!</p>
            {requirement ? (
              <div>
                <span>{requirement?.title}</span>
                <button onClick={handleClick}>검색하기</button>
              </div>
            ) : (
              <div>
                <span>{'요구사항을 선택해 주세요'}</span>
              </div>
            )}
          </div>
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

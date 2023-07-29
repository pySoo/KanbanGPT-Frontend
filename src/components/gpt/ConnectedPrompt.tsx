import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';

import loadingStateAtom from '@/atoms/loadingStateAtom';
import { RequirementStateType } from '@/types/requirement';

import CodeBlock from './CodeBlock';
import GPTLoading from './GPTLoading';

type ConnectedPromptProps = {
  requirement?: RequirementStateType;
};

export default function ConnectedPrompt({ requirement }: ConnectedPromptProps) {
  const isLoading = useRecoilValue(loadingStateAtom(requirement?.id));

  return (
    <div>
      {isLoading ? (
        <GPTLoading />
      ) : (
        <div css={codeBlockStyle}>
          {requirement?.gpt ? (
            <CodeBlock code={requirement.gpt} />
          ) : (
            <p>GPT 버튼을 눌러서 코드를 검색해 보세요 🚀</p>
          )}
        </div>
      )}
    </div>
  );
}

const codeBlockStyle = css`
  width: 100%;
  height: 100%;
`;

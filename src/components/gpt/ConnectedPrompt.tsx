import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';

import loadingStateAtom from '@/atoms/loadingStateAtom';
import { theme, ThemeType } from '@/styles/theme';
import { RequirementStateType } from '@/types/requirement';

import CodeBlock from './CodeBlock';
import GPTLoading from './GPTLoading';
import GPTSearchInfo from './info/GPTSearchInfo';

type ConnectedPromptProps = {
  requirement?: RequirementStateType;
};

export default function ConnectedPrompt({ requirement }: ConnectedPromptProps) {
  const isLoading = useRecoilValue(loadingStateAtom(requirement?.id));

  return (
    <div css={connectedPromptStyle(theme)}>
      <h2 className="text-green">GPT로 구현 속도 높이기 🚀</h2>
      {isLoading ? (
        <GPTLoading />
      ) : (
        <div>
          {requirement?.gpt ? (
            <CodeBlock code={requirement.gpt} />
          ) : (
            <>
              <p>
                • GPT 버튼을 눌러서 <span className="text-green">요구사항을 구현한 코드</span>를
                받아보세요!
              </p>
              <p className="code-block-bottom">• 프레임워크와 언어를 입력하면 정확도가 올라가요.</p>
              <GPTSearchInfo />
            </>
          )}
        </div>
      )}
    </div>
  );
}

const connectedPromptStyle = (theme: ThemeType) => css`
  width: 100%;
  height: 100%;
  color: ${theme.colors.text};

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .code-block-bottom {
    padding-bottom: 30px;
  }

  .text-green {
    color: ${theme.colors.green};
    padding-bottom: 15px;
  }

  .text-beige {
    color: ${theme.colors.beige};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

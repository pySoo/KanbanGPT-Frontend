import { css } from '@emotion/react';

import { theme, ThemeType } from '@/styles/theme';
import { RequirementStateType } from '@/types/requirement';

import Label from '../common/Label';
import CodeBlock from '../gpt/CodeBlock';

type CodeArchiveItemProps = {
  requirement: RequirementStateType;
};

export default function CodeArchiveItem({ requirement }: CodeArchiveItemProps) {
  return (
    <div css={codeArchiveItemStyle(theme)}>
      <div className="archive-requirement-title">
        <Label>요구사항</Label>
        <p>{requirement.title}</p>
      </div>
      {requirement.gpt && (
        <div className="archive-code-block">
          <CodeBlock code={requirement.gpt} />
        </div>
      )}
    </div>
  );
}

const codeArchiveItemStyle = (theme: ThemeType) => css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${theme.colors.green};
  }

  .archive-requirement-title {
    display: flex;
    gap: 10px;
  }

  .archive-code-block {
    display: flex;
    overflow: hidden;
  }
`;

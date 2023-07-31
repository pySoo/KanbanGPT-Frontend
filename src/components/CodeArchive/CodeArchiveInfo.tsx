import { css } from '@emotion/react';
import { Comment } from 'react-loader-spinner';

import { theme } from '@/styles/theme';

import CodeBlock from '../gpt/CodeBlock';

export default function CodeArchiveInfo() {
  return (
    <div css={codeArchiveInfoStyle}>
      <div className="archive-comment-icon">
        <Comment
          visible={true}
          height="45"
          width="45"
          ariaLabel="gpt-loading"
          color="#fff"
          backgroundColor={theme.colors.green}
        />
      </div>
      <div className="archive-code-block">
        <CodeBlock
          code={`코드를 생성한 내역이 없어요.\nAPI Key를 등록해서\n요구사항을 구현한 코드를 확인해 보세요!`}
          language="markdown"
        />
      </div>
    </div>
  );
}

const codeArchiveInfoStyle = css`
  position: relative;
  width: 100%;
  max-width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 15px;
  margin: auto;

  .archive-comment-icon {
    position: absolute;
    left: 0;
  }

  .archive-code-block {
    padding-top: 45px;
  }
`;

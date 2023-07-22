import { css } from '@emotion/react';
import { useEffect } from 'react';

import { bodyScroll } from '@/utils/scroll';

import GPTPrompt from '../GptPrompt';
import RequirementList from '../KanbanBoard/RequirementList';

export default function IssueModal() {
  useEffect(() => {
    bodyScroll.disable();
    return () => {
      bodyScroll.enable();
    };
  }, []);

  return (
    <div css={containerStyle}>
      <h2 css={titleStyle}>title</h2>
      <section css={issueSectionStyle}>
        <RequirementList />
        <GPTPrompt />
      </section>
    </div>
  );
}

const containerStyle = css`
  height: 100%;
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  overflow: hidden;
`;

const titleStyle = css`
  font-size: 1.2rem;
  font-weight: 700;
`;

const issueSectionStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
  padding: 10px 0;
`;

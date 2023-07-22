import { css } from '@emotion/react';
import { useEffect } from 'react';

import { bodyScroll } from '@/utils/scroll';

import GPTPrompt from '../GptPrompt';
import RequirementList from './RequirementList';

export default function IssuePopup() {
  useEffect(() => {
    bodyScroll.disable();
    return () => {
      bodyScroll.enable();
    };
  }, []);

  return (
    <div css={issuePopupStyle}>
      <div css={containerStyle}>
        <h2 css={titleStyle}>title</h2>
        <section css={issueSectionStyle}>
          <RequirementList />
          <GPTPrompt />
        </section>
      </div>
    </div>
  );
}

const issuePopupStyle = css`
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  padding-top: 56px;
  z-index: 999;
  background: #00000090;
`;

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
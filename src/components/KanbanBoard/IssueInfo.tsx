import { css } from '@emotion/react';

import DevEnvironmentForm from './DevEnvironmentForm';

type IssueInfoProps = {
  issueTitle: string;
};

export default function IssueInfo({ issueTitle }: IssueInfoProps) {
  return (
    <div css={issueInfoStyle}>
      <h2 className="issue-modal-title">{issueTitle}</h2>
      <DevEnvironmentForm />
    </div>
  );
}
const issueInfoStyle = css`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 10px;

  .issue-modal-title {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;
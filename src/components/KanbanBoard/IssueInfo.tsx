import { css } from '@emotion/react';

import DevEnvironmentForm from './DevEnvironmentForm';

type IssueInfoProps = {
  issueTitle: string;
};

export default function IssueInfo({ issueTitle }: IssueInfoProps) {
  return (
    <section css={issueInfoStyle}>
      <h2 className="issue-modal-title">{issueTitle}</h2>
      <DevEnvironmentForm />
    </section>
  );
}
const issueInfoStyle = css`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 20px 5px 20px;

  .issue-modal-title {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

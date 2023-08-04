import { css } from '@emotion/react';

import { theme, ThemeType } from '@/styles/theme';

import DevEnvironmentForm from './DevEnvironmentForm';

type IssueInfoProps = {
  issueTitle: string;
};

export default function IssueInfo({ issueTitle }: IssueInfoProps) {
  return (
    <section css={issueInfoStyle(theme)}>
      <h2 className="issue-modal-title">{issueTitle}</h2>
      <DevEnvironmentForm />
    </section>
  );
}
const issueInfoStyle = (theme: ThemeType) => css`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 10px 20px;

  .issue-modal-title {
    font-size: 1.2rem;
    font-weight: 700;
  }

  @media (min-width: ${theme.screens.md}px) {
    flex-direction: row;
    gap: 20px;
    padding-bottom: 5px;
  }
`;

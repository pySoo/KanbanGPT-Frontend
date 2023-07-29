import { css } from '@emotion/react';

import { RequirementStateType } from '@/types/requirement';

import RequirementCheckToggle from '../Requirement/RequirementCheckToggle';

type IssuePreviewListProps = {
  requirements: RequirementStateType[];
};

export default function IssuePreviewList({ requirements }: IssuePreviewListProps) {
  return (
    <ul css={issuePreviewListStyle}>
      {requirements.map((requirement) => (
        <li key={requirement.id} css={issuePreviewItemStyle}>
          <RequirementCheckToggle requirement={requirement} />
          <p id="requirement-title">{requirement.title}</p>
        </li>
      ))}
    </ul>
  );
}

const issuePreviewListStyle = css`
  display: flex;
  flex-direction: column;
`;

const issuePreviewItemStyle = css`
  display: flex;
  align-items: center;
  gap: 10px;

  #requirement-title {
    padding: 5px 0;
  }
`;

import { css } from '@emotion/react';

import { theme, ThemeType } from '@/styles/theme';
import { RequirementStateType } from '@/types/requirement';

import EllipsisIcon from '../icons/EllipsisIcon';
import RequirementCheckToggle from '../Requirement/RequirementCheckToggle';

type IssuePreviewListProps = {
  requirements: RequirementStateType[];
};

export default function IssuePreviewList({ requirements }: IssuePreviewListProps) {
  const maxRequirements = requirements.slice(0, 4);

  return (
    <ul css={issuePreviewListStyle(theme)}>
      {maxRequirements.map((requirement) => (
        <li key={requirement.id} css={issuePreviewItemStyle}>
          <RequirementCheckToggle requirement={requirement} />
          <p className="requirement-title">{requirement.title}</p>
        </li>
      ))}
      {requirements.length > 4 && (
        <div className="ellipsis-icon">
          <EllipsisIcon />
        </div>
      )}
    </ul>
  );
}

const issuePreviewListStyle = (theme: ThemeType) => css`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .ellipsis-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.darkGray};
  }
`;

const issuePreviewItemStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 5px 0;

  .requirement-title {
    color: ${theme.colors.beige};
    width: calc(100% - 20px);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;

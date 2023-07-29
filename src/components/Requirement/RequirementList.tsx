import { css } from '@emotion/react';

import { RequirementStateType } from '@/types/requirement';

import RequirementItem from '../Requirement/RequirementItem';
import RequirementInput from './RequirementInput';

type RequirementListProps = {
  issueId: string;
  requirements?: RequirementStateType[];
  onSelectId: (id?: string) => void;
};

export default function RequirementList({
  issueId,
  requirements,
  onSelectId,
}: RequirementListProps) {
  console.log(requirements);
  return (
    <ul css={requirementListStyle}>
      {requirements?.map((requirement) => (
        <RequirementItem key={requirement.id} requirement={requirement} onSelectId={onSelectId} />
      ))}
      <RequirementInput issueId={issueId} onSelectId={onSelectId} />
    </ul>
  );
}

const requirementListStyle = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`;

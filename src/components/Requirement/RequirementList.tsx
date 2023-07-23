import { css } from '@emotion/react';

import { RequirementType } from '@/types/issue';

import RequirementInput from '../Requirement/RequirementInput';
import RequirementItem from '../Requirement/RequirementItem';

type RequirementListProps = {
  requirements?: RequirementType[];
  onSelectId: (id: string) => void;
};

export default function RequirementList({ requirements, onSelectId }: RequirementListProps) {
  return (
    <ul css={requirementListStyle}>
      {requirements?.map((requirement) => (
        <RequirementItem key={requirement.id} requirement={requirement} onSelectId={onSelectId} />
      ))}
      <RequirementInput />
    </ul>
  );
}

const requirementListStyle = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`;

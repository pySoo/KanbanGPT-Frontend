import { css } from '@emotion/react';

import { RequirementStateType } from '@/types/requirement';

import RequirementCheckToggle from './RequirementCheckToggle';
import RequirementControlBtn from './RequirementControlBtn';
import RequirementInput from './RequirementInput';

type RequirementItemProps = {
  requirement: RequirementStateType;
  onSelectId: (id?: string) => void;
};

export default function RequirementItem({ requirement, onSelectId }: RequirementItemProps) {
  return (
    <li css={requirementItemStyle}>
      <RequirementCheckToggle requirement={requirement} />
      <RequirementInput
        issueId={requirement.issueId}
        requirement={requirement}
        onSelectId={onSelectId}
      />
      <RequirementControlBtn requirement={requirement} onSelectId={onSelectId} />
    </li>
  );
}

const requirementItemStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

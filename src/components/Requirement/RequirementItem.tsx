import { css } from '@emotion/react';

import { useRequirement } from '@/hooks/useRequirement';
import { RequirementStateType } from '@/types/requirement';

import DeleteIcon from '../icons/DeleteIcon';
import RequirementCheckToggle from './RequirementCheckToggle';
import RequirementInput from './RequirementInput';

type RequirementItemProps = {
  requirement: RequirementStateType;
  onSelectId: (id?: string) => void;
};

export default function RequirementItem({ requirement, onSelectId }: RequirementItemProps) {
  const { deleteRequire } = useRequirement();

  const handleRequireDelete = () => {
    deleteRequire({ id: requirement.id });
  };

  return (
    <li css={requirementItemStyle}>
      <div css={titleSectionStyle}>
        <RequirementCheckToggle requirement={requirement} />
        <RequirementInput
          issueId={requirement.issueId}
          requirement={requirement}
          onSelectId={onSelectId}
        />
        <button css={deleteBtnStyle} onClick={handleRequireDelete}>
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
}

const requirementItemStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const titleSectionStyle = css`
  display: flex;
  gap: 10px;
`;

const deleteBtnStyle = css`
  display: flex;
  align-items: center;
  padding-left: 5px;
`;

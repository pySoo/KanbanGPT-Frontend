import { css } from '@emotion/react';
import { useState } from 'react';

import { useRequirement } from '@/hooks/useRequirement';
import { RequirementStateType } from '@/types/requirement';

import CheckLottie from '../common/CheckLottie';
import CheckCircleIcon from '../icons/CheckCircleIcon';
import DeleteIcon from '../icons/DeleteIcon';
import EmptyCircleIcon from '../icons/EmptyCircleIcon';
import RequirementInput from './RequirementInput';

type RequirementItemProps = {
  requirement: RequirementStateType;
  onSelectId: (id?: string) => void;
};

export default function RequirementItem({ requirement, onSelectId }: RequirementItemProps) {
  const { isCompleted } = requirement;
  const { updateRequire, deleteRequire } = useRequirement();

  const [isClicked, setIsClicked] = useState(false);
  const [isChecked, setIsChecked] = useState(isCompleted);

  const handleToggleChecked = () => {
    !isClicked && setIsClicked(true);
    setIsChecked(!isChecked);
    updateRequire({ ...requirement, isCompleted: !isChecked });
  };

  const handleRequireDelete = () => {
    deleteRequire({ id: requirement.id });
  };

  return (
    <li css={requirementItemStyle}>
      <div css={titleSectionStyle}>
        <div css={checkboxStyle} onClick={handleToggleChecked}>
          {!isClicked && (isChecked ? <CheckCircleIcon /> : <EmptyCircleIcon />)}
          {isClicked && (isChecked ? <CheckLottie /> : <EmptyCircleIcon />)}
        </div>
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

const checkboxStyle = css`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const deleteBtnStyle = css`
  display: flex;
  align-items: center;
  padding-left: 5px;
`;

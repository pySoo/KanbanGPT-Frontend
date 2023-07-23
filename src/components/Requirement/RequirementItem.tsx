import { css } from '@emotion/react';
import { useState } from 'react';

import { RequirementType } from '@/types/issue';

import CheckLottie from '../common/CheckLottie';
import CheckCircleIcon from '../icons/CheckCircleIcon';
import EmptyCircleIcon from '../icons/EmptyCircleIcon';
import RequirementInput from './RequirementInput';

type RequirementItemProps = {
  requirement: RequirementType;
  onSelectId: (id: string) => void;
};

export default function RequirementItem({ requirement, onSelectId }: RequirementItemProps) {
  const { isCompleted } = requirement;

  const [isClicked, setIsClicked] = useState(false);
  const [isChecked, setIsChecked] = useState(isCompleted);

  const handleToggleChecked = () => {
    setIsChecked(!isChecked);
    !isClicked && setIsClicked(true);
  };

  return (
    <li css={requirementItemStyle}>
      <div css={titleSectionStyle}>
        <div css={checkboxStyle} onClick={handleToggleChecked}>
          {!isClicked && (isChecked ? <CheckCircleIcon /> : <EmptyCircleIcon />)}
          {isClicked && (isChecked ? <CheckLottie /> : <EmptyCircleIcon />)}
        </div>
        <RequirementInput requirement={requirement} onSelectId={onSelectId} />
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

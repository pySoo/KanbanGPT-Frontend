import { css } from '@emotion/react';
import { useState } from 'react';

import { RequirementType } from '@/types/issue';

import CheckLottie from '../common/CheckLottie';
import EmptyCircleIcon from '../icons/EmptyCircleIcon';
import GPTIcon from '../icons/GPTIcon';

type RequirementItemProps = {
  requirement: RequirementType;
  onSelectId: (id: string) => void;
};

export default function RequirementItem({ requirement, onSelectId }: RequirementItemProps) {
  const { id, isCompleted, title } = requirement;

  console.log(title);
  const [isChecked, setIsChecked] = useState(isCompleted);

  const handleToggleChecked = () => {
    setIsChecked(!isChecked);
  };

  const handleClick = () => {
    onSelectId(id);
  };

  return (
    <li css={requirementItemStyle}>
      <div css={titleSectionStyle}>
        <div css={checkboxStyle} onClick={handleToggleChecked}>
          {isChecked ? <CheckLottie /> : <EmptyCircleIcon />}
        </div>
        <label css={titleStyle} htmlFor="requirement" onClick={handleClick}>
          {title}
        </label>
      </div>
      <GPTIcon />
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

const titleStyle = css`
  padding: 2px 5px;
  cursor: pointer;
  border-radius: 4px;
  :hover {
    background: #00000080;
  }
`;

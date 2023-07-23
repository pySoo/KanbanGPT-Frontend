import { css } from '@emotion/react';
import { useState } from 'react';

import CheckLottie from './CheckLottie';
import EmptyCircleIcon from './icons/EmptyCircleIcon';
import GPTIcon from './icons/GPTIcon';

export default function RequirementItem() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li css={requirementItemStyle}>
      <div css={checkboxStyle} onClick={handleToggleChecked}>
        {isChecked ? <CheckLottie /> : <EmptyCircleIcon />}
      </div>
      <label htmlFor="requirement">요구사항</label>
      <GPTIcon />
    </li>
  );
}

const requirementItemStyle = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const checkboxStyle = css`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

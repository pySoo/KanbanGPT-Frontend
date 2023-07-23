import { css } from '@emotion/react';
import { ChangeEvent, FormEvent, useState } from 'react';

import { RequirementType } from '@/types/issue';

import EmptyCircleIcon from '../icons/EmptyCircleIcon';
import GPTIcon from '../icons/GPTIcon';

type RequirementInputProps = {
  requirement?: RequirementType;
  onSelectId?: (id: string) => void;
};

export default function RequirementInput({ requirement, onSelectId }: RequirementInputProps) {
  const [text, setText] = useState(requirement?.title);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleTextClick = () => {
    if (requirement && onSelectId) {
      onSelectId(requirement.id);
    }
  };

  return (
    <div css={requirementInputStyle}>
      {!requirement && <EmptyCircleIcon css={{ flexShrink: 0 }} />}
      <form onSubmit={handleSubmit} css={formStyle}>
        <input
          placeholder="요구사항을 입력해주세요!"
          value={text}
          onChange={handleInputChange}
          onClick={handleTextClick}
          css={inputStyle}
        />
      </form>
      <GPTIcon />
    </div>
  );
}

const requirementInputStyle = css`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 3px 0;
`;

const formStyle = css`
  display: flex;
  align-items: center;
`;

const inputStyle = css`
  width: 100%;
  height: 24px;
  border: 1px solid black;
  padding: 2px 5px;
`;

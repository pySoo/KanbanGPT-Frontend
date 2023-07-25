import { css } from '@emotion/react';
import { FormEvent } from 'react';

import useInput from '@/hooks/useInput';
import { useRequirement } from '@/hooks/useRequirement';
import { RequirementStateType } from '@/types/requirement';

import EmptyCircleIcon from '../icons/EmptyCircleIcon';
import GPTIcon from '../icons/GPTIcon';

type RequirementInputProps = {
  issueId: string;
  requirement?: RequirementStateType;
  onSelectId?: (id: string) => void;
};

export default function RequirementInput({
  issueId,
  requirement,
  onSelectId,
}: RequirementInputProps) {
  const { value, setValue, bind } = useInput(requirement?.title);
  const { createRequire, updateRequire } = useRequirement();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim() === '') return;

    if (requirement) {
      updateRequire({ ...requirement, title: value });
    } else {
      createRequire({ issueId, title: value });
      setValue('');
    }
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
          onClick={handleTextClick}
          css={inputStyle}
          {...bind}
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

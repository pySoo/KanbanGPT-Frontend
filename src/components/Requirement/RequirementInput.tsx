import { css } from '@emotion/react';
import { useMutation } from 'react-query';

import { postCodeGeneration } from '@/api/gpt';
import useConnectGpt from '@/hooks/useConnectGpt';
import useInput from '@/hooks/useInput';
import { useRequirement } from '@/hooks/useRequirement';
import { RequirementStateType } from '@/types/requirement';

import Textarea from '../common/Textarea';
import EmptyCircleIcon from '../icons/EmptyCircleIcon';
import GPTIcon from '../icons/GPTIcon';

type RequirementInputProps = {
  issueId: string;
  requirement?: RequirementStateType;
  onSelectId: (id?: string) => void;
};

export default function RequirementInput({
  issueId,
  requirement,
  onSelectId,
}: RequirementInputProps) {
  const { ref, value, setValue, bind } = useInput<HTMLTextAreaElement>(requirement?.title);
  const title = value.trim();

  const { apiKey } = useConnectGpt();
  const mutation = useMutation(postCodeGeneration);

  const { createRequire, updateRequire } = useRequirement();

  const handleRequireUpdate = () => {
    if (!requirement || title === '') return;

    updateRequire({ ...requirement, title });
  };

  const handleRequireSubmit = () => {
    if (title === '') {
      alert('내용을 입력해 주세요!');
      return;
    }

    if (requirement) {
      updateRequire({ ...requirement, title });
    } else {
      createRequire({ issueId, title });
      setValue('');
    }
  };

  const getGeneratedGptCode = async () => {
    if (!requirement) return;

    const response = await mutation.mutateAsync({ prompt: requirement.title, apiKey });
    if (response?.message) {
      updateRequire({ id: requirement.id, gpt: response?.message });
    }
  };

  const handleRequireSelected = () => {
    onSelectId(requirement?.id);
  };

  const handleGptIconClick = () => {
    if (apiKey) getGeneratedGptCode();

    handleRequireSelected();
  };

  return (
    <div css={requirementInputStyle}>
      {!requirement && <EmptyCircleIcon css={{ flexShrink: 0 }} />}
      <Textarea
        ref={ref}
        placeholder="요구사항을 입력해주세요!"
        onUpdate={handleRequireUpdate}
        onSubmit={handleRequireSubmit}
        onClick={handleRequireSelected}
        css={textareaStyle}
        {...bind}
      />
      {requirement && <GPTIcon onClick={handleGptIconClick} />}
    </div>
  );
}

const requirementInputStyle = css`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 3px 0;
`;

const textareaStyle = css`
  width: 100%;
  height: 24px;
  border: 1px solid black;
  padding: 2px 5px;
`;

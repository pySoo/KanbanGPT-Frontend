import { css } from '@emotion/react';
import { toast } from 'react-toastify';

import useInput from '@/hooks/useInput';
import { useRequirement } from '@/hooks/useRequirement';
import { theme, ThemeType } from '@/styles/theme';
import { RequirementStateType } from '@/types/requirement';

import HoverIcon from '../common/HoverIcon';
import Textarea from '../common/Textarea';
import EmptyCircleIcon from '../icons/EmptyCircleIcon';
import PlusIcon from '../icons/PlusIcon';

type RequirementInputProps = {
  issueId: string;
  requirement?: RequirementStateType;
  autoFocus?: boolean;
  onSelectId: (id?: string) => void;
};

export default function RequirementInput({
  issueId,
  requirement,
  autoFocus,
  onSelectId,
}: RequirementInputProps) {
  const { ref, value, setValue, bind } = useInput<HTMLTextAreaElement>(requirement?.title);
  const title = value.trim();

  const { createRequire, updateRequire } = useRequirement();

  const handleRequireUpdate = () => {
    if (!requirement || title === '') return;

    updateRequire({ ...requirement, title });
  };

  const handleRequireSubmit = () => {
    if (title === '') {
      toast.warning('내용을 입력해 주세요!');
      return;
    }

    if (requirement) {
      updateRequire({ ...requirement, title });
      return;
    }

    createRequire({ issueId, title });
    setValue('');
  };

  const handleRequireSelected = () => {
    onSelectId(requirement?.id);
  };

  return (
    <div css={requirementInputStyle(theme)}>
      {!requirement && <EmptyCircleIcon css={{ flexShrink: 0 }} />}
      <Textarea
        ref={ref}
        aria-label="require-textarea"
        className="require-textarea"
        autoFocus={autoFocus}
        placeholder="요구사항을 입력해 주세요."
        onUpdate={handleRequireUpdate}
        onSubmit={handleRequireSubmit}
        onClick={handleRequireSelected}
        {...bind}
      />
      {!requirement && (
        <HoverIcon
          aria-label="requirement-submit-btn"
          icon={<PlusIcon size={20} />}
          onClick={handleRequireSubmit}
        />
      )}
    </div>
  );
}

const requirementInputStyle = (theme: ThemeType) => css`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 3px 0;

  .require-textarea {
    width: 100%;
    height: 24px;
    border-bottom: ${`1px solid ${theme.colors.lightGray}`};
    padding: 2px 5px;
    overflow: hidden;
    resize: none;

    :focus {
      border-color: ${theme.colors.green};
    }
  }
  color: ${theme.colors.green};
`;

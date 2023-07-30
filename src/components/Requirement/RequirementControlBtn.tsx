import { css } from '@emotion/react';
import { toast } from 'react-toastify';

import { useRequirement } from '@/hooks/useRequirement';
import { theme, ThemeType } from '@/styles/theme';
import { RequirementStateType } from '@/types/requirement';

import HoverIcon from '../common/HoverIcon';
import GPTGenerateCodeBtn from '../gpt/GPTGenerateCodeBtn';
import DeleteIcon from '../icons/DeleteIcon';
import SearchIcon from '../icons/SearchIcon';

type RequirementControlBtnProps = {
  requirement: RequirementStateType;
  onSelectId: (id?: string) => void;
};

export default function RequirementControlBtn({
  requirement,
  onSelectId,
}: RequirementControlBtnProps) {
  const { deleteRequire } = useRequirement();

  const handleSearch = async () => {
    try {
      await navigator.clipboard.writeText(requirement.title);
      toast.success('요구사항을 복사했어요. 붙여넣기로 GPT에 바로 검색해 보세요!');
      setTimeout(() => {
        window.open('https://chat.openai.com', '_blank');
      }, 1200);
    } catch (e) {
      toast.error('요구사항 복사에 실패했어요. 다시 시도해 주세요.');
    }
  };

  const handleDelete = () => {
    toast.warn('정말 삭제하시겠습니까?');
    deleteRequire({ id: requirement.id });
  };

  return (
    <div css={requirementItemBtnStyle(theme)}>
      <HoverIcon icon={<GPTGenerateCodeBtn requirement={requirement} onSelectId={onSelectId} />} />
      <HoverIcon icon={<SearchIcon size={18} />} onClick={handleSearch} />
      <HoverIcon
        className="requirement-delete-btn"
        icon={<DeleteIcon size={18} />}
        onClick={handleDelete}
      />
    </div>
  );
}

const requirementItemBtnStyle = (theme: ThemeType) => css`
  display: flex;
  gap: 2px;
  padding: 2px 5px;
  color: ${theme.colors.green};

  .requirement-delete-btn {
    color: ${theme.colors.red};
    opacity: 0.2;
    :hover {
      opacity: 0.6;
    }
  }
`;

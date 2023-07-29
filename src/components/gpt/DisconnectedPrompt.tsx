import { css } from '@emotion/react';
import { toast } from 'react-toastify';

import { useModal } from '@/hooks/useModal';
import { ModalType } from '@/types/modal';
import { RequirementStateType } from '@/types/requirement';

type DisconnectedPromptProps = {
  requirement?: RequirementStateType;
};

export default function DisconnectedPrompt({ requirement }: DisconnectedPromptProps) {
  const { openModal, clearModal } = useModal();

  const handleCodeCopy = async () => {
    if (!requirement) return;
    try {
      await navigator.clipboard.writeText(requirement.title);
      window.open('https://chat.openai.com', '_blank');
    } catch (e) {
      toast.error('링크 복사에 실패했습니다.');
    }
  };

  const goToSetup = () => {
    clearModal();
    openModal({ type: ModalType.GPT_INFO });
  };

  return (
    <div css={disconnectedPromptStyle}>
      <div className="api-container">
        <p>GPT API key를 등록하면 요구사항에 대한 코드를 바로 받아볼 수 있어요.</p>
        <button onClick={goToSetup}>등록하러 가기</button>
      </div>
      <div className="search-container">
        <span>검색 버튼을 누르면 gpt에 검색할 내용을 만들어 드려요!</span>
        <span>GPT 사이트가 열리면 붙여넣기를 해보세요</span>
      </div>
    </div>
  );
}

const disconnectedPromptStyle = css`
  display: flex;
  flex-direction: column;
  gap: 20px;

  button {
    color: green;
  }

  .api-container {
    button {
      padding-top: 10px;
    }
  }

  .search-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
